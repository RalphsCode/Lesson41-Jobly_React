import './App.css';
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
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}   // END App()

export default App;
