import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "./Home.css";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Home() {
  const { getMode } = useContext(UserContext);

  return (
    <>
      <div className={getMode()}>
        <NavBar></NavBar>
        <h1>Welcome to the Real-time Chat Application</h1>
        <p>Your one step destination for real-time chatting</p>

        <div className="overview">
          <h2>Features</h2>
          <ul>
            <li>Create and join chat rooms</li>
            <li>Send and receive messages</li>
            <li>Manage your user profile</li>
            <li>Customize your settings</li>
          </ul>
        </div>

        <div>
          <p>Since You have joined for the first time. Please register.</p>

          <Link to="/userprofile">Register</Link>
        </div>
      </div>
    </>
  );
}
