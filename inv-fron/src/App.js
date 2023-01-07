import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Book from "./Components/Books/Book";
import Game from "./Components/Game/Game";
import Material from "./Components/Materials/Material";
import Gift from "./Components/Gifts/Gift";
import Home from "./Components/Home/Home";
import FormAdd from "./Components/Form/FormAdd";
import FormAddAll from "./Components/Form/FormAddAll";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
       
        <Routes>
          <Route path="/*" element={<Login />} /> 
          <Route path="/Games" element={<Game  />} />
          <Route path="/Books" element={<Book />} />
          <Route path="/materials" element={<Material />} />
          <Route path="/Gifts" element={<Gift />} />
          <Route path="/Gifts/FormAddAll" element={<FormAddAll  name='gifts'  />} />
          <Route path="/Books/FormAdd" element={<FormAdd/>} />
          <Route path="/Games/FormAddAll" element={<FormAddAll  name='games'  />} />
          <Route path="/materials/FormAddAll" element={<FormAddAll name='materials' />} />
          <Route path="/Register" element={< Register />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
