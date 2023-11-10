import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsUserLoggedIn }) => {
  // State to hold login data
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  // State to hold login errors
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  // Handle login field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("userData")) || {};

    // Check if the entered credentials match the stored data
    if (
      loginData.name === userData.name &&
      loginData.password === userData.password
    ) {
      // Successfully logged in
      // You can redirect to the next screen

      navigate("/");

      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setIsUserLoggedIn(true);
      setLoginError("");
    } else {
      // Invalid credentials
      setLoginError("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.labelInput}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={loginData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <button type="submit">Login</button>
        </div>
        {loginError && <p className={styles.errorMsg}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
