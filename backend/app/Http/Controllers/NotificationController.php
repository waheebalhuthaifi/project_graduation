<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    //
    // public function index(Request $request ,$sellerID)
    // {
    //     // $Seller_id=$request->input('seller_id');
    //     $notifications = $sellerID->notifications()->where('is_read', 0)->get();



    //     return response()->json($notifications);
    // }
    public function show(Request $request ,$sellerID)
    {
        $seller = User::findOrFail($sellerID);
        $notifications = $seller->notifications()->where('is_read', 0)->get();



        return response()->json($notifications);
    }
    public function store(Request $request)
    {
        $notification = Notification::insert([
            'message' => $request->input('message'),
            'is_read' => $request->input('is_read'),
            'user_id' => $request->input('user_id'),
            'service_id' => $request->input('service_id'),
        ]);
        if($notification->save())

        return response()->json($notification, 201);
    }

    public function markAsRead($id)
    {
        $notification = Auth::user()->notifications()->findOrFail($id);
        $notification->is_read = 1;
        $notification->save();

        return response()->json(['message' => 'تم وضع الإشعار كمقروء']);
    }
}
