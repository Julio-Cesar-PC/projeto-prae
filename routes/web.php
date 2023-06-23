<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/livros', [BookController::class, 'livros'])->name('livros');
    Route::get('/livro/cadastro', [BookController::class, 'cadastroLivros'])->name('livros.cadastro');
    Route::post('/livro/create', [BookController::class, 'store'])->name('livros.store');

    Route::get('/categorias', [CategoryController::class, 'index'])->name('categorias.index');
    Route::get('/categoria/cadastro', [CategoryController::class, 'create'])->name('categorias.cadastro');
    Route::post('/categoria/create', [CategoryController::class, 'store'])->name('categorias.store');
    Route::get('/categoria/{category}/edit', [CategoryController::class, 'edit'])->name('categorias.edit');
    Route::patch('/categoria/{category}/update', [CategoryController::class, 'update'])->name('categorias.update');
    Route::delete('/categoria/destroy/{category_id}', [CategoryController::class, 'destroy'])->name('categorias.destroy');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin');
    })->name('admin');
});

require __DIR__.'/auth.php';
