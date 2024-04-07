import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetUser from "./components/getuser/GetUser";
import AddUser from "./components/adduser/AddUser";
import UpdateUser from "./components/updateuser/UpdateUser";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ForgotPassword/ResetPassword";
import EmailSentForResetPassword from "./Pages/ForgotPassword/EmailSentForResetPassword";
import ResetPasswordSuccess from "./Pages/ForgotPassword/ResetPasswordSuccess";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import SendOTPForUserEmailVerification from "./Pages/VerifyUserEmail/SendOTPForUserEmailVerification";
import VerifyOTPForUserEmailVerification from "./Pages/VerifyUserEmail/VerifyOTPForUserEmailVerification";
import ViewUserDetails from "./components/ViewUserDetails/ViewUserDetails";
import SocialMediaLogin from "./Pages/SocialMediaLogin/SocialMediaLogin";
import SocialMediaSignUp from "./Pages/SocialMediaSignUp/SocialMediaSignUp";
import SignUpWithGoogle from "./Pages/SocialMediaSignUp/SignUpWithGoogle";
import SignUpWithFacebook from "./Pages/SocialMediaSignUp/SignUpWithFacebook";
import SignUpWithGitHub from "./Pages/SocialMediaSignUp/SignUpWithGitHub";
import SignUpWithLinkedIn from "./Pages/SocialMediaSignUp/SignUpWithLinkedIn";
import SignInWithGoogle from "./Pages/SocialMediaLogin/SignInWithGoogle";
import SignInWithFacebook from "./Pages/SocialMediaLogin/SignInWithFacebook";
import SignInWithGitHub from "./Pages/SocialMediaLogin/SignInWithGitHub";
import SignInWithLinkedIn from "./Pages/SocialMediaLogin/SignInWithLinkedIn";
function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <SocialMediaLogin /> },
    { path: "/sign-up", element: <SocialMediaSignUp /> },
    { path: "/sign-up-with-google", element: <SignUpWithGoogle /> },
    { path: "/sign-up-with-facebook", element: <SignUpWithFacebook /> },
    { path: "/sign-up-with-github", element: <SignUpWithGitHub /> },
    { path: "/sign-up-with-linkedin", element: <SignUpWithLinkedIn /> },
    {
      path: "/sign-up/sign-up-with-email",
      element: <SendOTPForUserEmailVerification />,
    },
    {
      path: "/sign-up/verify-email-through-otp/:id",
      element: <VerifyOTPForUserEmailVerification />,
    },
    { path: "/sign-in-with-google", element: <SignInWithGoogle /> },
    { path: "/sign-in-with-facebook", element: <SignInWithFacebook /> },
    { path: "/sign-in-with-github", element: <SignInWithGitHub /> },
    { path: "/sign-in-with-linkedin", element: <SignInWithLinkedIn /> },
    { path: "/login-with-email", element: <Login /> },
    { path: "/complete-sign-up/register/:email", element: <Register /> },

    { path: "/get-all-user", element: <GetUser /> },
    { path: "/add-user", element: <AddUser /> },
    { path: "/get-one-user/:id", element: <ViewUserDetails /> },
    { path: "/edit-user/:id", element: <UpdateUser /> },

    { path: "/forgot-password", element: <ForgotPassword /> },
    {
      path: "/email-sent-for-reset-password",
      element: <EmailSentForResetPassword />,
    },
    { path: "/reset-password/:id/:token", element: <ResetPassword /> },
    {
      path: "/password-reset-successfully",
      element: <ResetPasswordSuccess />,
    },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
