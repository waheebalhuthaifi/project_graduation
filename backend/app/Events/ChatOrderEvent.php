<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatOrderEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public  $message;
    // public $userID;
     public $freelancerID;
     public $client;
    public function __construct($message , $client,$freelancerID)
    {
        $this->message = $message;
        $this->client = $client;
        $this->freelancerID = $freelancerID;
        // $this->order = $order;

    }

    public function broadcastOn()
    {
        return [
        new PrivateChannel('private-ChatAboutOrder.'.$this->freelancerID),
        new PrivateChannel('private-ChatAboutOrder.'.$this->client),
    ];


    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

}
