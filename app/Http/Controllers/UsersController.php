<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Book;
use App\Models\BookRequest;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index() {
        $users = User::where('admin', false)->orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    public function destroy($id) {
        $user = User::find($id);
        $user->delete();

        return redirect()->route('usuarios.index');
    }

    public function ban($id) {
        $user = User::find($id);
        $user->banned = $user->banned ? false : true;
        $user->save();

        return redirect()->route('usuarios.index');
    }

    public function unban($id) {
        $user = User::find($id);
        $user->banned = false;
        $user->save();

        return redirect()->route('usuarios.index');
    }

    public function show($id) {
        $user = User::find($id);
        $bookRequests = BookRequest::where('user_id', $id)->orderBy('created_at', 'desc')->paginate(10);
        $bookRequests->load('book');
        $bookRequests->load('user');

        return Inertia::render('Users/Show', [
            'user' => $user,
            'bookRequests' => $bookRequests,
        ]);
    }

    public function myRequests(Request $request) {
        $user = User::find($request->user()->id);
        $bookRequests = BookRequest::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(10);
        $bookRequests->load('book');
        $bookRequests->load('user');

        return Inertia::render('Users/MyRequests', [
            'user' => $user,
            'bookRequests' => $bookRequests,
        ]);
    }
}
