<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TransactionHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('TransactionHistory', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('accounts_id');
            $table->unsignedBigInteger('products_id');
            $table->unique(['accounts_id','products_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('TransactionHistory');

    }
}
