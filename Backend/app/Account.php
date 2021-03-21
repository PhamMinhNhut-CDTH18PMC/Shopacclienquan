<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    //
    public $timestamps = false;
    protected $table= 'accounts';

    public function cash()// 1 tai khoan co duy nhat 1 so tien nhat dinh
    {
        return $this->belongsTo(Cash::class);
    }
}
