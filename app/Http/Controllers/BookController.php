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
        return Inertia::render('Books/Create');
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'pageCount' => '',
            'imageLink' => '',
            'selfLink' => '',
            'available' => '',
        ]);

        Book::create($request->all());

        return redirect()->route('livros.index');
    }

    public function edit($id)
    {
        // dd($id);
        return Inertia::render('Books/Edit', [
            'livro' => Book::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'pageCount' => '',
            'imageLink' => '',
            'selfLink' => '',
            'available' => '',
        ]);

        $livro = Book::find($id);
        $livro->update($request->all());

        return redirect()->route('livros.index');
    }

    public function destroy($id)
    {
        $livro = Book::find($id);
        $livro->delete();

        return redirect()->route('livros.index');
    }
}
