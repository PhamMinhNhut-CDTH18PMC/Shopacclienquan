<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TransactionHistory;
class TransactionHistoryController extends Controller
{
    //
    public function Order_product(Request $request)
    {
        $data = new TransactionHistory;
        $data->accounts_id=$request->accounts_id;
        $data->products_id=$request->products_id;
        $data->save();
        return response()->json($data, 200);
    }
}
