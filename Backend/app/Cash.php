<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cash extends Model
{
    //
    public $timestamps = false;
    protected $table= 'cash';
    public function account()
    {
        return $this->hasOne(Accounts::class);
    }
}
