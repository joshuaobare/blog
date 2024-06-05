import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import { PageProps } from "@/types";
import "../../css/createpost.css";
import Post from "@/Interfaces/PostInterface";

const EditPost = ({
    auth,
    postData,
}: PageProps<{ auth: any; postData: Post }>) => {
    const [formData, setFormData] = useState({
        title: postData.title,
        body: postData.body,
        published: postData.published,
        author_name: postData.author_name,
    });
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post("/post/new", formData, {
            onSuccess: () =>
                setFormData({
                    title: "",
                    body: "",
                    published: false,
                    author_name: auth.user.name,
                }),
        });
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

    useEffect(() => {}, []);
    return (
        <div className="create-post-cont">
            <NavBar auth={auth} />
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
                            name="body"
                            id="text"
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <fieldset>
                            <legend>published</legend>
                            <div className="published-radios-cont">
                                <div className="published-radio">
                                    <label htmlFor="published">Yes</label>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value="true"
                                        name="published"
                                        id="published"
                                    />
                                </div>
                                <div className="published-radio">
                                    <label htmlFor="unpublished">No</label>
                                    <input
                                        type="radio"
                                        value="false"
                                        name="published"
                                        id="unpublished"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
