<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Cash extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('cash', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('seri');
            $table->string('ID_card');
            $table->decimal('money');
            $table->integer('denominations');// mệnh giá
            $table->unsignedBigInteger('accounts_id');// khóa ngoại
            $table->timestamps();
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
        Schema::dropIfExists('cash');
    }
}
