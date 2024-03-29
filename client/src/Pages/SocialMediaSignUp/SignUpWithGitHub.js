import React from "react";
import "./SocialMediaSignUp.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SignUpWithGitHub = () => {
  const SignUpWithGithub = async () => {
    alert(
      "Working on SignUp with Github Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-signup-container">
        <div className="social-media-signup-page">
          <h2>Sign Up With GitHub</h2>
          <div className="social-media-signup-buttons">
            <button className="github" onClick={SignUpWithGithub}>
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github-logo"
              />
              <span>Sign Up with Github</span>
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

export default SignUpWithGitHub;
