import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Form from "./Form";

export default function FormAdd() {
  const [addInfo, setInfo] = useState({});

  console.log(addInfo)

  const handelCahnge = (e) => {
    const {name , value }= e.target;
    setInfo((item) => {
      return { ...item, [name]: value };
    });
  };

  const handelSubmit = () => {
      fetch('http://localhost:4444/posts', {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accsessToken')}`
        },
        body: JSON.stringify(addInfo),
        method: 'POST'
      }).then(response => {
        console.log(response)
        if(response.status === 200) {
          return  response.json() 
        }else{
           throw('error')
        }
     })
    .catch((err) => {
      console.log(err , "My error")
     })
     
  };

  return (
    <React.Fragment>
       <Header />
      <Form  value='Books' linkName = 'Books Detalie' />
      <form>
        <div
          className="d-flex flex-wrap p-3 mt-3 raundend  justify-content-center container"
          style={{
            background: "white",
            borderRadius: "16px",
            marginTop: "-5px",
          }}
        >
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              name="title"
              placeholder="title"
              onInput={handelCahnge}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              category
            </label>
            <input
              type="text"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              name="category"
              placeholder="category"
              onInput={handelCahnge}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Autor
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              name="autor"
              placeholder="Autor"
              onInput={handelCahnge}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
               Publisher
            </label>
            <input
              type="text"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              placeholder="Publisher"
              onInput={handelCahnge}
              name="publisher"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Year
            </label>
            <input
              type="text"
              name="year"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              placeholder="Year"
              onInput={handelCahnge}
            />
          </div>
          <div className="mb-3 w-50">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control ms-1"
            id="formGroupExampleInput"
            style={{ width: "99%" }}
            placeholder="Location"
            onInput={handelCahnge}
            name =  'location'
          />
        </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              ISBIN
            </label>
            <input
              type="text"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              name = 'isbin'
              placeholder="ISBIN"
              onInput={handelCahnge}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%" }}
              placeholder="image"
              onInput={handelCahnge}
              name ='image'
            />
          </div>
          
          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%", height: "180px" }}
              placeholder="Example input placeholder"
              onInput={handelCahnge}
              name ='description'
            />
          </div>

          <div className="mb-3 w-50">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Remark
            </label>
            <input
              name ='remark'
              type="text"
              className="form-control ms-1"
              id="formGroupExampleInput"
              style={{ width: "99%", height: "180px" }}
              placeholder="Example input placeholder"
              onInput={handelCahnge}
            />
          </div>
          <div className="d-flex justify-content-between col-12 ">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handelSubmit}
            >
              Save
            </button>
            <button
            type="button"
            className="btn btn-danger"
            onClick={handelSubmit}
          >
          delete
          </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
