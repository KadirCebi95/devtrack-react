import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
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
  return (
    <>
      <Header />
      <div className="card-container">
        {users.map((user) => (
          <ProfileCard
          key={user.id}
           user= {user}
          />
        ))}
      </div>
    </>
  );
}

export default App;
