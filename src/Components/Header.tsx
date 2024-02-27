import './style.css'
const Header:React.FC = () => {
    return ( 
        <div className ="Blog__header">
            <h2>Blog Post</h2>
            <div className="links">
                <a href="/favourite">Favourite</a>
                <a href="/create">Create</a>
            </div>
        </div>
     );
}
 
export default Header;