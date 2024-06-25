<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use App\Events\EventService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    // register a new user method
    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $response = $this->broker()->sendResetLink(
            $request->only('email')
        );

        return $response == Password::RESET_LINK_SENT
            ? response()->json(['message' => 'Password reset link sent'])
            : response()->json(['error' => 'Unable to send reset link'], 400);
    }

    private function broker()
    {
        return Password::broker();
    }


    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        try {
            $this->emailverify($user->email);

            $token = $user->createToken('auth_token')->plainTextToken;

            if ($token) {
                $cookie = cookie('token', $token, 60 * 24); // 1 day

                return response()->json([
                    'user' => new UserResource($user),
                    'token' => $token,
                ])->withCookie($cookie);
                // event(new EventService('hello world'));
            } else {
                return response()->json(['error' => 'Token generation failed'], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function emailverify($email)
    {
        // $email = $request['email'];
        $user = User::where('email', $email)->first();
        if($user){
            $user->emailverification();
            return response()->json(['status'=>'success','message'=>'Verify Your Email Address']);
        }else{
            return response()->json(['status'=>'error','message'=>'User Not Found']);
        }
    }
     /* confirm email Verification Status */
     public function verifyEmail(Request $request)
     {
         $token = $request->input('token');

         $user = User::where('email_verification_token', $token)->first();
        //  if ($user) {
            if ($user) {
                $user->email_verified_at = now();
                $user->email_verification_token = null;
                $user->email_verified = 1;
                $user->save();

                return response()->json(['status' => 'success','token'=> $token, 'message' => 'Email verified successfully']);
            }

            // return response()->json(['message' => 'Invalid verification token.'], 404);

            //  if ($user->email_verified_at === null) {

            //      $user->update([
            //          'email_verified_at' => now(),
            //          'email_verification_token' => null,
            //          'email_verified' => 1,
            //      ]);

            //      return response()->json(['status' => 'success','token'=> $token, 'message' => 'Email verified successfully']);
            //  } else {
                 return response()->json(['status' => 'error', 'message' => 'Email already verified']);

        //  }
     }
    //  public function resendVerifyEmail(Request $request)
    //  {
    //      if ($request->user()->hasVerifiedEmail()) {
    //         return response()->json(['status' => 'error', 'message' => 'Email already verified']);

    //      }

    //      $request->user()->emailverification();

    //      return response()->json([
    //          'message' => 'Verification email resent.',
    //          'status' => 'success'
    //      ]);
    //  }
    public function forgotpassword(Request $request)
    {
        $email = $request->email;
        $user = User::where('email', $email)->first();
        if($user){
            $password = Str::random(10);
            Mail::send([],[],function($message) use($email, $password){
                $message->to($email)
                        ->subject("Reset Password")
                        ->html("<p>Use This New Password for you Email : </p><br/>".$password);
            });
            User::where('email', $email)->update(['password'=>Hash::make($password)]);
            return response()->json(['status'=>'success','message'=>'New Password send in your email']);
        }else{
            return response()->json(['status'=>'error','message'=>'User Not Found']);
        }
    }

    public function changepassword(Request $request)
    {
        $userId = $request->userId;
        $currentPassword =  $request->cpassword;
        $newpassword = $request->npassword;

        $user = User::find($userId);
        if($user){
            if(Hash::check($currentPassword, $user->password)){
                User::where('id', $userId)->update(['password'=>Hash::make($newpassword)]);

                return response()->json(['status'=>'success','message'=>'Password Change Successfully']);
            }else{
                return response()->json(['status'=>'error','message'=>'Current Password Not Match']);
            }
        }else{
            return response()->json(['status'=>'error','message'=>'User Not Found']);
        }
    }


    // login a user method
    public function login(LoginRequest $request)
    {
        // dd("Hello");
        $data = $request->validated();

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day
        // event(new EventService('hello world User'));

        return response()->json([
            'user' => new UserResource($user),
            'token' => $token

        ])->withCookie($cookie);
    }

    // logout a user method
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged out successfully!'
        ])->withCookie($cookie);
    }

    // get the authenticated user method
    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user);
    }
    public function update(Request $request, $id)
    {
        if ($request->input('firstName')) {
            $validatedData = $request->validate([

                'firstName' => 'required|string',
                'lastName' => 'string',
                'email' => 'required|email',
                'phone_number' => 'string',
                'city' => 'string',


            ]);
            $user = User::find($id);
            $user->firstName = $validatedData['firstName'];
            $user->lastName = $request->input('lastName');
            $user->email = $validatedData['email'];
            $user->phone_number = $validatedData['phone_number'];
            $user->city = $validatedData['city'];
            $user->date_of_birth = $request->input('date_of_birth');
            $user->save();

            return response()->json(['message' => 'تم تحديث بيانات المستخدم بنجاح']);
        } else if ($request->input('username')) {
            $validatedData = $request->validate([

                'username' => 'required|string',

                'field' => 'string',
                'user_type' => 'string',
                'Specialization' => 'string'

            ]);
            $user = User::find($id);
            $user->username = $validatedData['username'];
            $user->field = $validatedData['field'];
            $user->user_type = $validatedData['user_type'];
            $user->Specialization = $validatedData['Specialization'];
            $user->save();

            return response()->json(['message' => 'تم تحديث بيانات المستخدم بنجاح']);
        }


        // تحديث بيانات المستخدم


    }
}
