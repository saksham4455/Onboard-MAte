import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./Navbar.css";

function Navbar() {
  const { role, setRole } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setRole(null);
    navigate("/");
  };

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
    setShowDropdown(false);
    navigate("/dashboard");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Left: Logo */}
        <div className="navbar__left">
          <h2>Onboard MAte</h2>
        </div>

        {/* Center: Navigation */}
        <div className="navbar__center">
          <Link to="/">Home</Link>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right: Login / Logout */}
        <div className="navbar__right" ref={dropdownRef}>
          {role ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button
                className="login-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Login
              </button>
              {showDropdown && (
                <div className="login-dropdown">
                  <button onClick={() => handleSelectRole("Admin")}>Login as Admin</button>
                  <button onClick={() => handleSelectRole("Employee")}>Login as Employee</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
