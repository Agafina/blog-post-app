import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Blogs } from "./blog";

interface Props {
    handleLikes: (id:number) => void;
    handleSubscribe: (author:string) => void;
    subscribe: string[];
}

const BlogDetails: React.FC = ( ) => {
    const { id } = useParams<{ id: string }>(); // Extract the 'id' parameter from the URL
    const [blog, setBlog] = useState<Blogs | null>(null); // State to hold the details of the blog

    useEffect(() => {
        // Fetch the details of the blog with the specified 'id' from your data source
        fetch(`http://localhost:8000/blogs/${id}`)
            .then(res => res.json())
            .then((data: Blogs) => {
                setBlog(data);
            });
    }, [id]); // Trigger the effect whenever the 'id' parameter changes

    if (!blog) {
        return <div>Loading...</div>; // Render a loading indicator while fetching the blog details
    }

    return (
        <div className="Blog__details">
            <h2>Blog Details</h2>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>Author: {blog.author}</p>
            <p>Likes: {blog.likes}</p>
            {/* <button onClick={() => handleLikes(blog.id)}>Like</button>
            <button onClick={() => handleSubscribe(blog.author)}>
                {subscribe.includes(blog.author) ? " Unsubscribe" : "Subscribe"}
            </button> */}
        </div>
    );
};

export default BlogDetails;
