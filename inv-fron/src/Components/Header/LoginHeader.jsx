import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginHeader() {
  return (
    <header className="container bg-light p-3 mb-5">
    <div className="d-flex col-10">
      <div className="d-flex  col-8">
        <div className="me-5">
          <h2 className="headerTitle text-black">Inventory</h2>
        </div>
      </div>
      <div className="header_serach col-3  col-4">
      <Link to='/Register'>
        <button type="button" className="btn btn-success ms-3 ">
          Register
        </button>
      </Link>
      </div>
    </div>
    </header>
  )
}
