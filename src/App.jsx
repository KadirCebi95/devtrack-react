import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const initialUsers = [
    {
      id: 1,
      name: "Kadir",
      role: "Frontend Software Engineer",
      city: "İstanbul",
    },
    {
      id: 2,
      name: "Ahmet",
      role: "Backend Developer",
      city: "İzmir",
    },
    {
      id: 3,
      name: "Ayşe",
      role: "UI/UX Designer",
      city: "Kars",
    },
  ];

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers
      ? JSON.parse(savedUsers)
      : initialUsers;
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
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const filteredUsers = users.filter((user) => {
    const searchMatches =
      user.name.toLowerCase().includes(normalizedSearch) ||
      user.role.toLowerCase().includes(normalizedSearch) ||
      user.city?.toLowerCase().includes(normalizedSearch);

    const roleMatches =
      selectedRole === "All" ||
      user.role.includes(selectedRole);

    return searchMatches && roleMatches;
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <section className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-5 shadow-2xl shadow-cyan-950/30 ring-1 ring-cyan-500/5 backdrop-blur-sm">
          <input
            className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            type="text"
            placeholder="Search Developer..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          <form
            className="grid gap-3 md:grid-cols-4"
            onSubmit={(event) => {
              event.preventDefault();

              if (!name || !role || !city) {
                return;
              }

              const newUser = {
                id: Date.now(),
                name,
                role,
                city,
                buttonText: "Follow",
              };

              setUsers([...users, newUser]);
              setName("");
              setRole("");
              setCity("");
            }}
          >
            <input
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              type="text"
              placeholder="Role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />

            <input
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              type="text"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <button
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98]"
              type="submit"
            >
              Add developer
            </button>
          </form>
        </section>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["All", "Frontend", "Backend", "UI/UX"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={
                selectedRole === role
                  ? "rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition"
                  : "rounded-lg border border-slate-700 bg-slate-950/50 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              }
            >
              {role}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <ProfileCard
                key={user.id}
                user={user}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-slate-400">
              No developers found.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;