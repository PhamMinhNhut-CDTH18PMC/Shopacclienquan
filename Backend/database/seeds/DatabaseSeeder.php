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
    }


}

class Account extends Seeder
{
    public function run()
    {
        DB::table('accounts')->insert([
            ['username'=>'MinhNhut', 'password'=>bcrypt('12345'), 'imageUser'=>'Phungu.jpg','products_id'=>null],
            ['username'=>'Phungu', 'password'=>bcrypt('phuquangu'),'imageUser'=>'Phungu.jpg', 'products_id'=>null],
            ['username'=>'camnhung', 'password'=>bcrypt('camnhung'),'imageUser'=>'Phungu.jpg', 'products_id'=>null]


        ]);
    }
}
