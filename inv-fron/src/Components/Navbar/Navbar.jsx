import React from 'react'
import { Outlet, Link } from "react-router-dom";

 function Navbar({links}) {
  return (
    <div className='d-flex col-6   d-flex justify-content-around align-items-center'> 
        { links.map((value, index) => {
          return  <li key={index}> <Link to={`/${value}`}>{value}</Link> </li>}
            )}            
    </div>
  )
}

export default Navbar