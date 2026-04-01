import { useEffect, useState } from "react";
import API from "../api/api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const usersRes = await API.get("/admin/users");
    const mentorsRes = await API.get("/admin/mentors");

    setUsers(usersRes.data);
    setMentors(mentorsRes.data);
  };

  const getRecommendations = async (userId) => {
    const res = await API.get(`/admin/recommendations/${userId}`);
    setRecommendations(res.data);
  };

  const bookCall = async (mentorId) => {
    const userId = users[0].id; // simple for now

    await API.post("/admin/book-call", {
      userId,
      mentorId,
      call_type: "mock",
    });

    alert("Booked!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <h3>Users</h3>
      {users.map((u) => (
        <div key={u.id}>
          {u.name}
          <button onClick={() => getRecommendations(u.id)}>
            Get Mentors
          </button>
        </div>
      ))}

      <h3>Recommendations</h3>
      {recommendations.map((r) => (
        <div key={r.mentor.id}>
          {r.mentor.name} - Score: {r.score}
          <button onClick={() => bookCall(r.mentor.id)}>
            Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;