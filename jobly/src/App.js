import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Companies from './Companies';
import Jobs from './Jobs';
import Profile from './Profile';

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
        </Routes>
      </BrowserRouter>
  </div>
  );
}   // END App()

export default App;
