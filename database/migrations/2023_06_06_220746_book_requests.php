<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_request', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('state');
            $table->string('image');
            $table->string('status');
            $table->integer('book_id');
            $table->integer('user_id');
            $table->timestamps();

            $table->foreign('book_id')->references('id')->on('books');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
