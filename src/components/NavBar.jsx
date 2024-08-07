import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function NavBar() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat-room">Chat Room</Link>
          </li>
          <li>
            <Link to="/">User Profile</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavBar;
