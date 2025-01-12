import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    try {
      const response = await fetchUsers();
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert("Login berhasil!");
        navigate("/dashboard"); // Arahkan ke halaman Dashboard
      } else {
        setError("Email atau password salah.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Terjadi kesalahan. Coba lagi nanti.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Masukkan email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Masukkan password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
