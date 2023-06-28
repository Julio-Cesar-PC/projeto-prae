<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Index', [
            'categorias' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'nome' => 'required|unique:categories,nome',
        ]);

        Category::create($request->all());

        return redirect()->route('categorias.index');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, Category $category)
    {
        // dd($request->all());

        $request->validate([
            'nome' => 'required',
        ]);

        $category->update($request->all());

        return redirect()->route('categories.index');
    }

    public function destroy($category_id)
    {
        $category = Category::find($category_id);
        // check if category has books
        if ($category->books->count() > 0) {
            return redirect()->route('categorias.index')->with('error', 'Não é possível excluir uma categoria que possui livros cadastrados.');
        } else {
            $category->delete();
            return redirect()->route('categorias.index');
        }

    }
}
