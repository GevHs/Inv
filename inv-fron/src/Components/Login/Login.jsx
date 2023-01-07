import React, { useState , useRef , useEffect } from 'react'
import LoginHeader from '../Header/LoginHeader';


export default function Login() {
    const [user , setUser] = useState({})
    console.log(user)
    const handelCahnge = (e) => {
        const {name , value }= e.target;
        setUser((item) => {
          console.log(item)
          return { ...item, [name]: value };
        });
      };
      
   const handelClickLog = (event) => {
    event.preventDefault()
      localStorage.setItem('user', JSON.stringify(user))
   }   

  return (
    <div className='container'>
    <LoginHeader />
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input onInput={handelCahnge} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input  onInput={handelCahnge}  name='password' type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button onClick={handelClickLog}  type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}
