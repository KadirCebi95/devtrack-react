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
      city:"İstanbul",
    },
    {
      id: 2,
      name: "Ahmet",
      role: "Backend Developer",
      buttonText: "Message",
      city:"İzmir",
    },
    {
      id: 3,
      name: "Ayşe",
      role: "UI/UX Designer",
      buttonText: "Contact",
      city:"Kars"
    },
  ];

  const normalizedSearch = search.toLowerCase().trim();
  const filteredUsers = users.filter((user) => {
  return (
    user.name.toLowerCase().includes(normalizedSearch) ||
    user.role.toLowerCase().includes(normalizedSearch) || 
    user.city.toLowerCase().includes(normalizedSearch)
  );
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
          filteredUsers.map((user) => <ProfileCard key={user.id} user={user}  />)
        ) : (
          <p>No developers found.</p>
        )}
      </div>
    </>
  );
}

export default App;
