import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import {
  EyeFilled,
  EyeInvisibleFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
const ResetPassword = () => {
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;
  const token = params.token;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      if (!user.password) {
        return toast.error("New password is required", {
          position: "bottom-right",
        });
      }
      if (user.password.length < 6) {
        return toast.error(
          "New password should be greater than 6 character length ",
          {
            position: "bottom-right",
          }
        );
      }
      // Password should be strong with atleast one uppercase, one lowercase, one number and one special character
      if (
        !user.password.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/
        )
      ) {
        return toast.error(
          "Password should be strong with atleast one uppercase, one lowercase, one number and one special character",
          { position: "bottom-right" }
        );
      }

      if (!user.confirmPassword || user.password !== user.confirmPassword) {
        return toast.error(
          "New password and confirm new password should be same",
          {
            position: "bottom-right",
          }
        );
      }
      setLoading(true);
      // API call
      const response = await axios.post(
        `${BASE_URL}/api/v1/user-auth/reset-password/${id}/${token}`,
        user
      );
      setLoading(false);
      toast.success(response.data.message, { position: "bottom-right" });
      setTimeout(() => {
        navigate("/password-reset-successfully");
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
      <div className="forgot-password-container">
        <div className="forgot-password-page">
          <h2>Reset Password</h2>
          <form className="forgot-password-form">
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
              <label>Create New Password</label>
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
              <label>Confirm New Password</label>
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
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ResetPassword;
