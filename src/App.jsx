import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
      } catch {
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) return <Login setUser={setUser} />;

  if (user.role === "admin") return <Admin setUser={setUser} />;

  return <div>Logged in as {user.role}</div>;
}

export default App;
