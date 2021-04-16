
import React from "react";
import Header from "./components/HeaderFooter/Header";
import "./resources/styles.css"




const App=() =>{
  return (
    <div>
      
      <Header />

      <div style={{ backgroundColor:"red",height:"400px" }}></div>
      <div style={{ backgroundColor:"green",height:"400px" }}></div>
      <div style={{ backgroundColor:"orange",height:"400px" }}></div>
      <div style={{ backgroundColor:"purple",height:"400px" }}></div>
      <div style={{ backgroundColor:"grey",height:"400px" }}></div>
    </div>
  );
}

export default App;
