import React from "react";
import "./SocialMediaLogin.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
const SocialMediaLoginButtons = () => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    navigate("/sign-in-with-google");
  };
  const loginWithFacebook = () => {
    navigate("/sign-in-with-facebook");
  };
  const loginWithGithub = () => {
    navigate("/sign-in-with-github");
  };
  const loginWithLinkedIn = () => {
    navigate("/sign-in-with-linkedin");
  };

  const loginWithEmail = () => {
    navigate("/login-with-email");
  };
  return (
    <>
      <Header />
      <div className="social-media-login-buttons-container">
        <div className="social-media-login-buttons-page">
          <h2>Sign In</h2>
          <div className="social-media-login-buttons">
            <button className="google" onClick={loginWithGoogle}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google-logo"
              />
              <span>Sign In with Google</span>
            </button>
            <button className="facebook" onClick={loginWithFacebook}>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook-logo"
              />
              <span>Sign In with Facebook</span>
            </button>
            <button className="github" onClick={loginWithGithub}>
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github-logo"
              />
              <span>Sign In with Github</span>
            </button>

            <button className="linkedin" onClick={loginWithLinkedIn}>
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin-logo"
              />
              <span>Sign In with Linkedin</span>
            </button>
            <button className="email" onClick={loginWithEmail}>
              <img
                src="https://img.icons8.com/color/48/000000/email.png"
                alt="twitter-logo"
              />
              <span>Sign In with Email</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaLoginButtons;
