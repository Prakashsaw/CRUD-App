import React, { useState } from "react";
import "./VerifyUserEmail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import {
  LoadingOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
const VerifyOTPForUserEmailVerification = () => {
  const [user, setUser] = useState({
    otp: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const params = useParams();
  const id = params.id;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      if (!user.otp) {
        return toast.error("OTP is required", {
          position: "bottom-right",
        });
      }

      setLoading(true);
      // API call
      const response = await axios.post(
        `${BASE_URL}/api/v1/user-auth/verify-email-through-otp/${id}`,
        user
      );
      setLoading(false);
      toast.success(response.data.message, { position: "bottom-right" });
      setTimeout(() => {
        navigate(`/complete-sign-up/register/${response.data.email}`);
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
      <div className="signup-container">
        <div className="signup-page">
          <h2>Verify Email</h2>
          <form className="signup-form">
            <div className="input-field">
              <input
                type="text"
                name="otp"
                id="otp"
                required
                spellCheck="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>OTP</label>
            </div>

            <div className="submit-button">
              <button type="submit" onClick={handleFormSubmit}>
                {loading ? <LoadingOutlined /> : "Verify OTP"}
              </button>
            </div>
            <div className="links">
              <Link to="/sign-up/sign-up-with-email">Resend OTP</Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default VerifyOTPForUserEmailVerification;
