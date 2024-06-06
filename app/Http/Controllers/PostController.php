<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = Post::all();
        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->author_name = $request->author_name;
        $post->published = $request->published;
        $post->save();
        return Redirect::route("home");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post = Post::find($id);
        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $post = Post::find($id);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->author_name = $request->author_name;
        $post->published = $request->published;
        $post->save();

        return Redirect::route("post.id", [$request->postId]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $post = Post::find($id);
        $post->delete();

        return Redirect::route("home");
    }
}
