<?php

namespace App\Http\Controllers;

use Pusher\Pusher;
use App\Models\User;
use App\Models\Order;
use App\Events\EventService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\NewNotification;
use App\Notifications\OrderNotification;
use Illuminate\Support\Facades\Broadcast;
use App\Events\EventForApproveOrRejectOrder;
use Illuminate\Support\Facades\Notification;

class OrderController extends Controller
{
    //

    public function auth(Request $request)
    {
        $pusher = new Pusher(
            config('broadcasting.connections.pusher.key'),
            config('broadcasting.connections.pusher.secret'),
            config('broadcasting.connections.pusher.app_id'),
            [
                'cluster' => config('broadcasting.connections.pusher.options.cluster'),
                'encrypted' => true,
            ]
        );

        $channel_name = $request->input('channel_name');
        $socket_id = $request->input('socket_id');

        $presence_data = [
            'user_id' => Auth::id(),
            'user_info' => [
                'name' => Auth::user()->name,
                // Add any other user information you need to display
            ],
        ];

        $auth = $pusher->authorizeChannel($channel_name, $socket_id,Auth::id());

        return response($auth);
    }
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders);
    }
    public function showOrderService(Request $request ,string $id)
    {
        $orders = Order::where('service_id', $id)->first();
        return response()->json($orders);
        if (!$orders) {
            return response()->json(['error' => 'order not found'], 404);
        }
        return response()->json($orders, 200);
        // $orders = Order::where();
        // return response()->json($orders);
    }

    public function store(Request $request)
    {
        $order = Order::create([
            'buyer_id' => auth()->id(),
            'seller_id' => $request->seller_id, //البائع
            'service_id' => $request->service_id,
            'amount' => $request->amount,
            'status' => 'pending'
        ]);
        if($order)
        {
            $user=auth()->user();

  $message="ارسل لك ".Auth::user()->firstName."لتنفيذ الخدمة";
       event(new EventService($message ,$request->seller_id , $order));
    //    $user->notify(new EventService($message, Auth::user()->id));
    // Notification::send($user, new OrderNotification($message));
    // Notification::send($user, new OrderNotification($message));

//    Broadcast::private('private-events.4', new EventService($message))->send();;

        return response()->json($order, 201);
        }

    }
    public function getServiceTypeSales(Request $request)
    {
        $servicesID = $request->input('serviceID');

        $serviceSales = Order::select('service_id')
        // ->whereIn('service_id', $servicesID)
        ->where('status', ['completed'])
        ->groupBy('service_id')
        ->get();

        // $ab = is_array($serviceTypeSales) ? count($serviceTypeSales) : 0 ;
        if (count($serviceSales)>0) {
            return response()->json(count($serviceSales), 201);
        } else {
            return response()->json([], 201); // إرجاع مصفوفة فارغة إذا لم يتم العثور على أي نتائج
        }
    }

    public function update(Request $request, $id, Order $order)
    {
        // استلام المعلومات من الطلب
        $orderID = $request->input('orderID');
        $buyer_id = auth()->id();
        $seller_id = $request->input('seller_id');
        $service_id = $request->input('service_id');
        $status = $request->input('status');

        // التحقق من أن الطلب موجود وأن البائع أو المشتري هما من يحاولان التحديث
        $order = Order::where('id', $orderID)
            ->where(function ($query) use ($seller_id, $buyer_id) {
                $query->where('seller_id', $seller_id)
                      ->orWhere('buyer_id', $buyer_id);
            })
            ->firstOrFail();

        // تحديث حالة الطلب
        $order->status = $status;
        if($status==='in_progress')
        {
             $message=" ارسل لك ".Auth::user()->firstName."لبدء تنفيذ الخدمة";
        event(new EventService($message ,$request->seller_id , $order));
        $order->save();
        }
        elseif ($status==='completed'){
            $message=" ارسل لك ".Auth::user()->firstName."لتأكيد أستلام الخدمة ";
            event(new EventService($message ,$request->seller_id , $order));
            $order->save();

        }
        
        else {
            $message=" لقد قام ".Auth::user()->firstName."بالغاء تنفيذ الخدمة معك";
            event(new EventService($message ,$request->seller_id , $order));
            $order->save();
        }



        // إرجاع البيانات المحدثة كاستجابة JSON
        return response()->json($order);
    }
    public function getEventForApproveOrReject(Request $request){

        $user=$request->seller_id;
        $seller_id=User::find($user);
        $status=$request->status;

        if($status === "cancelled") {
            $causeMessage=$request->causeMessage;

            event(new EventForApproveOrRejectOrder(  $status ,$seller_id->id ,$causeMessage ));

        }


        event(new EventForApproveOrRejectOrder(  $status ,$seller_id->id ,$causeMessage='' ));
        return response()->json(($status));

    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json(null, 204);
    }
}
