import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chatroom">Chat Room</Link>
        </li>
        <li>
          <Link to="/userprofile">User Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
