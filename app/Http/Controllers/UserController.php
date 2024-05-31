<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(array("users" => $users));
    }
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json(array("user" => $user));
    }
    public function show(string $id)
    {
        $user = User::find($id);
        return response()->json(array("user" => $user));
    }
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return response()->json(array("user" => $user));

    }
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json(array("user" => $user));
    }

    public function edit(Request $request, string $id)
    {
        $user = User::find($id);
        return response()->json(array("user" => $user));
    }

}