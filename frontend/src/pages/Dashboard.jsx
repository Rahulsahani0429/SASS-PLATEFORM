// import React, { useEffect, useState } from "react";
// import useAuthStore from "../store/authStore";
// import api from "../services/api";
// import { toast } from "react-toastify";

// function Dashboard() {
//   const { user, logout } = useAuthStore();
//   const [features, setFeatures] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     status: "pending",
//   });

//   const fetchData = async () => {
//     const res = await api.get("/features");
//     setFeatures(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const res = await api.post("/features", form);
//     setForm({ title: "", description: "", status: "pending" });
//     fetchData();
//     toast.success("Feature Created");
//   };

//   const handleDelete = async (id) => {
//     await api.delete(`/features/${id}`);
//     fetchData();
//     toast.success("Deleted!");
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
//       <button onClick={logout} className="text-red-500 mt-2">
//         Logout
//       </button>

//       <form onSubmit={handleCreate} className="mt-5">
//         <input
//           className="input"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />
//         <input
//           className="input"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//         <select
//           className="input"
//           value={form.status}
//           onChange={(e) => setForm({ ...form, status: e.target.value })}
//         >
//           <option>pending</option>
//           <option>in-progress</option>
//           <option>completed</option>
//         </select>
//         <button className="btn">Add Feature</button>
//       </form>

//       <ul className="mt-4">
//         {features.map((f) => (
//           <li key={f._id} className="flex justify-between p-2 border">
//             <div>
//               <p>{f.title}</p>
//               <small>{f.status}</small>
//             </div>
//             <button
//               onClick={() => handleDelete(f._id)}
//               className="text-red-500"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import useAuthStore from "../store/authStore";

const Dashboard = () => {
  const { user, logoutUser } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name} 👋</h1>
      <p className="text-gray-700 mb-6">Email: {user?.email}</p>

      <button
        onClick={logoutUser}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
