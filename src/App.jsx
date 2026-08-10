import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const users = [
    {
      id: 1,
      name: "Kadir",
      role: "Frontend Software Engineer",
      buttonText: "Follow",
      city: "İstanbul",
    },
    {
      id: 2,
      name: "Ahmet",
      role: "Backend Developer",
      buttonText: "Message",
      city: "İzmir",
    },
    {
      id: 3,
      name: "Ayşe",
      role: "UI/UX Designer",
      buttonText: "Contact",
      city: "Kars",
    },
  ];

  const normalizedSearch = search.toLowerCase().trim();
  const filteredUsers = users.filter((user) => {
    const searchMatches =
      user.name.toLowerCase().includes(normalizedSearch) ||
      user.role.toLowerCase().includes(normalizedSearch) ||
      user.city?.toLowerCase().includes(normalizedSearch);

    const roleMatches =
      selectedRole === "All" || user.role.includes(selectedRole);

    return searchMatches && roleMatches;
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
      <div className="role-filters">
        <button
          className={selectedRole === "All" ? "active" : ""}
          onClick={() => setSelectedRole("All")}
        >
          All
        </button>

        <button
          className={selectedRole === "Frontend" ? "active" : ""}
          onClick={() => setSelectedRole("Frontend")}
        >
          Frontend
        </button>

        <button
          className={selectedRole === "Backend" ? "active" : ""}
          onClick={() => setSelectedRole("Backend")}
        >
          Backend
        </button>

        <button
          className={selectedRole === "UI/UX" ? "active" : ""}
          onClick={() => setSelectedRole("UI/UX")}
        >
          UI/UX
        </button>
        <p>{selectedRole}</p>
      </div>

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
