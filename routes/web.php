<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RequestsController;
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
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/partners', function () {
    return Inertia::render('Partners');
})->name('partners');



Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/requests', [RequestsController::class, 'requests'])->middleware(['auth', 'verified'])->name('requests');

Route::middleware('auth')->group(function () {
    Route::get('/books', [BookController::class, 'findAvailableBooks'])->name('livros.disponiveis');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/livros', [BookController::class, 'livros'])->name('livros.index');
    Route::get('/livro/cadastro', [BookController::class, 'cadastroLivros'])->name('livros.cadastro');
    Route::post('/livro/create', [BookController::class, 'store'])->name('livros.store');
    Route::get('/livro/getAllBooks', [BookController::class, 'getAllBooks'])->name('livros.getAllBooks');
    Route::get('/livro/{book_id}/edit', [BookController::class, 'edit'])->name('livros.edit');
    Route::patch('/livro/{book_id}/update', [BookController::class, 'update'])->name('livros.update');
    Route::delete('/livro/destroy/{book_id}', [BookController::class, 'destroy'])->name('livros.destroy');

    Route::get('/categorias', [CategoryController::class, 'index'])->name('categorias.index');
    Route::get('/categoria/cadastro', [CategoryController::class, 'create'])->name('categorias.cadastro');
    Route::post('/categoria/create', [CategoryController::class, 'store'])->name('categorias.store');
    Route::get('/categoria/{category_id}/edit', [CategoryController::class, 'edit'])->name('categorias.edit');
    Route::patch('/categoria/{category_id}/update', [CategoryController::class, 'update'])->name('categorias.update');
    Route::delete('/categoria/destroy/{category_id}', [CategoryController::class, 'destroy'])->name('categorias.destroy');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin');
    })->name('admin');
});

require __DIR__.'/auth.php';
