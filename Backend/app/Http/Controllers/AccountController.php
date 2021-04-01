<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Account;
class AccountController extends Controller
{
    //
    public function Show_Account()
    {
        $data=Account::get();
        return response()->json($data, 200);
    }

    public function Login(Request $request)
    {

        // get request
        $username=$request->username;
        $pass=$request->password;
          //get account
        $data=Account::get();
        //handle
        foreach($data as $item)
        {
                if($username==$item->username && $pass== $item->password)
                {
                    $check = Account::where('username', '=', $item->username)->first();
                    return response()->json(['message' => 'true', 'User' => $check]);
                }
         }
         return response()->json(['message' => 'Đăng nhập không thành công']);

    }
}
