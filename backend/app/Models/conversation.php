<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conversation extends Model
{
    use HasFactory;
    protected $fillable = ['user1_id', 'user2_id'];

    public function chats()
    {
        return $this->hasMany(Chat::class,'conversation_id');
    }
    // public function participants()
    // {
    //     return $this->belongsToMany(User::class, 'conversation_participants');
    // }
    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
    public function user()
    {
        return $this->belongsToMany(User::class);
    }



    // public function users()
    // {
    //     return $this->belongsToMany(User::class, 'conversation_user');
    // }
}
