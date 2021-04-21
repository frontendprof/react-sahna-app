
import React from "react";
import Footer from "./components/HeaderFooter/Footer";
import Header from "./components/HeaderFooter/Header";
import Featured from "./components/featured"
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import "./resources/styles.css"




const App=() =>{
  return (
    <div>
      
      <Header />

      <>
        <Featured />
      </>

      <>
        <VenueNfo />
      </>

      <>
        <Highlights />
      </>

      <div style={{ backgroundColor:"red",height:"400px" }}></div>
      <div style={{ backgroundColor:"green",height:"400px" }}></div>
      <div style={{ backgroundColor:"orange",height:"400px" }}></div>
      <div style={{ backgroundColor:"purple",height:"400px" }}></div>
      <div style={{ backgroundColor:"grey",height:"400px" }}></div>

      <Footer />
    </div>
  );
}

export default App;
