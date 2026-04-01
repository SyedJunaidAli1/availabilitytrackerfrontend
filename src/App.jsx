import { useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  if (user.role === "admin") return <Admin />;

  return <div>Logged in as {user.role}</div>;
}

export default App;