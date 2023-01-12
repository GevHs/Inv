import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../Api/axios";
import './Register.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = './register'

export default function Register() {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [addInfo, setInfo] = useState();
 
  console.log(addInfo)

  const handelCahnge = (e) => {
    const {name , value }= e.target;
    setInfo((item) => {
      return { ...item, [name]: value };
    });
  };



  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try{
      fetch('http://localhost:4444/registr', {
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(addInfo),
        method: 'POST'
      }).then((data) =>console.log(data))
      setSuccess(true)
      // clear input fields
    }catch(err){
      if(!err?.response){
         setErrMsg('No Server Response')
      }else if(err.response?.status === 409){
         setErrMsg('Username Taken') 
      }else{
         setErrMsg('Registration Failed')
      }
      errRef.current.focus()
    }
  };

  return (
    <>
      
      {success ? (
        <section>
           <h1>success!</h1>
           <p> <a href='#'>Sigin In</a> </p>
        </section>
      ) : (
        <section className="container register-block">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handelSubmit}>
            <label htmlFor="userName">Username:</label>
            <span className={validName ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <input
              type={"email"}
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              onInput={handelCahnge}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="form-control input_register"
              name="email"
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters,numbers , underscore , hyphens allowed
            </p>
            <br />

            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input
              type={"password"}
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="form-control input_register"
              onInput={handelCahnge}
              name="password"

            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />  <br />
              8 to 24 characters <br />
               must include uppercase and lowercase Letters, a number and a
              special characters <br />
              Allowed special characters :{" "}
              <span aria-label="exclamention mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="parcent">%</span>
            </p>
            <br />

            <label htmlFor="password">
              Confirm Password:
              <span className={validMatch && !matchPwd ? "valid" : "hide"}>
                
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type={"password"}
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="form-control input_register"
              name="passwordTWo"

            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field
            </p>
            <br />
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
              onClick={handelSubmit}
            >
              Sign Up
            </button>

            <p>
              <span style={{marginTop:'40px'}}> Already Registered ?</span> <br />
              <span className="line mb-5">
                <a href="#">Sigin in</a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
}
