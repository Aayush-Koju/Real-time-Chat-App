import { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Settings.css";
import { UserContext } from "./UserContext";

export default function Settings() {
  const { userData, setUserData, listen, setListen, getMode } =
    useContext(UserContext);

  const [settingsName, setSettingsName] = useState("");
  const [settingsAge, setSettingsAge] = useState("");
  const [settingsAddress, setSettingsAddress] = useState("");

  useEffect(() => {
    if (userData.length !== 0) {
      setSettingsName(userData[0].name);
      setSettingsAge(userData[0].age);
      setSettingsAddress(userData[0].address);
    }
  }, [userData]);

  const updateDetails = (e) => {
    e.preventDefault();
    if (userData.length !== 0)
      setUserData({ settingsName, settingsAge, settingsAddress });
  };

  console.log(listen);
  return (
    <>
      <div className={getMode()}>
        <NavBar></NavBar>
        <h1>Settings</h1>
        <div className="profile-settings">
          <h2>Profile Settings</h2>
          <p>Update your credentials</p>
          <form onSubmit={updateDetails} className="update">
            <label>Name</label>
            <input
              type="text"
              value={settingsName}
              onChange={(e) => setSettingsName(e.target.value)}
            />

            <label>Age</label>
            <input
              type="number"
              value={settingsAge}
              onChange={(e) => setSettingsAge(e.target.value)}
            />

            <label>Address</label>
            <input
              type="text"
              value={settingsAddress}
              onChange={(e) => setSettingsAddress(e.target.value)}
            />

            <button type="submit">Save</button>
          </form>
        </div>

        <div className="appearance-settings">
          <h2>Appearance Settings</h2>
          <div className="toggle">
            <p className="gap">Light</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={listen}
                onChange={(e) => setListen(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
            <p className="gap">Dark</p>
          </div>
        </div>
      </div>
    </>
  );
}
