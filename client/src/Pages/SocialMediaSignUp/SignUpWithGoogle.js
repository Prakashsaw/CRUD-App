import React from "react";
import "./SocialMediaSignUp.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SignUpWithGoogle = () => {
  const SignUpWithGoogle = async () => {
    alert(
      "Working on SignUp with Google Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-signup-container">
        <div className="social-media-signup-page">
          <h2>Sign Up With Google</h2>
          <div className="social-media-signup-buttons">
            <button className="google" onClick={SignUpWithGoogle}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google-logo"
              />
              <span>Sign Up with Google</span>
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

export default SignUpWithGoogle;
