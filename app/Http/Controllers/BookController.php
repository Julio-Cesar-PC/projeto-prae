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
        sleep(2);
        $livros = Book::paginate(10);
        $livros->load('category');
        return Inertia::render('Books/Index', [
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
        return Inertia::render('Books/Create', [
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
