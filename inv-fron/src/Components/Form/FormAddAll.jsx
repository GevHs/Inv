import React , {useState}from "react";
import Header from "../Header/Header";
import Form from "./Form";
export default function FormAddAll(props) {
  const [addInfoTwo, setInfoTwo] = useState({});

  const handelCahnge = (e) => {
    const {name , value }= e.target;
    setInfoTwo((item) => {
      console.log(item)
      return { ...item, [name]: value };
    });
  };
  
  const handelSubmit = () => {
      fetch(`http://localhost:5000/item/${props.name}`, {
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(addInfoTwo),
        method: 'POST'
      }).then((data) =>console.log(data))
  };
  return (
    <div className="container">
      <Header />
      <Form value='Books' linkName = 'Books Detalie'/>
      <div className="row mt-3">
        <div className="col">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onInput={handelCahnge}

          />
        </div>
        <div className="col">
          <input
            name="category"
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onInput={handelCahnge}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <input
            name="image"
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onInput={handelCahnge}

          />
        </div>
        <div className="col">
          <input
            name="amount"
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onInput={handelCahnge}
          />
        </div>
        <div className="col mb-3">
          <input
            name="unite_price"
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onInput={handelCahnge}

          />
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-6">
          <input
            name="donate"
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onInput={handelCahnge}

          />
        </div>
        <div className="col mb-3">
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onInput={handelCahnge}

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
            name="description"
            onInput={handelCahnge}

          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Addres 2
          </label>
          <input
            type="text"
            className="form-control ms-1"
            id="formGroupExampleInput"
            style={{ width: "99%", height: "180px" }}
            placeholder="Example input placeholder"
            name="address "
            onInput={handelCahnge}

          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button onClick={handelSubmit} type="button" className="btn btn-primary ms-2">
          Save
        </button>
        <button type="submit" className="btn btn-danger">
          delete
        </button>
      </div>
    </div>
  );
}
