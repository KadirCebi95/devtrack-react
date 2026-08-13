import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const initialUsers = [
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

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");

  const normalizedSearch = search.toLowerCase().trim();
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users), [users]);
  });

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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!name || !role || !city) {
            return;
          }
          const newUser = {
            id: Date.now(),
            name: name,
            role: role,
            city: city,
            buttonText: "Follow",
          };
          setUsers([...users, newUser]);
          setName("");
          setRole("");
          setCity("");
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Role"
          onChange={(event) => setRole(event.target.value)}
          value={role}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />

        <button type="submit">Add developer</button>
      </form>

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
          filteredUsers.map((user) => (
            <ProfileCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <p>No developers found.</p>
        )}
      </div>
    </>
  );
}

export default App;
