import React from "react";
import { createGlobalStyle } from "styled-components";

//react router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Home from "./pages/Home/Home"
import Certifications from "./pages/Certifications/Certifications"

export default function Portfolio(){

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-color: #121212;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: #181818;
  }
  &::-webkit-scrollbar-button {
    background-color: #5dd3de;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5e0fdb;
  }
  
}
h1, h2, h3, h4, h5, p, button, li{
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}
a{
  text-decoration: none;
  color: #C4C4C4;
  &:hover{
    color: #5dd3de;
  }
}

`

  return(
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/certificacoes" element={<Certifications/>}/>
          <Route path="*" element="not found"/>
        </Routes>
      </Router>
    </>
  )
}