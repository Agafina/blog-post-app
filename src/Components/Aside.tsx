import { Blogs } from "./blog";

interface Props{
    subscribe:string[];
    blog:Blogs[];
    handleDisplayBlogs:(author:string) => void;
}

const Aside:React.FC<Props> = ({subscribe, handleDisplayBlogs}) => {
    return ( 
        <div className="Aside__bar">
            <h2>Subscriptions</h2>
            <div className="subscribedCard">
                <ul>
                    {
                        subscribe.map(author => (
                            <li key={author} onClick={() => handleDisplayBlogs(author)}> { author }</li>

                        ))
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default Aside;