<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
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

    public function getAllBooks()
    {
        $livros = Book::all();
        $livros->load('category');
        return $livros;
    }

    public function cadastroLivros()
    {
        $categories = Category::all();
        return Inertia::render('CadastroLivros', [
            'categories' => $categories,
        ]);
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
            'category_id' => 'required',
            'available' => '',
        ]);

        Book::create($request->all());

        return redirect()->route('livros');
    }


}
