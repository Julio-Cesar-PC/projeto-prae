<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'admin' => true,
        ]);

        \App\Models\User::factory(10)->create();

        \App\Models\Book::factory()->count(50)->create();
        \App\Models\BookRequest::factory()->count(50)->create();
    }
}
