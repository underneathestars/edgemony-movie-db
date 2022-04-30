import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App--navbar">
          <img src="https://i.ibb.co/d62ycMQ/clapperboard.png" alt="clapperboard" border="0"/>
          <h3>MOVIE<strong>DB</strong></h3>
          <div className="App--navbar--list">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/add-movie">ADD NEW MOVIE</Link>
              </li>
            </ul>
        </div>
        </nav>

        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
