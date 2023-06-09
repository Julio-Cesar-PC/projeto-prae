<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BookRequestController;
use App\Http\Controllers\UsersController;
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


Route::middleware('auth', 'ban')->group(function () {
    // books
    Route::get('/books', [BookController::class, 'findAvailableBooks'])->name('livros.disponiveis');
    Route::get('/books/book/{id}', [BookController::class, 'viewBook'])->name('livros.view');
    Route::get('/books/book/{id}/create', [BookRequestController::class, 'create'])->name('request.create');
    Route::post('/books/book/{id}/store', [BookRequestController::class, 'store'])->name('request.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/minhas-solicitacoes', [UsersController::class, 'myRequests'])->name('request.myRequests');
    // profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    Route::get('/requests', [BookRequestController::class, 'index'])->name('requests');
    Route::patch('/request/{id}/accept', [BookRequestController::class, 'acceptBookRequest'])->name('request.accept');
    Route::patch('/request/{id}/reject', [BookRequestController::class, 'denyBookRequest'])->name('request.reject');

    Route::get('/usuarios', [UsersController::class, 'index'])->name('usuarios.index');
    Route::get('/usuario/{user_id}', [UsersController::class, 'show'])->name('usuarios.show');
    Route::patch('/usuario/{user_id}/ban', [UsersController::class, 'ban'])->name('usuarios.ban');
    Route::delete('/usuario/{user_id}/destroy', [UsersController::class, 'destroy'])->name('usuarios.destroy');

    Route::get('/admins', function () {
        return "admins";
    })->name('admin.index');

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

require __DIR__.'/auth.php';
