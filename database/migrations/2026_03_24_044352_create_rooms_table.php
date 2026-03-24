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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_code', 10)->unique();
            $table->foreignId('host_id')->constrained('users')->onDelete('cascade');
            $table->enum('status', ['waiting', 'playing', 'finished'])->default('waiting');
            $table->integer('max_players')->default(10);
            $table->string('category_playing')->default('fun');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
