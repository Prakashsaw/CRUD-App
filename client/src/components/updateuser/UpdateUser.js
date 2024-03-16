import React, { useEffect, useState } from "react";
import "../adduser/AddUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/baseURL";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header/Header";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const { id } = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/users/get-one-user/${id}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        toast.success(res.data.message, { position: "bottom-right" });
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Can't be fetch deta...!", {
          position: "bottom-right",
        });
      });
  }, [id]);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${BASE_URL}/api/v1/users/update/${id}`,
        user,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      );
      toast.success(res.data.message, { position: "bottom-right" });
      // console.log(res.data);
      setTimeout(() => {
        navigate("/get-all-user");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Can't be update...!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="addUser">
        <Link to="/get-all-user"> Back </Link>
        <h3>Update User</h3>
        <form className="addUserForm" onSubmit={submitFormHandler}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={user.name}
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter name"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={user.email}
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter email"
              onChange={inputChangeHandler}
              disabled={true}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="name">Phone Number</label>
            <input
              type="number"
              value={user.phone}
              id="phome"
              name="phone"
              autoComplete="off"
              placeholder="Enter phone number"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              value={user.address}
              id="address"
              name="address"
              autoComplete="off"
              placeholder="Enter your address"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="inputGroup">
            <button type="submit" className="addButton">
              UPDATE USER
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateUser;
