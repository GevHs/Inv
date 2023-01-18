import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
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
import AuthContext from "./Components/AuthProvaider/AuthProvider";


const PrivateRoute = ({children, user}) => {
  if(user){
    return <>
    {children}
    </> 
  }else{
    return <Login/>
  }
}

function App() {
  const { auth, setAuth } = useContext(AuthContext)
  useEffect(() => {
    if (!auth.email) {
      if (localStorage.getItem('accsessToken')) {
        fetch('http://localhost:4444/auth/me', {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accsessToken')}`
          },

        }).then(response => response.json())
          .then(result => {
            console.log(result)
            setAuth({ fullName: result.fullName, email: result.email })
          })
      }
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>            
          <Route exact path="/Register" element={< Register />} />
        
          <Route path="/Home" element={
            <PrivateRoute user={auth.email}>
              <Home />
            </PrivateRoute>
          }   />
          <Route exact path="/Games"  element={
            <PrivateRoute user={auth.email}>
              <Game />
            </PrivateRoute>
          }  />
          <Route exact path="/Books"   element={
            <PrivateRoute user={auth.email}>
              <Book />
            </PrivateRoute>
          }  />
          <Route exact path="/materials"   element={
            <PrivateRoute user={auth.email}>
              <Material />
            </PrivateRoute>
          }  />
          <Route exact path="/Gifts"  element={
            <PrivateRoute user={auth.email}>
              <Gift />
            </PrivateRoute>
          }  />
           <Route exact path="/Gifts/FormAddAll" element={<FormAddAll name='gifts' />} />
           <Route exact  path="/Books/FormAdd" element={<FormAdd />} />
           <Route exact path="/Games/FormAddAll" element={<FormAddAll name='games' />} />
           <Route exact path="/materials/FormAddAll" element={<FormAddAll name='materials' />} />  
           <Route exact path="*" element={<Login/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
