<?php

use Pusher\PusherSecurity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Controllers\BalancesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ChatOrderController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\WithdrawalsController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\TransactionsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('emailverify', [AuthController::class, 'emailverify']);
// Route::post('resend-verification-email', [AuthController::class, 'resendVerifyEmail']);
Route::post('forgotpassword', [AuthController::class, 'forgotpassword']);


Route::post('verify-email',[AuthController::class, 'verifyEmail']);

Route::post('/password/reset', [AuthController::class, 'reset'])
    ->middleware('guest');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/changepassword', [AuthController::class, 'changepassword']);

    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/add-service' ,[ServicesController::class,'store']);
    Route::get('/notification/{sellerID}', [NotificationController::class, 'show']);
    Route::post('/notification/{id}/mark-as-read', [NotificationController::class, 'markAsRead']);
    Route::post('/create/notifications', [NotificationController::class, 'store']);
    Route::post('portfolio', [PortfolioController::class, 'store'])->name('portfolio.store');
    // Route::post('/chat', [ChatController::class, 'index']);
    // Route::post('/messages', [ChatController::class, 'store']);
    // Route::get('/getConversationForService' ,[ChatController::class,'getConversationForService']);

    // Route::post('/messages', [ChatController::class, 'sendMessage']);
    // Route::get('/messages', [ChatController::class, 'getMessages']);
    Route::get('/getIDFreelancerService/{id}' ,[ChatController::class,'getIDFreelancerService']);


    Route::get('/conversations', [ConversationController::class, 'index']);
Route::get('/conversations/{conversation}', [ConversationController::class, 'show']);
Route::post('/conversations/{conversation}/messages', [ConversationController::class, 'store']);
// Route::post('/conversations/{conversation}/messages', [ConversationController::class, 'storeMessage']);

//////////////////OrdersController/////////////////
Route::get('/orders', [OrderController::class, 'index']);
Route::get('/order/{id}', [OrderController::class, 'showOrderService']);
Route::post('/orders/{orderId}', [OrderController::class, 'update']);
Route::post('/create/order', [OrderController::class, 'store']);
Route::get('/orders/getServiceAsCompleted', [OrderController::class, 'getServiceTypeSales']);
Route::post('/sendOrder', [OrderController::class, 'getEventForApproveOrReject']);
////////////////////////ChatOrder///////////////////////////////////////////////////

Route::post('/store-message-contract', [ChatOrderController::class, 'store']);
Route::get('/get-message-contract', [ChatOrderController::class, 'getMessageContract']);


Route::post('/pusher/auth', [OrderController::class, 'auth'])->name('pusher.auth');

/////////////////Balance/////////////////

Route::get('/balance', [BalancesController::class, 'getUserBalance']);
Route::post('/balance', [BalancesController::class, 'updateBalance']);

Route::post('/transactions', [TransactionsController::class, 'store']);


//////////////////////////////////////////////

Route::post('/withdrawals', [WithdrawalsController::class, 'store']);

//////////////////////////////////////////////////


    // Route::post('/broadcasting/auth', function (Request $request) {
    //     return Broadcast::check($request);
    // });
    // Broadcast::routes()
    // Broadcast::routes();
    // Route::post('/broadcasting/auth', function () {
    //     return Broadcast::auth(request());
    // });
    // Route::post('/pusher/auth' ,[ChatController::class,'authenticate']);

});
Broadcast::routes(['middleware' => ['auth:sanctum']]);

// Broadcast::routes();
// Broadcast::routes(['prefix'=>'api','middleware'=>['auth:api']]);


Route::get('/users', [AuthController::class, 'index']);
Route::get('/users/{id}', [AuthController::class, 'show']);
Route::post('/users/{id}', [AuthController::class, 'update']);

////////////////////Notification////////////////////


/////////////////////////////Chat //////////////////////

// Route::get('/conversations', [ChatController::class, 'getUserConversations']);
// Route::group(['prefix' => 'chats'], function () {
//     Route::get('/', [ChatController::class, 'index']); // Get all chats for the current user
//     Route::get('/{chatId}', [ChatController::class, 'show']); // Get messages for a specific chat
//     Route::post('/{chatId}/messages', [ChatController::class, 'store']);
//     // ... additional routes as needed (e.g., update chat status, delete chats)
// });
//////////////////////////////////

Route::get('/show-user' ,[UserController::class,'index']);
//////////////////////////////////////////
Route::get('/services' ,[ServicesController::class,'index']);
Route::get('/services/pending' ,[ServicesController::class,'getServicesPending']);
Route::get('/service/{id}' ,[ServicesController::class,'show']);
Route::post('/edite/{id}/service' ,[ServicesController::class,'update']);
Route::post('/service/{id}/status' ,[ServicesController::class,'updateStateService']);

Route::get('/services/{name}/search', [ServicesController::class,'search']);
Route::get('/getUserServices/{user_id}' ,[ServicesController::class,'getUserServices']);


/////////////////////////
Route::get('/categories' ,[CategoryController::class,'index']);
// Route::post('/store-category' ,[CategoryController::class,'store']);
// Route::post('/category/delete`' ,[CategoryController::class,'delete']);
// Route::get('/services/{categories}', [ServicesController::class, 'index']);
Route::get('/services/{categories}', [CategoryController::class, 'index']);

// Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/store-category', [CategoryController::class, 'store']);
    Route::post('/categories/{id}',  [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy'] );
    
Route::get('/filter-services/', [ServicesController::class, 'filterServices']); // Filter services by category
Route::get('/filter-services/{categoryID}', [ServicesController::class, 'filterServicesCategory']);
Route::post('/delete/{id}/service', [ServicesController::class, 'destroy']);
// Route::post('/add-service' ,[ServicesController::class,'store']);

Route::apiResource('portfolio', PortfolioController::class)->except('store');
Route::post('portfolio/{id}', [PortfolioController::class, 'update']);


Route::get('portfolio/{id}/details', [PortfolioController::class, 'showDetails'])->name('portfolio.show-details');
// Route::get('/portfolio', [PortfolioController::class, 'index']);

// Route::get('/wheeb', [PortfolioController::class, 'index']);
// Route::get('/wheeb', [PortfolioController::class, 'index']);
// Route::get('/f/f', [PortfolioController::class, 'showDetails'])


