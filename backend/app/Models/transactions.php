<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transactions extends Model
{
    use HasFactory;
    protected $fillable = [
        'sender_name',
        'user_id',
        'sender_whatsapp',
        'amount',
        'transaction_number',
        'transaction_document',
    ];

    protected $casts = [
        'amount' => 'float',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
