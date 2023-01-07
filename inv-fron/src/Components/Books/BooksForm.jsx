import React from "react";
import { Link } from "react-router-dom";

export default function BooksForm(props) {
  return (
    <div className="form container mt-2 ">
      <div className="bg-secondary  col-12 rounded text-white container p-3 d-flex justify-content-between ">
        <div className="d-flex">
          <p className="pe-2"> Home | {props.value}</p>
        </div>
        <div>
          <Link to={`/Books/FormAdd`}>
            <button type="button" className="btn btn-info ms-3">
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

