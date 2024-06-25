<?php

namespace App\Events;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    /**
     * Create a new event instance.
     */



    // public function __construct(Chat $chat,User $ClientsenderProfile ,$recipientId )
    // {
    //     $this->chat = $chat;
    //     $this->ClientsenderProfile= $ClientsenderProfile;
    //     $this->recipientId = $recipientId;
    // }
    public $message;
    public $Freelancer_id;
    public  $user1_id;
    public $userId2;

    public function __construct($message ,$user1_id, $userId2)
    {
        $this->message = $message;
        $this->userId2 = $userId2;
        $this->user1_id = $user1_id;
    }


    public function broadcastOn()
    {
        // return new PrivateChannel('private-events-conversation.'.$this->Freelancer_id);
        return [
            new PrivateChannel('private-events-conversation.'.$this->userId2),
            new PrivateChannel('private-events-conversation.'.$this->user1_id),
        ];

    }

//     public function toArray()
// {
//     return [
//         'message' => $this->message,
//         'chatID' => $this->chatID,
//     ];
// }


    // public function broadcastAs()
    // {
    //     return 'message';
    // }

//     public function toArray(Chat $chat,User $ClientsenderProfile ,  $recipientId): array
// {
//     return [

//         $this->chat = $chat,
//         $this->ClientsenderProfile= $ClientsenderProfile,
//         $this->recipientId = $recipientId,
//     ];
// }



}
