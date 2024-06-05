<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'posts' => (new PostController)->index(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/post/new', function () {
    return Inertia::render('CreatePost', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
})->name('post.new');

Route::get('/post/{id}', function ($id) {
    return Inertia::render('FullPost', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'postData' => (new PostController)->show($id),
        'postComments' => (new CommentController)->allPostComments($id),
    ]);
})->name('post.id');

Route::post('/comment', [CommentController::class, "create"])->name('comment.post');

require __DIR__ . '/auth.php';
