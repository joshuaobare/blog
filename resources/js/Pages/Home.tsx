import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import "../../css/welcome.css";
import Post from "@/Interfaces/PostInterface";
import PostCard from "@/Components/PostCard";

export default function Home({
    auth,
    posts,
}: PageProps<{ laravelVersion: string; phpVersion: string; posts: Post[] }>) {
    return (
        <>
            <NavBar auth={auth} />
            <main className="home-main">
                <h1>All Posts</h1>
                <div className="home-posts-grid">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            auth={{
                                user: auth.user,
                            }}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
