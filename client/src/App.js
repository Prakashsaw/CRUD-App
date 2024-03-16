import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetUser from "./components/getuser/GetUser";
import AddUser from "./components/adduser/AddUser";
import UpdateUser from "./components/updateuser/UpdateUser";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/get-all-user", element: <GetUser /> },
    { path: "/add-user", element: <AddUser /> },
    { path: "/edit-user/:id", element: <UpdateUser /> },
  ]);
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
