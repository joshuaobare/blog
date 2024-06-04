<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $comments = Comment::all();
        return response()->json(array("comments" => $comments));

    }

    public function allPostComments(string $id)
    {
        $comments = Comment::where("postId", $id)->get();
        return $comments;
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $comment = new Comment();
        $comment->title = $request->title;
        $comment->body = $request->body;
        $comment->user_id = auth()->user()->id;
        $comment->save();
        return response()->json(array("comment" => $comment, "message" => "Comment successfully created"));

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
        $comment = Comment::find($id);
        return response()->json(array("comment" => $comment));
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
        $comment = Comment::find($id);
        $comment->title = $request->title;
        $comment->body = $request->body;
        $comment->user_id = auth()->user()->id;
        $comment->save();
        return response()->json(array("comment" => $comment, "message" => "Comment successfully updated"));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $comment = Comment::find($id);
        $comment->delete();
        return response()->json(array("message" => "Comment successfully deleted"));
    }
}
