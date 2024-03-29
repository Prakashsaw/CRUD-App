import React from "react";
import "./SocialMediaLogin.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SignInWithGitHub = () => {
  const HandleSignInWithGithub = async () => {
    alert(
      "Working on SignIn with Github Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-login-buttons-container">
        <div className="social-media-login-buttons-page">
          <h2>Sign In with GitHub</h2>
          <div className="social-media-login-buttons">
            <button className="github" onClick={HandleSignInWithGithub}>
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github-logo"
              />
              <span>Sign In with Github</span>
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Link to="/sign-in">Back To SignIn</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInWithGitHub;
