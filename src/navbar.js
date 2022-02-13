import {Link } from 'react-router-dom'
const Navbar = () =>{
     return(
         <nav className="navbar">
            <h1>EKMMS car-dealership</h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "8px"
                }}>home</Link>
                <Link to="/updateprofile" style={{
                    color: "black",
                    backgroundColor: "yellow",
                    borderRadius: "8px"
                }}>update profile</Link>
                <Link to="/about" style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "8px"
                }}>about</Link>
            </div>
         </nav>
      );
 }
 export default Navbar;
 