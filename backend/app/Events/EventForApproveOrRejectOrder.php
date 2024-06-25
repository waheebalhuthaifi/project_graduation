<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EventForApproveOrRejectOrder implements ShouldBroadcast

{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $status;
    public $sellerID;
    public $causeMessage;
    public function __construct($status, $sellerID ,$causeMessage)
    {
        $this->status=$status;
        $this->sellerID=$sellerID;
        $this->causeMessage=$causeMessage;

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('private-eventForApproveOrRejectOrder.'.$this->sellerID),
        ];
    }
}
