<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Products extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('imageProduct');// hinh  anh
            $table->string('price');// gia
            $table->string('KM');// khuyen mai
            $table->integer('Hero');// so luong tuong
            $table->integer('gold');// gold
            $table->integer('skin');// skin
            $table->integer('gem');// gem
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
        Schema::dropIfExists('products');
    }
}
