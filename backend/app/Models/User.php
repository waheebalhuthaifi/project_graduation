<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Str;
use React\Http\Io\Transaction;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstName',
        'lastName',
        'username',
        'role',
        'email',
        'email_verified_at',
        'email_verification_token',
        'email_verified',
        'date_of_birth',
        'phone_number',
        'city',
        'gender',
        'field',
        'summary',
        'Specialization',
        'image',
        'user_type',
        'password',

    ];
    protected $attributes = [
        'created_at' => 'U',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

//     public function unreadNotifications()
// {
//     return $this->notifications()->unread();
// }
   public function buyer(){
        return $this->belongsTo(Order::class,'buyer_id');

    }
    public function seller(){
        return $this->belongsTo(Order::class,'seller_id');

    }
  protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function balance()
    {
        return $this->hasOne(balances::class);
    }
    public function transactions()
    {
        return $this->hasMany(transactions::class);
    }

    public function payments()
    {
        return $this->hasMany(payments::class);
    }

    public function withdrawals()
    {
        return $this->hasMany(withdrawals::class);
    }


    public function emailverification(){
        $email = $this->email;
        $token = Str::random(40);
        $user = User::where('email',$email)->first();

        $user->update(['email_verification_token' => $token]);
        $link = env('FRONTEND_URL').'/'.'email-verification?token='.$token;
        \Mail::send([],[],function($message) use($email, $link){
            $message->to($email)
                    ->subject("Verify Your Email Address")
                    ->html("<p>Verify Your Email</p><br/><a href='".$link."'>Verify Email Address</a>");
        });
        return $link;
    }
//     public function hasVerifiedEmail()
// {
//     return  is_null($this->email_verified_at);
// }

// public function messagess(){
//     $this->hasMany(Messagess::class);
// }
public function notifications()
{
    return $this->hasMany(Notification::class);
}
//     public function notifications()
// {
//     return $this->hasMany(Notification::class); // Assuming your notification model is named 'Notification'
// }


public function chats()
{
    return $this->hasMany(Chat::class, 'id');
}
// public function conversations()
// {
//     return $this->hasMany(Conversation::class);
// }
public function conversations()
{
    return $this->belongsToMany(Conversation::class);
}



    public function projects(){
        return $this->hasMany(Project::class);
    }
    public function service(){
        return $this->hasMany(Services::class ,'user_id','id');
    }
//     public function chat()
// {
//     return $this->hasMany(Chat::class , 'id');
// }
// public function chat_user()
// {
//     return $this->belongsToMany(Chat::class);
// }

}
