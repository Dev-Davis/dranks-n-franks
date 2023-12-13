import { useState } from "react";

import "./App.css";

import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorites/Favorites";
import Cart from "./Components/Cart/Cart";
import UserNav from "./Components/Navbar/UserNav/UserNav";
import GuestNav from "./Components/Navbar/GuestNav/GuestNav"
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";


import { BrowserRouter, Routes, Route, 
  // NavLink 
} from "react-router-dom";

function App() {
  
const [authed, setAuthed] = useState(false);

const login = () => {
  setAuthed(!authed);
}

  return (
    <div className="App">
      <BrowserRouter>
      {authed ? <UserNav authed={authed} login={login} /> : <GuestNav authed={authed} login={login} />}
        {/* <Navbar authed={authed} login={login} /> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home authed={authed} login={login} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login authed={authed} login={login} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
