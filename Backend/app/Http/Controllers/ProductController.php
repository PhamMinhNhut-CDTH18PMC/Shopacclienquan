<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class ProductController extends Controller
{
    //
    public function Show_Acc()
    {
        $data=Product::get();
        return response()->json($data, 200);
    }

    public function Show_Acc_ByID($id)
    {
        $data=Product::find($id);//trả về 1 obj
        if (Product::where('id', $id)->exists())// kiểm tra sự tồn tại của id
        {
            return response()->json($data, 200);
        }
        else
        {
            return response()->json(["message"=>" not found!!"], 200);
        }
    }

}
