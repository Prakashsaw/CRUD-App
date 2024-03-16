import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import {
  EyeFilled,
  EyeInvisibleFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      if (!user.email || !user.password) {
        return toast.error("All fields are required", {
          position: "bottom-right",
        });
      }
      // If email is not valid, show error message
      if (!user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        return toast.error("Invalid email", { position: "bottom-right" });
      }
      setLoading(true);
      // API call
      const response = await axios.post(
        `${BASE_URL}/api/v1/user-auth/login`,
        user
      );
      // Set response to local storage as key user
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setLoading(false);
      toast.success(response.data.message, { position: "bottom-right" });
      setTimeout(() => {
        navigate("/get-all-user");
      }, 2000);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.response.data.message, { position: "bottom-right" });
    }
  };

  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setShow(true);
    } else {
      setType("password");
      setShow(false);
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-page">
          <h2>Login</h2>
          <form className="login-form">
            <div className="input-field">
              <input
                type="text"
                name="email"
                id="email"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="input-field">
              <input
                type={type}
                name="password"
                id="password"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Password</label>
              <span className="show-hide-pass-icon" onClick={handleToggle}>
                {show ? (
                  <EyeFilled style={{ fontSize: 25 }} />
                ) : (
                  <EyeInvisibleFilled style={{ fontSize: 25 }} />
                )}
              </span>
            </div>
            <div className="links">
              <Link to="forgot-password">Forgot Password?</Link>
            </div>
            <div className="submit-button">
              <button type="submit" onClick={handleFormSubmit}>
                {loading ? <LoadingOutlined /> : "Submit"}
              </button>
            </div>
            <div className="links">
              Don't have an account?
              <Link to="/register">SignUp</Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
