import './App.css';
import LogIn from './components/pages/LogIn';
import { useState } from 'react';
import Home from './components/pages/Home';
import Welcome from './components/pages/Welcome';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    // <div>
    //   <LogIn></LogIn>
    // </div>
    <Router className="gradient_bg">
      {/* <div className="gradient_bg"> */}
        <Navbar isAuth={isAuth} />
        {/* <Welcome /> */}
      {/* </div> */}
      <Routes>
       {!isAuth && <Route path="/" element={<Welcome />}></Route>}
        <Route path="/login" element={<LogIn setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
