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
        Schema::create('projects', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
        // $table->integer('user_id')->unsigned(); // Foreign key referencing 'users' table
        $table->string('project_title');
        $table->date('project_deadline')->nullable();
        $table->text('project_description')->nullable();
        $table->decimal('project_budget', 10, 2)->nullable(); // Assuming budget is in decimal format
        $table->enum('project_status', ['pending', 'in_progress', 'completed', 'canceled'])->default('pending'); // Project status
        $table->timestamps(); // Created_at and updated_at timestamps
        // $table->foreignId('user_id');
        $table->foreignId('user_id')->constrained('users');

        // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // Define foreign key constraint
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
