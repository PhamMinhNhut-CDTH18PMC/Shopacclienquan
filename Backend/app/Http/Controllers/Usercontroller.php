<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Users;
use Validator;
class Usercontroller extends Controller
{
    //
    public  function getUser()
    {
        $data=Users::get();
        return response()->json(['user'=>$data],200);
    }

    public function createUser(Request $request)
    {
    //    if($request->name==null||$request->phone==null||$request->address==null)
    //    {
    //        return response()->json("khong bo trong cac truong !!!");
    //    }
        if($request->name==null)
        {
             return response()->json("không được bỏ trống name!!!");
        }
        else if($request->phone==null){
            return response()->json("Không được bỏ trống  phone!!!");
        }
        else if($request->address==null)
        {
            return response()->json("Không được bỏ trống address!!!");
        }
       else
       {
            $user = new Users;
            $user->name=$request->name;
            $user->phone=$request->phone;
            $user->address=$request->address;
            $user->save();
            return response()->json(['messeges'=>"Create user sucsessful",'user'=>$user]);
       }

    }


    public function updateUser(Request $request, $id)
    {
        //validate $request
        $validatedData = $request->validate([
            'name' => ['required', 'max:255'],
            'phone' => ['required', 'max:255'],
            'address' => ['required', 'max:255']
        ]);

        //process
        if (Users::where('id', $id)->exists()) {
            $user = Users::find($id);
            $user->name = $request->name;
            $user->phone =  $request->phone;
            $user->address = $request->address;
            $user->save();

            return response()->json([
                "message" => "records updated successfully"
            ], 200);
        }
        else {
        return response()->json([
            "message" => "User not found"
        ], 404);

        }
    }
}
