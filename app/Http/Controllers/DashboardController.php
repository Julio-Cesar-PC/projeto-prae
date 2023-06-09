<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{

    public function dashboard()
    {
        $livros = Book::paginate(10);
        return Inertia::render('Dashboard', [
            'livros' => $livros,
        ]);
    }
}
