import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "../../components/Header/Header";
const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
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
      if (!user.email) {
        return toast.error("Email is required", {
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
        `${BASE_URL}/api/v1/user-auth/forgot-password`,
        user
      );
      setLoading(false);
      toast.success(response.data.message, { position: "bottom-right" });
      setTimeout(() => {
        navigate("/email-sent-for-reset-password");
      }, 2000);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.response.data.message, { position: "bottom-right" });
    }
  };

  return (
    <>
      <Header />
      <div className="forgot-password-container">
        <div className="forgot-password-page">
          <h2>Forgot Password</h2>
          <form className="forgot-password-form">
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
            <div className="submit-button">
              <button type="submit" onClick={handleFormSubmit}>
                {loading ? <LoadingOutlined /> : "Get reset password link"}
              </button>
            </div>
            <div className="links">
              Remembered you password?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ForgotPassword;
