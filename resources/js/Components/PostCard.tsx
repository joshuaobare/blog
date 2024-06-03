import Card from "react-bootstrap/Card";
const PostCard = ({ post }) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <div className="homepage-post-title">
                        <Card.Title>{post.title}</Card.Title>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">
                        <div>{post.authorId}</div>
                        <div>
                            {new Date(post.timestamp).toLocaleDateString(
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
                        <Card.Text>{post.text}</Card.Text>
                    </div>

                    <Link to={`/posts/post/${post._id}`}>
                        <Card.Link href="#">Read Post</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostCard;
