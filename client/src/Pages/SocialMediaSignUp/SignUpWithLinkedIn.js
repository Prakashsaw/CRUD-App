import React from "react";
import "./SocialMediaSignUp.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const SignUpWithLinkedIn = () => {
  const SignUpWithLinkedIn = async () => {
    alert(
      "Working on SignUp with LinkedIn Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-signup-container">
        <div className="social-media-signup-page">
          <h2>Sign Up With LinkedIn</h2>
          <div className="social-media-signup-buttons">
            <button className="linkedin" onClick={SignUpWithLinkedIn}>
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin-logo"
              />
              <span>Sign Up with Linkedin</span>
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

export default SignUpWithLinkedIn;
