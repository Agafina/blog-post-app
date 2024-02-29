import { useState } from "react";
import { useHistory } from "react-router";

const Create:React.FC = () => {
    const [title ,setTitle] = useState<string>('')
    const [snippet, setSnippet] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const history = useHistory();

    const handleAddBlog = (e:React.FormEvent) => {
        e.preventDefault()
        const blog = {title, snippet, body, author} 

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body:JSON.stringify(blog)
        })
        .then(() => {
            console.log('new BLog added')
          history.push('/')
        })
    }
    return ( 
        <div className="form__box">
            <form onSubmit={handleAddBlog}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="title">snippet</label>
                <input 
                type="text" 
                name="title"
                required
                value={snippet}
                onChange={(e) => setSnippet(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="title">Body</label>
                <textarea  
                name="title"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="title">Author</label>
                <input 
                type="text" 
                name="title"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <button className="btn">Add Post</button>
        </form>
        </div>
     );
}
 
export default Create;