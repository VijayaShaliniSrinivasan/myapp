import React from "react";
import {Link} from 'react-router-dom';
import './Home.css'


function Navbar() {

    return(
        <>

       <nav className="navbar">
        <h1 className="logo">Bloomers</h1>
        <ul className="nav-links">
            <Link to="/" className="H"><li>Home</li></Link>
            <Link to='/about'  className="A"><li>About</li></Link>
            <Link to='/service'  className="S"><li>Services</li></Link>
            <Link to='/contact'  className="C"><li>Contact</li></Link>
            <Link to='/signup'  className="Si"><li>SignUp</li></Link>
            <Link to='/login'  className="Lo"><li>Login</li></Link>
        </ul>
       </nav>

        
        </>
    )
    
}
export default Navbar