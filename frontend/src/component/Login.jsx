import React, { useState } from 'react';
import '../Assets/css/Login.css'; 
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email: "",
    password: ""
  })

  const inputHandle = (e) => {
     setUser({
      ...user,
      [e.target.name] : e.target.value
     })
  }

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login",user)
    .then(res=>{
      alert(res.data.message);
      if(res.data.message==="Login Successfull")
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input onChange={inputHandle} type="email" id="email" className="input-field" name='email' />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input onChange={inputHandle} type="password" id="password" className="input-field" name='password' />
          </div>

          <button onClick={login} type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
