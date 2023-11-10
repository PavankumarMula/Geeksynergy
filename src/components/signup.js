import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/form.module.css";

const Signup = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    profession: "",
  });

  const navigate = useNavigate();

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, don't proceed with submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Store data in local storage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Reset the form data
    setFormData({
      name: "",
      password: "",
      email: "",
      phoneNumber: "",
      profession: "",
    });

    // Clear validation errors
    setErrors({});
    // On SucessFully Submitting Redirect to Login Page
    navigate("/login");
  };

  // Function to validate form data
  const validateForm = (data) => {
    let errors = {};

    // Validate Name
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    // Validate Password
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      errors.email = "Valid email is required";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!data.phoneNumber.trim() || !phoneRegex.test(data.phoneNumber)) {
      errors.phoneNumber = "Valid phone number is required";
    }

    // Validate Profession
    if (!data.profession.trim()) {
      errors.profession = "Profession is required";
    }

    return errors;
  };

  return (
    <div>
      <h2 className={styles.heading}>User Signup</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.labelInput}>
          <label>Name:</label>
          {errors.name && <span>{errors.name}</span>}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <label>Password:</label>
          {errors.password && <span>{errors.password}</span>}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <label>Email:</label>
          {errors.email && <span>{errors.email}</span>}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <label>Phone Number:</label>
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className={styles.labelInput}>
          <label>Profession:</label>
          {errors.profession && <span>{errors.profession}</span>}
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className={styles.labelInput}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
