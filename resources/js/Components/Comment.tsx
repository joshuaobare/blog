import Comments from "@/Interfaces/CommentInterface";
import { PageProps } from "@/types";
import "../../css/comment.css";

const Comment = ({ comment }: PageProps<{ comment: Comments }>) => {
    return (
        <div className="Comment">
            <div className="commenter">Anon</div>
            <div className="comment-text">{comment.body}</div>
            <div className="comment-date">
                {new Date(comment.created_at).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </div>
        </div>
    );
};

export default Comment;
