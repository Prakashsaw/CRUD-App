import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));

  // logoout
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <h2>User Management App</h2>
          </div>
          <div className="right">
            <ul>
              {userdata ? (
                <>
                  <li>
                    <NavLink to="/get-all-user">Home</NavLink>
                  </li>
                  <li style={{ color: "green", fontWeight: "bold" }}>
                    {userdata?.name}
                  </li>

                  <li onClick={logout}>Logout</li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <div>
                      <NavLink to="/login" style={{ marginLeft: 125 }}>
                        Login
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div>
                      <NavLink to="/register">SignUp</NavLink>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
