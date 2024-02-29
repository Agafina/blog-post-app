import './style.css'
import { Link } from 'react-router-dom';
const Header:React.FC = () => {
    return ( 
        <div className ="Blog__header">
            <h2>Blog Post</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
     );
}
 
export default Header;