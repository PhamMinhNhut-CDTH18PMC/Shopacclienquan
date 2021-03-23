<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/user', 'Usercontroller@getUser');

Route::post('/createUser', 'Usercontroller@createUser');

Route::put('/updateUser/{id}', 'usercontroller@updateUser');

Route::get('/cash', 'CashController@show_card');

Route::post('/paid_card', 'CashController@paid_card');

Route::get('/product','ProductController@Show_Acc');

Route::get('/product/{id}', 'ProductController@Show_Acc_ByID');

Route::post('/orderproduct', 'TransactionHistoryController@Order_product');

Route::get('/account','AccountController@Show_Account');
