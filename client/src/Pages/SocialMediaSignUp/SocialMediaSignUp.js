import React from "react";
import "./SocialMediaSignUp.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
const SocialMediaSignUp = () => {
  const navigate = useNavigate();
  const signUpWithGoogle = () => {
    navigate("/sign-up-with-google");
  };
  const signUpWithFacebook = () => {
    navigate("/sign-up-with-facebook");
  };
  const signUpWithGithub = () => {
    navigate("/sign-up-with-github");
  };
  const signUpWithLinkedIn = () => {
    navigate("/sign-up-with-linkedin");
  };

  const signUpWithEmail = () => {
    navigate("/sign-up/sign-up-with-email");
  };
  return (
    <>
      <Header />
      <div className="social-media-signup-container">
        <div className="social-media-signup-page">
          <h2>Sign Up</h2>
          <div className="social-media-signup-buttons">
            <button className="google" onClick={signUpWithGoogle}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google-logo"
              />
              <span>Sign Up with Google</span>
            </button>
            <button className="facebook" onClick={signUpWithFacebook}>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook-logo"
              />
              <span>Sign Up with Facebook</span>
            </button>
            <button className="github" onClick={signUpWithGithub}>
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github-logo"
              />
              <span>Sign Up with Github</span>
            </button>

            <button className="linkedin" onClick={signUpWithLinkedIn}>
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin-logo"
              />
              <span>Sign Up with Linkedin</span>
            </button>
            <button className="email" onClick={signUpWithEmail}>
              <img
                src="https://img.icons8.com/color/48/000000/email.png"
                alt="twitter-logo"
              />
              <span>Sign Up with Email</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaSignUp;
