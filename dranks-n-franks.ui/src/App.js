import "./App.css";

import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorites/Favorites";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";

import { BrowserRouter, Routes, Route, 
  // NavLink 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
