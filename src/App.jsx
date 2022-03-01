import './App.css';
import LogIn from './components/pages/LogIn';
import { useState } from 'react';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    // <div>
    //   <LogIn></LogIn>
    // </div>
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
