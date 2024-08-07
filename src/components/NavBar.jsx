import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ChatRoom from "./ChatRoom";
import UserProfile from "./UserProfile";
import Settings from "./Settings";

function NavBar() {
  return (
    <>
      <Router>
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavBar;
