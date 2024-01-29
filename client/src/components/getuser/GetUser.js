import React, { useEffect, useState } from "react";
import "./GetUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const GetUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://crud-app-7c3d.onrender.com/api/v1/users/get-all-users`
      );
      setUsers(res.data.users);
    };
    fetchData();
  }, []);

  const deleteUserHandler = async (id) => {
    await axios
      .delete(`https://crud-app-7c3d.onrender.com/api/v1/users/delete/${id}`)
      .then((res) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        toast.success(res.data.message, { position: "top-center" });
        console.log(res.data);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
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
                  <button
                    className="delete"
                    onClick={() => deleteUserHandler(user._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button className=" edit">
                    <Link to={`/edit/${user._id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetUser;
