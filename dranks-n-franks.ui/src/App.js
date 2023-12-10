import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
        </Routes>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
