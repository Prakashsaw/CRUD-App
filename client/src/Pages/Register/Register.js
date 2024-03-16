import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled, LoadingOutlined } from "@ant-design/icons";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Header from "../../components/Header/Header";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate input fields
      if (
        !user.name ||
        !user.email ||
        !user.password ||
        !user.confirmPassword
      ) {
        return toast.error("All fields are required", {
          position: "bottom-right",
        });
      }
      // If email is not valid, show error message
      if (!user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        return toast.error("Invalid email", { position: "bottom-right" });
      }
      // Password length should be greater than 6
      if (user.password.length < 6) {
        return toast.error("Password length should be greater than 6", {
          position: "bottom-right",
        });
      }
      // Password and confirm password should be same
      if (user.password !== user.confirmPassword) {
        return toast.error("Password and confirm password should be same", {
          position: "bottom-right",
        });
      }
      setLoading(true);
      // API call
      const response = await axios.post(
        `${BASE_URL}/api/v1/user-auth/register`,
        user
      );
      console.log(response);
      setLoading(false);
      toast.success(response.data.message, { position: "bottom-right" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.response.data.message, { position: "bottom-right" });
    }
  };

  const [type1, setType1] = useState("password");
  const [show1, setShow1] = useState(false);
  const handleToggle1 = () => {
    if (type1 === "password") {
      setType1("text");
      setShow1(true);
    } else {
      setType1("password");
      setShow1(false);
    }
  };

  const [type2, setType2] = useState("password");
  const [show2, setShow2] = useState(false);
  const handleToggle2 = () => {
    if (type2 === "password") {
      setType2("text");
      setShow2(true);
    } else {
      setType2("password");
      setShow2(false);
    }
  };
  return (
    <>
      <Header />
      <div className="register-container">
        <div className="register-page">
          <h2>Sign Up</h2>
          <form className="register-form">
            <div className="input-field">
              <input
                type="text"
                name="name"
                id="name"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
            <div className="input-field">
              <input
                type="email"
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
                type="number"
                name="phone"
                id="phone"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Phone Number(optional)</label>
            </div>
            <div className="input-field">
              <input
                type={type1}
                name="password"
                id="password"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Create Password</label>
              <span className="show-hide-pass-icon" onClick={handleToggle1}>
                {show1 ? (
                  <EyeFilled style={{ fontSize: 25 }} />
                ) : (
                  <EyeInvisibleFilled style={{ fontSize: 25 }} />
                )}
              </span>
            </div>
            <div className="input-field">
              <input
                type={type2}
                name="confirmPassword"
                id="confirmPassword"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Confirm Password</label>
              <span className="show-hide-pass-icon" onClick={handleToggle2}>
                {show2 ? (
                  <EyeFilled style={{ fontSize: 25 }} />
                ) : (
                  <EyeInvisibleFilled style={{ fontSize: 25 }} />
                )}
              </span>
            </div>
            <div className="submit-button">
              <button type="submit" onClick={handleFormSubmit}>
                {loading ? <LoadingOutlined /> : "Submit"}
              </button>
            </div>
            <div className="links">
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
