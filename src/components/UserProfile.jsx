import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import NavBar from "./NavBar";

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
              <span>Name</span>
              <p>{data.name}</p>
              <span>Age</span>
              <p>{data.age}</p>
              <span>Address</span>
              <p>{data.address}</p>
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
