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

        return redirect()->route('livros.index');
    }

    public function edit($id)
    {
        // dd($id);
        return Inertia::render('Books/Edit', [
            'livro' => Book::find($id),
            'categories' => Category::all(),
        ]);
    }

    public function update(Request $request, $id)
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

    public function findAvailableBooks(){
        $livros = Book::where('available', 1)->get();

        return Inertia::render('BooksPage', [
            'livros' => $livros,
        ]);
    }

}
