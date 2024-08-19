import { useContext, useState } from "react";
import "./ChatRoom.css";
import NavBar from "./NavBar";
import { UserContext } from "./UserContext";

export default function ChatRoom() {
  const { getMode } = useContext(UserContext);

  const [search, setSearch] = useState("");
  const [roomName, setRoomName] = useState("");
  const [category, setCategory] = useState("");
  const [rooms, setRooms] = useState([]);

  const createRoom = (e) => {
    e.preventDefault();
    console.log(roomName && category);
    if (roomName && category) {
      setRooms([...rooms, { name: roomName, category: category }]);
      setRoomName("");
      setCategory("");
    }
  };

  return (
    <>
      <div className={getMode()}>
        <NavBar></NavBar>
        <div className="chatroom-container">
          <h1>Chat Room Page</h1>
          <div className="search-chatroom">
            <input
              type="text"
              placeholder="Search Room"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button>Search</button>
          </div>

          <div className="rooms-list">
            {rooms.map((room, index) => (
              <div key={index} className="room">
                <h3>{room.name}</h3>
                <p>Category: {room.category}</p>
                <button>Join</button>
              </div>
            ))}
          </div>

          <div className="create-room">
            <legend>Create Room </legend>
            <form onSubmit={createRoom}>
              <label>Room Name</label>
              <input
                type="text"
                placeholder="Enter Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <label>Category</label>
              <input
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
