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
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        \App\Models\Category::factory()->create([
            'nome' => 'NOVO',
        ]);

        \App\Models\Category::factory()->create([
            'nome' => 'USADO',
        ]);

        \App\Models\Category::factory()->create([
            'nome' => 'SEMI-NOVO',
        ]);

        \App\Models\Category::factory()->create([
            'nome' => 'DANIFICADO',
        ]);

        // \App\Models\Book::factory()->count(50)->create();
    }
}
