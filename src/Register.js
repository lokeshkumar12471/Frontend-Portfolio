import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    password: "",
    c_password: "",
  });
  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: register.name,
      email: register.email,
      phone: register.phone,
      age: register.age,
      address: register.address,
      password: register.password,
      c_password: register.c_password,
    };
    if (formData.password === formData.c_password) {
      if (await axios.post("http://127.0.0.1:8000/api/register", formData)) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Register Form</h1>
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="age"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              name="c_password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    </div>
  );
};
export default Register;
