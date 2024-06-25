<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\withdrawals;
use Illuminate\Http\Request;

class WithdrawalsController extends Controller
{
    //
    public function index(User $user)
    {
        // عرض جميع طلبات سحب الأرباح للمستخدم المحدد
        $withdrawals = $user->withdrawals;
        return view('withdrawals.index', ['withdrawals' => $withdrawals]);
    }

    // public function create(User $user)
    // {
    //     // عرض نموذج لإنشاء طلب سحب جديد
    //     return view('withdrawals.create', ['user' => $user]);
    // }
     public function show($id)
    {
        $withdrawal = withdrawals::find($id);
        if (!$withdrawal) {
            return response()->json(['error' => 'Withdrawal not found'], 404);
        }
        return response()->json($withdrawal);
    }

    public function store(Request $request)
    {
        // Validate the form data
        $data = $request->validate([
            'amount' => 'required|numeric',
            'selectedMethod' => 'required',
        ]);

        $user = auth()->user();

        // Calculate the platform commission (optional)
        $commission = 0; // Example: 10%
        if ($user->type === 'freelancer') {
            $commission = $data['amount'] * 0.1;
        }

        // Prepare the withdrawal data
        $withdrawalData = [
            'withdrawal_date' => now(),
            'withdrawal_method' => $data['selectedMethod'],
            'commission' => $commission,
            'user_id' => $user->id,
        ];

        // Create the withdrawal record
        $withdrawal = $user->withdrawals()->create(array_merge($data, $withdrawalData));

        // Process the withdrawal request (send email, update status, etc.)
        // ...

        return response()->json($withdrawal);
    }
    public function destroy($id)
{
    $withdrawal = withdrawals::find($id);
    if (!$withdrawal) {
        return response()->json(['error' => 'Withdrawal not found'], 404);
    }

    $withdrawal->delete();

    return response()->json(['message' => 'Withdrawal deleted']);
}

}
