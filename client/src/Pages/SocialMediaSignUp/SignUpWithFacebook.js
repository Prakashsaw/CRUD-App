import React from "react";
import "./SocialMediaSignUp.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const SignUpWithFacebook = () => {
  const HandleSignUpWithFacebook = async () => {
    alert(
      "Working on SignUp with Facebook Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-signup-container">
        <div className="social-media-signup-page">
          <h2>Sign Up With Facebook</h2>
          <div className="social-media-signup-buttons">
            <button className="facebook" onClick={HandleSignUpWithFacebook}>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook-logo"
              />
              <span>Sign Up with Facebook</span>
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Link to="/sign-up">Back To SignUp</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpWithFacebook;
