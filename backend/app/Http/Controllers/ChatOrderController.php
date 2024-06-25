<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\conversation;
use Illuminate\Http\Request;
use App\Events\ChatOrderEvent;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ChatOrderController extends Controller
{
    //
    // newMessage: newMessage,
    // client: orders.buyer_id,
    // Freelancer_id: services.user_id,
    // serviceID:services.id,
    public function store(Request $request){


        $newMessage=$request->input('newMessage');
        $freelancerID=$request->input('Freelancer_id');
        $serviceID=$request->input('serviceID');
        $client=$request->input(('client'));
        $freelancerID = User::find($freelancerID);
        $client = User::find( $client);
        $type=$request->input('type');


        $conversation = conversation::where(function ($query) use ( $client,$freelancerID) {
            $query->where('user1_id',  $client->id)
                  ->where('user2_id',$freelancerID->id);
        })
        ->orWhere(function ($query) use ( $client, $freelancerID) {
            $query->where('user1_id', $freelancerID->id)
                  ->where('user2_id',   $client->id);
        })
        ->first();


        if (!$conversation) {
            $conversation = conversation::insert([
                'user1_id' => $freelancerID->id,
                'user2_id' =>  $client->id,
            ]);
        }


        $message = new Chat();
        $message->message =$newMessage;

        // Find the freelancer and client by their IDs


        // Save the freelancer and client IDs
        $message->freelancer_id =  $freelancerID->id;
        $message->client_id = $client->id;
        $message->service_id =  $serviceID;
        $message->conversation_id=$conversation ->id;
        $message->type =$type ;


        $message->save();

        // Dispatch the ChatOrderEvent
        event(new ChatOrderEvent( $message->message, $client->id,$freelancerID->id));

        return response()->json([
            'message' => 'Message stored successfully',
            'data' => $message
        ], 201);


         // if ($request->Freelancer_id === auth("sanctum")->user()->id){
        //     return response()->json(['message' => "You cannot send message to yourself"]);
        // }

       
    }
    // public function getMessageContract(Request $request)
    // {

    //     $validator = Validator::make($request->all(), [
    //         'Freelancer_id' => 'required|integer',
    //         'Client_ID' => 'required|integer',
    //         'service_id' => 'required|integer',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors(), 422);
    //     }
    //     $validatedData = $validator->validated();
    //     $user = Auth::user(); // Assuming you have user authentication

    //     // if ($user->id !== $validatedData['Freelancer_id'] && $user->id !== $validatedData['Client_ID']) {
    //     //     return response()->json(['error' => 'Unauthorized to access messages'], 403);
    //     // }

    //     // $chatMessages = Chat::where(function ($query) use ($validatedData) {
    //     //     $query->where([
    //     //         ['freelancer_id', $validatedData['Freelancer_id']],
    //     //         ['client_id', $validatedData['Client_ID']],
    //     //     ])
    //     //     ->orWhere([
    //     //         ['freelancer_id', $validatedData['Client_ID']],
    //     //         ['client_id', $validatedData['Freelancer_id']],
    //     //     ]);
    //     // })->with(['freelancer','client'])
    //     // ->get();
    //     $chatMessages = Chat::whereIn('freelancer_id',[$validatedData['Freelancer_id'],$validatedData['Client_ID']])
    //     ->whereIn('client_id',[$validatedData['Freelancer_id'],$validatedData['Client_ID']])->get();

    //     // $chatMessages = Chat::whereHas('freelancer', function ($query) use ($validatedData) {
    //     //     $query->where('freelancer_id', $validatedData['Freelancer_id'])
    //     //            ->where('client_id', $validatedData['Client_ID']);
    //     // })
    //     // ->whereHas('client', function ($query) use ($validatedData) { // Duplicate condition
    //     //     $query->where('freelancer_id', $validatedData['Client_ID'])
    //     //            ->where('client_id', $validatedData['Freelancer_id']);
    //     // })
    //     // ->get();

    //     if ($chatMessages->isEmpty()) {
    //         return response()->json(['error' => 'no chat']);
    //     } else {
    //         // No need to call get() again, use $chatMessages directly
    //         return response()->json($chatMessages);
    //     }
    //     // return response()->json( $chatMessages);
    // }

    public function getMessageContract(Request $request)
{

  $freelancerID=$request->input('Freelancer_id');
  $clientID=$request->input('Client_ID');
  $serviceID=$request->input('serviceID');

//   $type ='EventChat';
  $chatMessages = Chat::whereIn('freelancer_id', [ 4,20])
                    ->whereIn('client_id', [ 4, 20])->where('type', 'EventChat')
                    ->get();

  if ($chatMessages->isEmpty()) {
    return response()->json(['error' => 'no chat']);
  } else {
    return response()->json($chatMessages);
  }
}


}
