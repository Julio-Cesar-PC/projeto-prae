<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\Book;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    public function livros()
    {
        $livros = Book::all();
        $livros->load('category');
        return Inertia::render('Livros', [
            'livros' => $livros,
        ]);
    }


}
