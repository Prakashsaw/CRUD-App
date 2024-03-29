import React from "react";
import "./SocialMediaLogin.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const SignInWithLinkedIn = () => {
  const HandleSignInWithLinkedIn = async () => {
    alert(
      "Working on SigIn with LinkedIn Authentication. This feature will be available soon."
    );
  };
  return (
    <>
      <Header />
      <div className="social-media-login-buttons-container">
        <div className="social-media-login-buttons-page">
          <h2>Sign In with LinkedIn</h2>
          <div className="social-media-login-buttons">
            <button className="linkedin" onClick={HandleSignInWithLinkedIn}>
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin-logo"
              />
              <span>Sign In with Linkedin</span>
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

export default SignInWithLinkedIn;
