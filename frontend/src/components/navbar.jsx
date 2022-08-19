import React from 'react';


import {Link}from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="link">
            <Link to='/'>Home</Link>
            <Link to='/create'>Create Notes</Link>
            <Link to='/notes'>Notes</Link>
        </div>
    );
}
 
export default Navbar;