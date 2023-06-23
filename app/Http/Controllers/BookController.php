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

    public function cadastroLivros()
    {
        $categories = \App\Models\Category::all();
        return Inertia::render('CadastroLivros', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        dd($request->all());

        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'pageCount' => '',
            'imageLink' => '',
            'selfLink' => '',
            'category_id' => 'required',
            'available' => '',
        ]);

        Book::create($request->all());

        return redirect()->route('livros');
    }


}
