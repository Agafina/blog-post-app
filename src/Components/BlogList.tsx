import { Blogs } from "./blog";
import { Link } from "react-router-dom";

interface Props {
    blog?: Blogs[];
    title: string;
    handleLikes: (id:number) => void
    handleSubscribe: (author:string) => void
    subscribe:string[]
}

const BlogList: React.FC<Props> = ({ blog, title , handleLikes, handleSubscribe,subscribe}) => {
    return ( 
        <div className="blog__list">
            <h2>{title}</h2>
            {blog?.map((blog) => (
              
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h2>{blog.title}</h2>
                        <p>{blog.snippet}</p>
                        <br />
                        <p>Written by {blog.author}</p>
                    </Link>
                    <div>
                        <button onClick={() => handleLikes(blog.id)}>Like</button>
                        <p>Likes: {blog.likes || 0}</p>
                        <button onClick={() => handleSubscribe(blog.author)}>{subscribe.includes(blog.author)? " Unsubscribe": "Subscribe"}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
 
export default BlogList;
