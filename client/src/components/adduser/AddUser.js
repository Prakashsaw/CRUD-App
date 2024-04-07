import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header/Header";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    phone: "",
    address: "",
    picture: "",
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
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("address", user.address);
      formData.append("picture", user.picture);

      console.log("formData", Object.fromEntries(formData.entries()));

      const res = await axios.post(
        `${BASE_URL}/api/v1/users/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      toast.success(res.data.message, { position: "bottom-right" });
      navigate("/get-all-user");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...!", { position: "bottom-right" });
    }
  };

  return (
    <>
      <Header />
      <div className="addUser">
        <Link to="/get-all-user"> Back </Link>
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
            <label htmlFor="name">Choose Image</label>
            <input
              type="file"
              id="picture"
              name="picture"
              autoComplete="off"
              placeholder="Enter your address"
              // onChange={inputHandler}
              onChange={(e) => {
                setUser({ ...user, picture: e.target.files[0] });
              }}
            />
          </div>
          <div className="inputGroup">
            <button type="submit" className="addButton">
              ADD USER
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddUser;
