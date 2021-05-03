import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
       <nav className="navbar">

          <h1>Todos</h1> 

          <div className="links">
            <Link to="/">Home</Link>
           <Link to="/create">New task</Link>
          </div>

       </nav>
     );
}
 
export default Navbar;