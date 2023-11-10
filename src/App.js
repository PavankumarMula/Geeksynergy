import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Navbar from "./components/navbar";
import CompanyInfoModal from "./components/Modal";

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    setIsUserLoggedIn(isLoggedIn);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
        <Routes>
          {isUserLoggedIn && <Route path="/" element={<Home />} />}
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
          />
          {isUserLoggedIn && (
            <Route path="company" element={<CompanyInfoModal />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
