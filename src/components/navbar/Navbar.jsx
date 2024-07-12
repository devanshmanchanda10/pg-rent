import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/profile'); // Redirect to /list
  };

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>PG Rental Dwarka</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">About</a>
        <a href="/profile">Contact</a>
        <a href="/list">All PGs</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img onClick={handleRedirect}
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Devansh Manchanda</span>
            <Link to="/profile" className="profile">
              {/* <div className="notification">+1  </div> */}
              
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
