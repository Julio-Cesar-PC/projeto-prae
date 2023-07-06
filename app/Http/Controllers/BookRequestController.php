<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookRequest;
use App\Models\Book;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
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
        $request->validate([
            'title' => 'required',
            'state' => 'required',
            'user_id' => 'required',
            'book_id' => 'required',
        ]);
        // dd($request->request->all());
        $bookRequest = new BookRequest();
        $bookRequest->title = $request->title;
        $bookRequest->state = $request->state;
        $bookRequest->status = "PENDENTE";
        $bookRequest->image = $request->image;
        $bookRequest->user_id = $request->user_id;
        $bookRequest->book_id = $request->book_id;
        $bookRequest->save();

        return redirect()->route('livros.disponiveis');
    }

    public function acceptBookRequest($id)
    {
        // dd(request());
        $bookRequest = BookRequest::find($id);
        $bookRequest->status = "ACEITA";
        $bookRequest->save();

        return Redirect::back();
    }

    public function denyBookRequest($id)
    {
        $bookRequest = BookRequest::find($id);
        $bookRequest->status = "RECUSADA";
        $bookRequest->save();

        return Redirect::back();
    }
}
