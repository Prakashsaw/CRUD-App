import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // OR
    /*
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
     */
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://crud-app-7c3d.onrender.com/api/v1/users/create`,
        user
      );
      console.log(res.data);
      toast.success(res.data.message, { position: "top-center" });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="addUser">
      <Link to="/"> Back </Link>
      <h3>Add User</h3>
      <form className="addUserForm" onSubmit={submitFormHandler}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Phone Number</label>
          <input
            type="number"
            id="phome"
            name="phone"
            autoComplete="off"
            placeholder="Enter phone number"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your address"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="addButton">
            ADD USER
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
