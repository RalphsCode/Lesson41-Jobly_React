import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Companies from './Companies';
import Jobs from './Jobs';
import Profile from './Profile';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

/** Function to Display the Masthead Message, the NavBar, 
 * and routes to the web Components.
 */
function App() {
  // Function to add the username and token to local storage
  const userToLocalStorage = (user) => {
    localStorage.setItem("username", user.username);
    localStorage.setItem("token", user.token);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<Companies />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm userToLocalStorage = {userToLocalStorage} />} />
          <Route path="/login" element={<LoginForm userToLocalStorage = {userToLocalStorage} />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}   // END App()

export default App;
