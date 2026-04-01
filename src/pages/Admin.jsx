import { useEffect, useState } from "react";
import API from "../api/api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get("/admin/users");
    setUsers(res.data);
  };

  const getRecommendations = async (user) => {
    setSelectedUser(user);
    const res = await API.get(`/admin/recommendations/${user.id}`);
    setRecommendations(res.data);
  };

  const bookCall = async (mentorId) => {
    await API.post("/admin/book-call", {
      userId: selectedUser.id,
      mentorId,
      call_type: "mock",
    });

    alert("Call booked!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        
        {/* Users */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>

          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center mb-3 p-2 border rounded"
            >
              <span>{user.name}</span>
              <button
                onClick={() => getRecommendations(user)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Match
              </button>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Recommendations
          </h2>

          {recommendations.length === 0 && (
            <p className="text-gray-500">
              Select a user to see mentors
            </p>
          )}

          {recommendations.map((r) => (
            <div
              key={r.mentor.id}
              className="flex justify-between items-center mb-3 p-2 border rounded"
            >
              <div>
                <p className="font-medium">{r.mentor.name}</p>
                <p className="text-sm text-gray-500">
                  Score: {r.score}
                </p>
              </div>

              <button
                onClick={() => bookCall(r.mentor.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Book
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Admin;