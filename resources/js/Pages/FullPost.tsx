import Post from "@/Interfaces/PostInterface";
import Comments from "@/Interfaces/CommentInterface";
import NavBar from "@/Components/NavBar";
import { router } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import Comment from "@/Components/Comment";
import "../../css/fullpost.css";
import { Link } from "@inertiajs/react";

const FullPost = ({
    auth,
    postData,
    postComments,
}: PageProps<{ postData: Post; postComments: Comments[] }>) => {
    const [newComment, setNewComment] = useState({
        body: "",
        postId: postData.id,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        e.preventDefault();
        setNewComment((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post("/comment", newComment, {
            onSuccess: () =>
                setNewComment({
                    body: "",
                    postId: postData.id,
                }),
        });
    };
    console.log(auth);
    return (
        <>
            <NavBar auth={auth} />
            <div className="full-post-cont">
                <div className="full-post">
                    <h1 className="full-post-header">{postData.title}</h1>
                    <div className="full-post-byline">
                        <div>
                            <b>{postData.author_name}</b>{" "}
                            <span className="full-post-author-span">
                                Contributor
                            </span>{" "}
                        </div>
                        <div className="full-post-author-span">
                            {new Date(postData.created_at).toLocaleDateString(
                                "en-us",
                                {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </div>
                    </div>
                    {auth.user && auth.user.name === postData.author_name ? (
                        <div className="edit-delete-btns-cont-cont">
                            <div className="edit-delete-btns-cont">
                                <Link
                                    href={route("post.edit.get", [postData.id])}
                                    className="btn btn-primary"
                                >
                                    Edit Post
                                </Link>
                                <Link href="" className="btn btn-danger">
                                    Delete Post
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <p className="full-post-text">{postData.body}</p>
                    <h3>Comments</h3>
                    <div className="full-post-comments">
                        {postComments.length !== 0 ? (
                            postComments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    auth={{
                                        user: auth.user,
                                    }}
                                />
                            ))
                        ) : (
                            <div>No Comments</div>
                        )}
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="full-post-form"
                        method="post"
                    >
                        <div className="form-group">
                            <label htmlFor="text">
                                <b>Add Comment</b>
                            </label>
                            <textarea
                                onChange={handleChange}
                                value={newComment.body}
                                className="form-control text"
                                name="body"
                                id="text"
                            ></textarea>
                            <input
                                type="hidden"
                                name="postId"
                                value={postData.id}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FullPost;
