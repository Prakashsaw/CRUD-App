import React from "react";
import "./SocialMediaLogin.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SignInWithGoogle = () => {
  const HandleSignInWithGoogle = async () => {
    alert(
      "Working on SignIn with Google Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-login-buttons-container">
        <div className="social-media-login-buttons-page">
          <h2>Sign In with Google</h2>
          <div className="social-media-login-buttons">
            <button className="google" onClick={HandleSignInWithGoogle}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google-logo"
              />
              <span>Sign In with Google</span>
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

export default SignInWithGoogle;
