<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class RequestsController extends Controller
{

    public function requests()
    {
        // $livros = Book::paginate(10);
        // $livros->load('category');
        // return Inertia::render('Dashboard', [
        //     'livros' => $livros,
        // ]);
        return Inertia::render('RequestsBooks/Requests');
    }
}
