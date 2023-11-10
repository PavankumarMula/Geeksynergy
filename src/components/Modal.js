// Modal.js

import React from "react";
import styles from "../styles/modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Company Info</h2>
        <p>
          <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
        </p>
        <p>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </p>
        <p>
          <strong>Phone:</strong> XXXXXXXXX09
        </p>
        <p>
          <strong>Email:</strong> XXXXXX@gmail.com
        </p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
