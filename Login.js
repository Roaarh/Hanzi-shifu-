import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css"; 
import Navbar from "../components/Navbar";

const savedUsers = [
  { email: "test@example.com", password: "123456" },
  { email: "user@domain.com", password: "password" }
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = savedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/reservations");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
   
    <div className="auth-page">
       <Navbar/>
      <div className="auth-overlay">
        <div className="auth-box">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
