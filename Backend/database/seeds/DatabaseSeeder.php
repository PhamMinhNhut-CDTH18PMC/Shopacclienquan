<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(Account::class);
        $this->call(Cashs::class);
        $this->call(Product::class);
    }


}

class Account extends Seeder
{
    public function run()
    {
        DB::table('accounts')->insert([
            ['username'=>'MinhNhut', 'password'=>bcrypt('12345'), 'imageUser'=>'Phungu.jpg','money'=>20000,'products_id'=>null],

        ]);
    }
}
class Cashs extends Seeder
{

    public function run(){
       DB::table('cash')->insert([
            ['type_card'=>'Viettel','denominations'=>'200000','ID_card'=>'1234567890112','seri'=>'123233233454','accounts_id'=>1],
       ]);
    }
}

class Product extends Seeder
{
    public function run()
    {
        DB::table('products')->insert([
            ['imageProduct'=>'Acc_1.jpg','price'=>100000,'KM'=>'10%','Hero'=>100,'gold'=>100000,'skin'=>100,'gem'=>90,'rank'=>'Kim cương','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_2.jpg','price'=>200000,'KM'=>'10%','Hero'=>90,'gold'=>200000,'skin'=>100,'gem'=>90,'rank'=>'Bạch kim','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_3.jpg','price'=>300000,'KM'=>'10%','Hero'=>79,'gold'=>300000,'skin'=>100,'gem'=>90,'rank'=>'Cao thủ','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_4.jpg','price'=>400000,'KM'=>'10%','Hero'=>88,'gold'=>400000,'skin'=>100,'gem'=>90,'rank'=>'Kim cương','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_5.jpg','price'=>500000,'KM'=>'10%','Hero'=>102,'gold'=>500000,'skin'=>100,'gem'=>90,'rank'=>'Cao thủ','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_6.jpg','price'=>600000,'KM'=>'10%','Hero'=>99,'gold'=>600000,'skin'=>100,'gem'=>90,'rank'=>'Kim cương','username'=>'nhutpham1234','password'=>'12313'],
            ['imageProduct'=>'Acc_7.jpg','price'=>700000,'KM'=>'10%','Hero'=>66,'gold'=>700000,'skin'=>100,'gem'=>90,'rank'=>'Tinh anh','username'=>'nhutpham1234','password'=>'12313'],

        ]);
    }
}
