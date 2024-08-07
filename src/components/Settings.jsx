import { useContext } from "react";
import NavBar from "./NavBar";
import "./Settings.css";
import { UserContext } from "./UserContext";

export default function Settings() {
  const { userData, setUserData } = useContext(UserContext);

  const handleChangeName = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleChangeAge = (e) => {
    setUserData({ ...userData, age: e.target.value });
  };

  const handleChangeAddress = (e) => {
    setUserData({ ...userData, address: e.target.value });
  };
  return (
    <>
      <NavBar></NavBar>
      <h1>Settings</h1>
      <div className="profile-settings">
        <h2>Profile Settings</h2>
        <p>Update your credentials</p>
        <form className="update">
          <label>Name</label>
          <input
            type="text"
            value={userData.name}
            onChange={handleChangeName}
          />

          <label>Age</label>
          <input
            type="number"
            value={userData.age}
            onChange={handleChangeAge}
          />

          <label>Address</label>
          <input
            type="text"
            value={userData.address}
            onChange={handleChangeAddress}
          />

          <button>Save</button>
        </form>
      </div>

      <div className="appearance-settings">
        <h2>Appearance Settings</h2>
        <div className="toggle">
          <p className="gap">Light</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className="gap">Dark</p>
        </div>
      </div>

      <div className="save">
        <button>Save</button>
      </div>
    </>
  );
}
