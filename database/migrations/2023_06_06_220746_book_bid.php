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
        Schema::create('book_bid', function (Blueprint $table) {
            $table->tinyInteger();
            $table->string('title');
            $table->string('state');
            $table->string('image');
            $table->integer('book_id');
            $table->integer('book_bid_status_id');
            $table->timestamps();

            $table->foreign('book_id')->references('id')->on('books');
            $table->foreign('book_bid_status_id')->references('id')->on('book_bid_status');
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
