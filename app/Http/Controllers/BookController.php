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
        return Inertia::render('CadastroLivros');
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'pageCount' => '',
            'imageLink' => '',
            'selfLink' => '',
            'category_id' => '',
            'available' => '',
        ]);

        // dd($request);

        Book::create($request->all());

        return redirect()->route('livros');
    }


}
