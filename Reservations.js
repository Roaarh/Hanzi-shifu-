import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Reservation.css";

function Reservations() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) navigate("/login");
    else setUser(savedUser);
  }, []);

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Reservation submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <>
      
      <div className="reservation-page">
        <Navbar />
        <div className="reservation-overlay">
          <div className="reservation-box">
            <h2>Reservation</h2>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
            <input
              type="number"
              name="guests"
              placeholder="Number of guests"
              value={form.guests}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Reservations;
