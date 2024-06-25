<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payments extends Model
{
    use HasFactory;
    protected $fillable = [
        'client_id',
        'freelancer_id',
        'transaction_id',
        'amount',
        'payment_method',
        'payment_date',
        'payment_status',
    ];

    protected $casts = [
        'amount' => 'float',
        'payment_date' => 'date',
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function freelancer()
    {
        return $this->belongsTo(User::class, 'freelancer_id'); 
    }

    public function transaction()
    {
        return $this->belongsTo(transactions::class);
    }
}
