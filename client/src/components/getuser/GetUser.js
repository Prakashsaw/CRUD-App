import React, { useEffect, useState } from "react";
import "./GetUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import toast from "react-hot-toast";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header/Header";

const GetUser = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/users/get-all-users`,
        {},
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      );
      console.log(res.data);
      toast.success(res.data.message, { position: "bottom-right" });
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Can't be fetch users...!", {
        position: "bottom-right",
      });
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserHandler = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/v1/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });
      console.log(res);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

      toast.success("User deleted successfully...!", {
        position: "bottom-right",
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Can't be delete user...!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="userTable">
        <Link to={"/add-user"} className="addButton">
          Add User
        </Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td className="actionButtons">
                    <Link to={`/get-one-user/${user._id}`}>
                      <button className="view">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => deleteUserHandler(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link to={`/edit-user/${user._id}`}>
                      <button className=" edit">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default GetUser;
