import Card from "react-bootstrap/Card";
import Post from "@/Interfaces/PostInterface";
import { PageProps } from "@/types";

const PostCard = ({ post }: PageProps<{ post: Post }>) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <div className="homepage-post-title">
                        <Card.Title>{post.title}</Card.Title>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">
                        <div>{post.author_name}</div>
                        <div>
                            {new Date(post.created_at).toLocaleDateString(
                                "en-us",
                                {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </div>
                    </Card.Subtitle>
                    <div className="homepage-post-text">
                        <Card.Text>{post.body}</Card.Text>
                    </div>

                    <Link to={`/posts/post/${post.id}`}>
                        <Card.Link href="#">Read Post</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostCard;
