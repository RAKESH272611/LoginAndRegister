import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../src/component/Home'
import Register from '../src/component/Register'
import Login from '../src/component/Login'


function App() {
  return (  
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
