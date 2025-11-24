import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/gallerylogo.png";
import { Link } from "react-router-dom";

function GalleryNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Gallery logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default GalleryNavbar;
