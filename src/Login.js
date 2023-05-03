import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: login.email,
      password: login.password,
    };

    if (await axios.post("http://127.0.0.1:8000/api/login", formData)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login Form</h1>
      <React.Fragment>
        <form onSubmit={handleSubmit}>
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
            <label className="form-label">Password</label>
            <input
              type="text"
              name="password"
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
export default Login;
