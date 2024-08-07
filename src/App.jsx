import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { UserProvider } from "./components/UserContext";
import ChatRoom from "./components/ChatRoom";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
