import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [userData, setUserData] = useState([]);
  const [listen, setListen] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    if (name && age && address) {
      setUserData([{ name, age, address }]);
      setName("");
      setAge("");
      setAddress("");
    } else alert("Please fill the data");
  };
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        address,
        setAddress,
        userData,
        registerUser,
        listen,
        setListen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
