<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BookRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->sentence(),
            "state" => fake()->word(),
            "image" => fake()->imageUrl(),
            "status" => fake()->randomElement(["PENDENTE", "ACEITA", "RECUSADA"]),
            "book_id" => fake()->numberBetween(1, 50),
            "user_id" => fake()->numberBetween(2, 11),
            "created_at" => fake()->dateTime(),
            "updated_at" => fake()->dateTime(),
        ];
    }
}
