<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Chat extends Model
{
    use HasFactory;
    protected $table='chats';
    protected $fillable = [
        'id',
        'freelancer_id',
        'client_id',
        'conversation_id',
        'service_id',
        'message',

    ];
    //////////////////////Chat/////////////////////////////

// public function messages()
// {
//     return $this->hasMany(User::class);
// }
public function conversation()
{
    return $this->belongsTo(Conversation::class);
}

public function sender()
{
    return $this->belongsTo(User::class, 'freelancer_id');
}

public function receiver()
{
    return $this->belongsTo(User::class, 'client_id');
}
    // public function freelancer()
    // {
    //     return $this->belongsTo(User::class, 'freelancer_id'); // 'freelancer_id' references User
    // }

    // public function client()
    // {
    //     return $this->belongsTo(User::class, 'client_id');
    // }

    public function service()
    {
        return $this->belongsTo(Services::class, 'service_id');
    }
     // Broadcast on new chat message creation

      //////////////////////end/////////////////////////////
//     public function user()
// {
//     return $this->belongsTo(User::class);
// }
//     public function project()
// {
//     return $this->belongsTo(Project::class);
// }


// public function messages()
// {
//     return $this->hasMany(Message::class);
// }
}
