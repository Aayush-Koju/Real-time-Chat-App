import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import NavBar from "./NavBar";
import "./UserProfile.css";

export default function UserProfile() {
  const {
    name,
    setName,
    age,
    setAge,
    address,
    setAddress,
    userData,
    registerUser,
    getMode,
  } = useContext(UserContext);

  return (
    <>
      <div className={getMode()}>
        <NavBar></NavBar>
        <h1>User Profile Page</h1>
        <div className="name">
          {userData.map((data, index) => (
            <div key={index} className="datas">
              <div className="data">
                <p className="title">Name:</p>
                <p>{data.name}</p>
              </div>
              <div className="data">
                <p className="title">Age:</p>
                <p>{data.age}</p>
              </div>
              <div className="data">
                <p className="title">Address:</p>
                <p>{data.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="user-register">
          <form onSubmit={registerUser}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label>Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>

            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
