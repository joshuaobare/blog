import { useState } from "react";
import { router } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import { PageProps } from "@/types";

const CreatePost = ({ auth }: PageProps<{ auth: any }>) => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        published: false,
        authorName: "",
    });
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post("", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value, name, type } = e.target;

        setFormData((prevState) => {
            return {
                ...prevState,
                [name]:
                    type === "radio"
                        ? value === "true"
                            ? true
                            : false
                        : value,
            };
        });
    };

    return (
        <div className="create-post">
            <NavBar auth={auth} />
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
                        name="text"
                        id="text"
                        value={formData.body}
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
                            value="true"
                            name="published"
                            id="published"
                        />
                        <label htmlFor="unpublished">No</label>
                        <input
                            type="radio"
                            value="false"
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
