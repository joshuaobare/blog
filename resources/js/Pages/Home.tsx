import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import "../../css/welcome.css";

interface Post {
    id: number;
    title: string;
    body: string;
    author_name: string;
    created_at: string;
    published: boolean;
    updated_at: string;
}

export default function Home({
    auth,
    posts,
}: PageProps<{ laravelVersion: string; phpVersion: string; posts: Post[] }>) {
    return (
        <>
            <NavBar auth={auth} />
            <main className="welcome-main">
                <h1>All Posts</h1>
                <div className="posts-grid"></div>
            </main>
        </>
    );
}
