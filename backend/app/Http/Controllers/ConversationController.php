<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Events\MessageEvent;
use App\Models\conversation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ConversationController extends Controller
{
    //

    public function index(Request $request)
    {
        $userId1=auth()->user()->id;//4
        $userId2=$request->Freelancer_id;//7

        $conversation = Conversation::where(function ($query) use ($userId1, $userId2) {
            $query->where('user1_id', $userId1) //4
                  ->where('user2_id', $userId2);//7
        })
        ->orWhere(function ($query) use ($userId1, $userId2) {
            $query->where('user1_id', $userId2) //7
                  ->where('user2_id', $userId1);//4
        })
        ->first();

        if (!$conversation) {
            $conversation = Conversation::create([
                'user1_id' => $userId1,
                'user2_id' => $userId2,
            ]);
        }

        $messages = $conversation->chats()->get();

        return response()->json([
            'conversation' => $conversation,
            'messages' => $messages,
        ]);
    }
    public function storeMessage(Request $request, Conversation $conversation)
    {

        $message = Chat::insert([
            'client_id' => auth()->id(),
            'freelancer_id' =>$request->Freelancer_id,
            'message' => $request->message,
            'conversation_id'=>1
        ]);
        $messageTo=$request->message;
        $conversation_id=1;
        event(new MessageEvent($messageTo ,$conversation_id));


        return response()->json(['message'=>$messageTo,'conversation_id'=>$conversation_id]);
    }
    // public function storeMessage(Request $request, Conversation $conversation)
    // {
    //     // Data Validation
    //     $validatedData = $request->validate([
    //         'message' => 'required|string',
    //     ]);

    //     // Extract Message and Conversation ID
    //     $message = $validatedData['message'];
    //     // $conversationId = $conversation->id;
    //     $conversationId = 1;

    //     // Save Message to Database
    //     $newMessage = Chat::create([
    //         'client_id' => 4, // Get current user ID
    //         'freelancer_id' =>4,
    //         'message' => $message,
    //         'conversation_id' => $conversationId,
    //     ]);

    //     // Dispatch Message Event
    //     event(new MessageEvent($message, $conversationId));

    //     // Prepare Response Data
    //     $responseData = [
    //         'message' => $message,
    //         'conversation_id' => $conversationId,
    //     ];

    //     return response()->json($responseData);
    // }




    public function show($user2_id)
    {
        $conversation = Conversation::with('chats')->find($user2_id);
        // $conversation = Conversation::with('chats')->get();
         // Check if conversation exists
         if (!$conversation) {
            return response()->json(['error' => 'Conversation not found'], 404);
        }

        // Prepare conversation data
        $conversationData = [
            'id' => $conversation->id,
            // 'user1_id' => $conversation->client_id,
            // 'user2_id' => $conversation->freelancer_id,
            'messages' => $conversation->chats->map(function ($chat) {
                return [
                    'id' => $chat->id,
                    'client_id' => $chat->client_id,
                    'freelancer_id' => $chat->freelancer_id,
                    'message' => $chat->message,
                    // 'created_at' => $chat->created_at,
                ];
            }),
        ];
         return response()->json([
            'data' => $conversationData,
            // 'messages' => $messages,
        ]);

        // Return conversation data
        // return response()->json($conversation);

        // $user2_id=4;
        // $user1_id=auth()->id;
        // $conversations = Conversation::where(function ($query) use ($user1_id,$user2_id) {
        //     $query->where(['user1_id'=>$user1_id, 'user2_id'=>$user2_id]);
        // })
        // ->orWhere( function ($query) use ($user1_id,$user2_id) { // Duplicate condition
        //     $query->where(['user1_id'=>$user2_id, 'user2_id'=>$user1_id]);
        // })->with('chats')->first();
        // $chat=Chat::find($conversations);
        // // $messages =Conversation::messages()->with('freelancer', 'client')->get();

        // return response()->json([
        //     'data' => $conversations,
        //     // 'messages' => $messages,
        // ]);
    }
    ///code below to create صفحة محادثه

    // public function store(Request $request)
    // {
    //     // احصل على معرف المستخدم الحالي
    //     $user1Id = Auth::id();

    //     // احصل على معرف المستخدم الآخر من الطلب
    //     $user2Id = $request->input('person');

    //     // تحقق من وجود محادثة موجودة بالفعل بين المستخدمين
    //     $existingConversation = Conversation::where(function ($query) use ($user1Id, $user2Id) {
    //         $query->where('user1_id', $user1Id)
    //               ->where('user2_id', $user2Id);
    //     })->orWhere(function ($query) use ($user1Id, $user2Id) {
    //         $query->where('user1_id', $user2Id)
    //               ->where('user2_id', $user1Id);
    //     })->first();

    //     if ($existingConversation) {
    //         // إذا كانت هناك محادثة موجودة بالفعل، قم بإرجاع بيانات المحادثة أو القيام بأي إجراء آخر
    //         return response()->json($existingConversation);
    //     } else {
    //         // إذا لم تكن هناك محادثة موجودة، قم بإنشاء محادثة جديدة
    //         $conversation = Conversation::create([
    //             'user1_id' => $user1Id,
    //             'user2_id' => $user2Id,
    //             // أضف أي حقول إضافية للمحادثة هنا
    //         ]);

    //         return response()->json($conversation, 201);
    //     }
    // }
    public function store(Request $request, $Freelancer_id ,User $user)
    {
        // if ($request->Freelancer_id === auth("sanctum")->user()->id){
        //     return response()->json(['message' => "You cannot send message to yourself"]);
        // }

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
        event(new MessageEvent($message->message ,$client->id, $freelancerID->id));
        // event(new ChatOrderEvent( $message->message, $client->id,$freelancerID->id));

        return response()->json([
            'message' => 'Message stored successfully',
            'data' => $message
        ], 201);


         // if ($request->Freelancer_id === auth("sanctum")->user()->id){
        //     return response()->json(['message' => "You cannot send message to yourself"]);
        // }


        // $user1_id=$Freelancer_id;
        // $userId2=auth()->id();



        // $conversation = Conversation::where(function ($query) use ( $user1_id,$userId2) {
        //     $query->where('user1_id',  $user1_id)
        //           ->where('user2_id', $userId2);
        // })
        // ->orWhere(function ($query) use ( $user1_id, $userId2) {
        //     $query->where('user1_id', $userId2)
        //           ->where('user2_id',  $user1_id);
        // })
        // ->first();


        // if (!$conversation) {
        //     $conversation = Conversation::insert([
        //         'user1_id' => $userId2,
        //         'user2_id' =>  $user1_id,
        //     ]);
        // }

        // $chat = new Chat([
        //     'freelancer_id' => $userId2,
        //     'client_id' =>  $user1_id,
        //     'message' => $request->input('message'),
        //     'conversation_id' =>$conversation->id,
        // ]);

        // $conversation->chats()->save($chat);
        // $messageTo=$request->message;
        // $conversation_id=$conversation->id;
        // event(new MessageEvent($messageTo , $user1_id, $userId2));


        // // return response()->json(['message'=>$messageTo,'conversation_id'=>$conversation_id]);

        // return response()->json($chat);

        // return response()->json( $chat);
    }

}
