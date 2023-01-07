import Header from "../Header/Header";
import React from "react";

export default function Content(props) {
  return (
   <React.Fragment>
    <div className="container mt-3">
      <div className="border rounded   me-2  col-3">
        <img
          className="rounded"
          src=""
          alt="books"
          width={"100%"}
          height={"100%"}
        />
        <div className="text-dark p-3">
          <h2>{props.title}</h2>
          <p>
       
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sequi.
          </p>
          <p>Data</p>
        </div>
      </div>
    </div>
    </React.Fragment> 
  );
}
