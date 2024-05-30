<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Comment extends Model
{
    use HasFactory;
    protected $table = "comments";
    protected $fillable = [
        "title",
        "postId",
    ];
    public function user()
    {
        return $this->belongsTo(Post::class);
    }
}
