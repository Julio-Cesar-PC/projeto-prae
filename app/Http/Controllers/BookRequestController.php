<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookRequest;
use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;


class BookRequestController extends Controller
{
    public function index()
    {
        // Paginate and order by created_at
        $bookRequests = BookRequest::orderBy('created_at', 'desc')->paginate(10);
        $bookRequests->load('book');
        $bookRequests->load('user');

        return Inertia::render('RequestsBooks/Index', [
            'bookRequests' => $bookRequests,
        ]);
    }

    public function create($id)
    {
        $livro = Book::find($id);
        return Inertia::render('RequestsBooks/Create', [
            'livro' => $livro,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->request->all());
        $bookRequest = new BookRequest();
        $bookRequest->title = $request->title;
        $bookRequest->state = $request->state;
        $bookRequest->status = "Pendente";
        $bookRequest->image = $request->image;
        $bookRequest->user_id = $request->user_id;
        $bookRequest->book_id = $request->book_id;
        $bookRequest->save();

        return redirect()->route('livros.disponiveis');
    }
}
