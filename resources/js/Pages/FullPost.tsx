import Post from "@/Interfaces/PostInterface";
import { PageProps } from "@/types";
import { useState } from "react";

const FullPost = ({ postData }: PageProps<{ postData: Post }>) => {
    const [newComment, setNewComment] = useState({ body: "", postId: "" });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setNewComment((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="full-post">
            <h1>{postData.title}</h1>
            <div className="full-post-byline">
                <div>
                    <b>{postData.author_name}</b>{" "}
                    <span className="full-post-author-span">Contributor</span>{" "}
                </div>
                <div className="full-post-author-span">
                    {new Date(postData.created_at).toLocaleDateString("en-us", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </div>
            </div>
            <p className="full-post-text">{postData.body}</p>
            <h3>Comments</h3>
            <div className="full-post-comments">
                {postComments.length !== 0 ? (
                    postComments.map((comment) => (
                        <Comment key={comment._id} comment={comment} />
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
                        name="text"
                        id="text"
                    ></textarea>
                    <input type="hidden" name="postId" value={id} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FullPost;
