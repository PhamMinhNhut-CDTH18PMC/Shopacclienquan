<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    //
    public $timestamps = false;
    protected $table= 'user';
    public function accounts() // 1 user co nhieu tai khoan
    {
        return $this->hasMany(Accounts::class);
    }
}
