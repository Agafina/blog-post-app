import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Blogs } from "./blog";
import BlogList from "./BlogList";
import Aside from "./Aside";
import BlogDetails from "./BlogDetails";

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const [subscribe, setSubscribe] = useState<string[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<Blogs[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then((data) => {
                setBlogs(data);
                setFilteredBlogs(data);
            });
    }, []);

    const handleLikes = (id: number) => {
        setFilteredBlogs(prevBlogs =>
            (prevBlogs || []).map(blog =>
                blog.id === id ? { ...blog, likes: (blog.likes || 0) + 1 } : blog
            )
        );
    };

    const handleSubscribe = (author: string) => {
        if (!subscribe.includes(author)) {
            setSubscribe(existingAuthors => [...existingAuthors, author]);
        } else {
            setSubscribe(existingAuthors => existingAuthors.filter(existingAuthor => existingAuthor !== author));
        }
    };

    const handleDisplayBlogs = (author: string) => {
        const filteredBlogs = blogs.filter(blog => blog.author.toLowerCase() === author.toLowerCase());
        setFilteredBlogs(filteredBlogs);
    };

    return (
        
            <div className="Home">
                <div className="aside__container">
                    <Aside subscribe={subscribe} blog={blogs} handleDisplayBlogs={handleDisplayBlogs} />
                </div>
                <div className="bloglist__container">
                    <BlogList blog={filteredBlogs} title="Blogs" handleLikes={handleLikes} handleSubscribe={handleSubscribe} subscribe={subscribe} />
                </div>
              
            </div>
        
    );
};

export default Home;
