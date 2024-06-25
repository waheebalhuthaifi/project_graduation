<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Services extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'title',
        'description',
        'price',
        'delivery_time',
        'user_id',
        'status',
         'image'
        // 'file',
    ];
    // protected $attributes = [
    //     'created_at' => 'U',
    // ];
    public function users(){
        return $this->belongsTo(User::class ,'user_id','id');
    }
    public function category(){
        return $this->belongsTo(Category::class);

    }
    public function getDeadlineAttribute()
    {
        return $this->delivery_time ? $this->delivery_time->format('Y-m-d') : null;
    }

    public function setDeadlineAttribute($value)
    {
        $this->delivery_time = $value ? Carbon::parse($value) : null;
    }
//     public function chat()
// {
//     return $this->hasMany(Chat::class,'service_id');
// }
public function order(){
    return $this->hasMany(Order::class,);

}
public function chats()
{
    return $this->hasMany(Chat::class, 'service_id');
}


}
