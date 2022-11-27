import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  
    return (
        <div className="NavBar"> 
            <div className="navigation button"> 
            <button>
            <Link to="/"  >Lobby </Link>
            </button>
            
            
            </div>  
        </div>
    );
}

export default NavBar;