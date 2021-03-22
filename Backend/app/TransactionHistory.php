<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransactionHistory extends Model
{
    //
        protected $table= 'TransactionHistory';
        public $timestamps = false;
        public function Accounts()
        {
            return $this->hasOne(Accounts::class);
        }

        public function Products()
        {
            return $this->hasMany(Product::class);
        }

}
