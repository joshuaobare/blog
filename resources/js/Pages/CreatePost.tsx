const CreatePost = () => {
    const handleSubmit = () => {};
    const handleChange = () => {};

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="text"
                        id="text"
                        value={formData.text}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <fieldset>
                        <legend>published</legend>
                        <label htmlFor="published">Yes</label>
                        <input
                            type="radio"
                            onChange={handleChange}
                            value={true}
                            name="published"
                            id="published"
                        />
                        <label htmlFor="unpublished">No</label>
                        <input
                            type="radio"
                            value={false}
                            name="published"
                            id="unpublished"
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
