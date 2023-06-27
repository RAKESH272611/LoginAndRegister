import React, { useState } from 'react'
import '../Assets/css/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

      const navigate = useNavigate();

    const [user,setUser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const inputHandle = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const register = (e) => {
      e.preventDefault();
      const {userName,email,password,confirmPassword} = user;
      if(email && userName && password && (confirmPassword===password)){
         axios.post("http://localhost:5000/register",user).
         then(res=>{
           alert(res.data.message);
           navigate("/");
         }).catch(err=>{
           console.log(err);
         })
      }
      else{
        alert("Invalid Input");
      }
    }

    return (
      <div className="register-container">
        <div className="register-content">
          <h3>Create an Account</h3>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input onChange={inputHandle} type="text" id="username" className="input-field" name='userName'/>
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input onChange={inputHandle} type="email" id="email" className="input-field" name='email' />
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input onChange={inputHandle} type="password" id="password" className="input-field" name='password' />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input onChange={inputHandle} type="password" id="confirm-password" className="input-field" name='confirmPassword' />
            </div>
  
            <button onClick={register} type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;