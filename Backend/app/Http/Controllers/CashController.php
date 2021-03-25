<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cash;
class CashController extends Controller
{
    //
    public function show_card()
    {
            $data = Cash::get();
            return response()->json($data,200);
    }

    public function messages()
    {
        return [
            'email.required' => 'Email is required!',
            'name.required' => 'Name is required!',
            'password.required' => 'Password is required!'
        ];
    }

    public function paid_card(Request $request)
    {
            $data = new Cash;
            $data->type_card=$request->type_card;
            $data->denominations=$request->denominations;
            $data->ID_card=$request->ID_card;
            $data->seri=$request->seri;
            $data->accounts_id=$request->accounts_id;
            $data->save();
            return response()->json($data, 200);
    }
}
