import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [search, setSearch] = useState("");
  const users = [
    {
      id: 1,
      name: "Kadir",
      role: "Frontend Software Engineer",
      buttonText: "Follow",
    },
    {
      id: 2,
      name: "Ahmet",
      role: "Backend Developer",
      buttonText: "Message",
    },
    {
      id: 3,
      name: "Ayşe",
      role: "UI/UX Designer",
      buttonText: "Contact",
    },
  ];
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <Header />
      <input
        type="text"
        placeholder="Search Developer..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <div className="card-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <ProfileCard key={user.id} user={user} />)
        ) : (
          <p>No developers found.</p>
        )}
      </div>
    </>
  );
}

export default App;
