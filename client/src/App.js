import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetUser from "./components/getuser/GetUser";
import AddUser from "./components/adduser/AddUser";
import UpdateUser from "./components/updateuser/UpdateUser";
function App() {
  const route = createBrowserRouter([
    { path: "/", element: <GetUser /> },
    { path: "/add", element: <AddUser />},
    { path: "/edit/:id", element: <UpdateUser />},
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  );
}

export default App;
