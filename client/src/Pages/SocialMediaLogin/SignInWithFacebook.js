import React from "react";
import "./SocialMediaLogin.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const SignInWithFacebook = () => {
  const HandleSignInWithFacebook = async () => {
    alert(
      "Working on SignIn with Facebook Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-login-buttons-container">
        <div className="social-media-login-buttons-page">
          <h2>Sign In with Facebook</h2>
          <div className="social-media-login-buttons">
            <button className="facebook" onClick={HandleSignInWithFacebook}>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook-logo"
              />
              <span>Sign In with Facebook</span>
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

export default SignInWithFacebook;
