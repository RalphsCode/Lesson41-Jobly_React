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
  // Create a state to hold the user & token
  const [user, setUser] = useState({});
  
  // Function to update the 'user' state
  const updateUserState = (token) => {
    setUser(token);
  };  // END updateUserState

  // Using useEffect tto get the updated state value
  useEffect(() => {
    console.log("User state has been updated:", user);
  }, [user]);

  return (
    <div className="App">
      <h1>RalphsCode Jobly - React Version</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm updateUserState = {updateUserState}/>} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}   // END App()

export default App;
