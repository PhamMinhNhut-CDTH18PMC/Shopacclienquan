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
}
