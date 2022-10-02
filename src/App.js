import logo from './logo.svg';
import './App.css';
import Student from './component/Student';
import Dark from './component/dark';
import Text from './component/text';
import Navbar from './component/navbar';
import "./css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";


const Appi=()=>{
 const neww=useRoutes(
  {
    path="/about" element={<Text></Text}
  }
 )
return neww;
}
function App() {

  return (


    <div>

      <Navbar/>
      <Routes>
         <Appi/>
          
          </Route>
          
        </Routes>
      </div>
  
  );
}

export default App;
