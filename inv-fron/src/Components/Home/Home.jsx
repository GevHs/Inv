import React, { useContext } from "react";
import Header from "../Header/Header";
import HomeContent from "./HomeContent";
import AuthContext from '../AuthProvaider/AuthProvider';


export default function Home() {
  const {auth} = useContext(AuthContext)
  console.log('Auth User' , auth)
  return (
   <React.Fragment>
    <Header />
    <div className="container mt-2 pt-3 d-flex flex-wrap">
        <div
          className="border rounded p-5 w-50"
          style={{
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 className="pb-2">Inventory system</h2>
          <p>
            This is a modified jumbotron that occupies the entri horizontal space
            of its parent
          </p>
        </div>
        <div className=" ms-5  bg-danger rounded-circle" style={{width:'370px' , heigth: '250px',}}></div>
      <HomeContent />
    </div>
    </React.Fragment> 
  );
}
