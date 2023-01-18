import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css"
export default function Header({setValue}) {
 
 const navigate =  useNavigate()
 const handelClicklogOut = () => {
          localStorage.removeItem('accsessToken')    
          navigate('/')
  }

  return (
    <header className="container bg-light p-3 header">
      <div className="d-flex col-10">
        <div className="d-flex  col-8">
          <div className="me-5">
             <Link  to={'/Home'}><h2 className="headerTitle text-black">Inventory</h2></Link>
          </div>
          <Navbar links={[ "Books", "Games", "Gifts", "Materials"]} />
        </div>
        <div className="header_serach col-3  col-4">
          <input
            type="text"
            className="form-control w-75"
            placeholder="search..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" className="btn btn-success ms-3 ">
            Search
          </button>
          <button onClick={handelClicklogOut} type="button" className="btn btn-success ms-3 ">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
