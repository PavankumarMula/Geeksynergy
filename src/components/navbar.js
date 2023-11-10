// Navbar.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import Modal from "./Modal";

const Navbar = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  const [isCompanyInfoModalOpen, setIsCompanyInfoModalOpen] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/signup");
    localStorage.removeItem("isLoggedIn");
    setIsUserLoggedIn(false);
  };

  return (
    <div className={styles.navContainer}>
      {isUserLoggedIn && <Link to="/">Movies</Link>}
      {!isUserLoggedIn && <Link to="/signup">Signup</Link>}
      {!isUserLoggedIn && <Link to="/login">Login</Link>}
      <div className={styles.buttons}>
        {isUserLoggedIn && (
          <button
            className={styles.logout}
            onClick={() => {
              setIsCompanyInfoModalOpen(true);
            }}
          >
            Company Info
          </button>
        )}
        {isUserLoggedIn && (
          <button onClick={logoutHandler} className={styles.logout}>
            Logout
          </button>
        )}
      </div>
      <Modal
        isOpen={isCompanyInfoModalOpen}
        onClose={() => setIsCompanyInfoModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
