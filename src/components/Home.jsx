import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
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
    </>
  );
}
