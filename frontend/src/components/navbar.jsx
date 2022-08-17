
import {Link}from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="link">
            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
        </div>
    );
}
 
export default Navbar;