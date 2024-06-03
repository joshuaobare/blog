<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

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
        $post->author = $request->author;
        $post->published = $request->published;
        $post->save();
        return response()->json(["message" => "Post created"]);

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
        return response()->json(array("post" => $post));
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
        $post->author = $request->author;
        $post->published = $request->published;
        $post->save();

        return response()->json(["message" => "Post successfully updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $post = Post::find($id);
        $post->delete();

        return response()->json(["message" => "Post successfully deleted"]);
    }
}
