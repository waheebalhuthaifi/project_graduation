<?php

namespace App\Http\Controllers;

use Pusher\Pusher;
use App\Models\Chat;
use App\Models\User;
use App\Models\Message;
use App\Models\Services;
use App\Models\Messagess;
use App\Events\MessageEvent;
use Illuminate\Http\Request;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        // $this->middleware('auth:sanctum');

    }
    public function authenticate(Request $request)
    {
        $pusher = new Pusher(
            config('pusher.app_id'),
            config('pusher.app_key'),
            config('pusher.app_secret'),
            [
                'cluster' => config('pusher.app_cluster'),
                'encrypted' => true,
            ]
        );

        $channel_name = $request->channel_name;

        $socket_id = $request->socket_id;

        $presence_data = [
            'user_id' => auth()->user()->id,
            'user_info' => [
                'name' => auth()->user()->name,
            ],
        ];

        $auth = $pusher->presence_auth($channel_name, $socket_id, $presence_data);

        return response()->json(['auth' => $auth]);
    }
    public function message(Request $request){
        // $user = auth()->user(); // الحصول على المستخدم المسجل

        // $validatedData = $request->validate([
        //     'Client_ID' => 'required|integer',
        //     'Freelancer_id' => 'required|integer',
        //     'message' => 'required|string',
        //     'service_id' => 'required|integer',
        // ]);

        // // تحقق من أن عناوين العميل والمستقل صحيحة
        // $client = User::findOrFail($validatedData['Client_ID']);
        // $freelancer = User::findOrFail($validatedData['Freelancer_id']);

        // $data = Chat::create([
        //     'client_id' => $client->id,
        //     'freelancer_id' => $freelancer->id,
        //     'message' => $validatedData['message'],
        //     'service_id' => $validatedData['service_id'],
        // ]);

        // return response()->json($data, 201);


        // event(new MessageEvent($client->firstName ,$client->firstName));
        // return [];

    }
    // public function selectUser($id){
    //     $user=User::findOrFail($id);
    //     $messages=Messagess::where(function($query) use($id){
    //         $query->where('from',$id)->where('to',auth()->id());
    //     })->orWhere(function($query) use($id){
    //         $query->where('from',auth()->id())->where('to',$id);
    //     })->get();

    //     // return Response()->json(
    //     //     'user' =>$user,
    //     //     'chats' =>$messages
    //     // );
    //     return response()->json([ 'chats' =>$messages, 'user' =>$user]);
    // }
    public function getIDFreelancerService(Request $request ,$id )
    {
        try {
            $services = Services::findOrFail($id);
           $getUser=$services->user_id;

            return response()->json($getUser);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch services'], 500);
        }
    }
    public function getConversationForService(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'Freelancer_id' => 'required|integer',
            'Client_ID' => 'required|integer',
            // 'service_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $validatedData = $validator->validated();
        $user = Auth::user(); // Assuming you have user authentication

        // if ($user->id !== $validatedData['Freelancer_id'] && $user->id !== $validatedData['Client_ID']) {
        //     return response()->json(['error' => 'Unauthorized to access messages'], 403);
        // }

        // $chatMessages = Chat::where(function ($query) use ($validatedData) {
        //     $query->where([
        //         ['freelancer_id', $validatedData['Freelancer_id']],
        //         ['client_id', $validatedData['Client_ID']],
        //     ])
        //     ->orWhere([
        //         ['freelancer_id', $validatedData['Client_ID']],
        //         ['client_id', $validatedData['Freelancer_id']],
        //     ]);
        // })->with(['freelancer','client'])
        // ->get();
        $chatMessages = Chat::whereIn('freelancer_id',[$validatedData['Freelancer_id'],$validatedData['Client_ID']])
        ->whereIn('client_id',[$validatedData['Freelancer_id'],$validatedData['Client_ID']])->get();

        // $chatMessages = Chat::whereHas('freelancer', function ($query) use ($validatedData) {
        //     $query->where('freelancer_id', $validatedData['Freelancer_id'])
        //            ->where('client_id', $validatedData['Client_ID']);
        // })
        // ->whereHas('client', function ($query) use ($validatedData) { // Duplicate condition
        //     $query->where('freelancer_id', $validatedData['Client_ID'])
        //            ->where('client_id', $validatedData['Freelancer_id']);
        // })
        // ->get();

        if ($chatMessages->isEmpty()) {
            return response()->json(['error' => 'no chat']);
        } else {
            // No need to call get() again, use $chatMessages directly
            return response()->json($chatMessages);
        }
        // return response()->json( $chatMessages);
    }



    // public function sendMessage(Request $request)
    // {
    //     $msg=$request->get('message');
    //     // $validatedData = $request->validate([
    //     //     'message' => 'required|string',
    //     // ]);

    //     $message = Messagess::create([
    //         'from' => Auth::id(),
    //         'to' => Auth::id(),
    //         'message' => $msg,
    //     ]);

    //     // broadcast(new MessageEvent($message))->toOthers();

    //     return response()->json($message);
    // }

    // public function getMessages()
    // {
    //     $messages = Messagess::with('receiver')->get();
    //     return response()->json($messages);
    // }
    public function index()
    {
        // // Get all chats for the current user (based on authentication logic)
        // $chats = Message::where('sender_id', 1)->get();

        // return response()->json($chats);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user(); // الحصول على المستخدم المسجل

        $validatedData = $request->validate([
            // 'Client_ID' => 'required|integer',
            'Freelancer_id' => 'required|integer',
            'message' => 'required|string',
            'service_id' => 'required|integer',
        ]);
        // تحقق من أن عناوين العميل والمستقل صحيحة
        // $client = User::findOrFail($validatedData['Client_ID']);
        $freelancer = User::findOrFail($validatedData['Freelancer_id']);

        $chat = new Chat();
        $chat->client_id = auth()->user()->id;
        $chat->freelancer_id =  $freelancer->id;
        $chat->message = $validatedData['message'];
        $chat->service_id =  $validatedData['service_id'];

        $chat->save();

        // $data = Chat::create([
        //     'client_id' => auth()->user()->id,
        //     'freelancer_id' => $freelancer->id,
        //     'message' => $validatedData['message'],
        //     'service_id' => $validatedData['service_id'],
        // ]);

        // $conversationId = $data->id;
         // Fetch sender profile information
    // $sender = $validatedData['Client_ID'] === $user->id ? $client : $freelancer;
    $ClientsenderProfile = auth()->user();
    // $senderProfile = User::find($sender->id)->only(['id', 'firstName']);

    // Send event with message and sender profile
    $recipientId = $validatedData['Freelancer_id'] !== auth()->user()->id ? $validatedData['Freelancer_id'] : auth()->user()->id;
    event(new MessageEvent($chat, $ClientsenderProfile , $recipientId));

        // event(new MessageEvent($data));
        // return response()->json($message);
        return response()->json(['message' => 'Chat message sent successfully!', '$data' => $validatedData['message'] ,' $recipientId'=> $recipientId]);

        // return response()->json($data, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show($chatId)
    {
        // $chat = Message::where('id', 1)->where('sender_id', 1)->firstOrFail();

        // return response()->json($chat->messages);
    }
//     public function getUserConversations(Request $request)
// {
//     $conversations = Message::all();

//     return response()->json($conversations);
// }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
