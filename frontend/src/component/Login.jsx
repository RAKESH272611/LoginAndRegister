import React from 'react';
import '../Assets/css/Login.css'; 
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="input-field" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="input-field" />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
