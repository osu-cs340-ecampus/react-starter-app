import { Link } from "react-router-dom";
import { MdLocalConvenienceStore } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <MdLocalConvenienceStore size={80} />
        </Link>
      </div>
      <h1>My website name</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/people">BSG People</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
