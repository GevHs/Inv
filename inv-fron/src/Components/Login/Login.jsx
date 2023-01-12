import React, { useState, useRef, useEffect , useContext } from 'react'
import LoginHeader from '../Header/LoginHeader';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvaider/AuthProvider';
import axios from '../../Api/axios';
import Header from '../Header/Header';
import Home from '../Home/Home';

const LOGIN_URL = '/auth/login'

export default function Login() {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef(null)
  const errRef = useRef(null)


  const [headerVal , setheaderVal] = useState(true)
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('hello')
  const [success, setSuccess] = useState(false)


 
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
     setErrMsg('')
  }, [user , pwd])


 
  
 const handelSubmit = async (e) => {
    e.preventDefault()
    try{
      fetch('http://localhost:4444/auth/login', {
        headers: {'Content-Type':'application/json'},
        withCredentials: true ,
        body: JSON.stringify({email: user , password: pwd}),
        method: 'POST'
      }).then(response =>response.json())
      .then(result => {
         localStorage.setItem('accsessToken' ,  result.token)
         setAuth({fullName : result.fullName , email: result.email})
      })
      
      setUser('')
      setPwd('')
      setSuccess(true)
      setheaderVal(false)
    }catch(err){
          if(!err?.response){
             setErrMsg('No Server Response')
          }else if(err.response?.status === 409){
            setErrMsg('Username Taken') 
         }else{
            setErrMsg('Registration Failed')
         }
    }
  
 }

  return (
  
    <div className='container'>
       {
         headerVal ?  <LoginHeader /> : ''
       }
     
      { success ? (<section>
         <Home />
      </section>) : (
       <section>
         <p ref={errRef} className= {errMsg ? "errmsg" : "offsreen"} 
         aria-live="assertive">{errMsg}</p>
         <form onSubmit={handelSubmit}>
           <div className="mb-3">
             <label htmlFor="username" className="form-label">Email address</label>
             <input name='text' type="email" 
              className="form-control" 
              id="username"
              ref={userRef}
              autoComplete = "off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-describedby="emailHelp" />
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>
   
           <div className="mb-3">
             <label htmlFor="password" className="form-label">Password</label>
             <input  name='password' type="password" 
             className="form-control" 
              id="password"
              autoComplete = "off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
             />
           </div>
           <button  type="submit" className="btn btn-primary">Sigin In</button>
           <span className='line'>
             Need an Account? <br />
             <a href="#">Sigin Up</a>
           </span>
         </form>
         </section> 
      ) }
    </div>


 )
}


  // const navigate = useNavigate()
  // const [user, setUser] = useState({})
  // console.log(user)
  // const handelCahnge = (e) => {
  //   const { name, value } = e.target;
  //   setUser((item) => {
  //     return { ...item, [name]: value };
  //   });
  // }; 
  // const handelClickLog = async (event) => {
  //   event.preventDefault()
  //   localStorage.setItem('user', JSON.stringify(user))
  //   fetch('http://localhost:4444/auth/login', {
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(user),
  //     method: 'POST'
  //   })
  //   .then(response =>response.json())
  //   .then(result => {
  //      navigate('/Books')
  //   })
  // }