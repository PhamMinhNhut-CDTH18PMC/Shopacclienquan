<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddconstraintTransactionHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
       // $table->foreign('accounts_id')->references('id')->on('accounts');

       Schema::table('TransactionHistory', function (Blueprint $table) {

        $table->foreign('accounts_id')->references('id')->on('accounts');
        $table->foreign('products_id')->references('id')->on('products');
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
        Schema::table('TransactionHistory', function (Blueprint $table) {
            $table->dropForeign('TransactionHistory_accounts_id_foreign');
            $table->dropForeign('TransactionHistory_products_id_foreign');
        });
    }
}
