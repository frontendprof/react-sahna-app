
import React from "react";
import Footer from "./components/HeaderFooter/Footer";
import Header from "./components/HeaderFooter/Header";
import Featured from "./components/featured"
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

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

      <>
        <Pricing />
      </>
     
      <>
        <Location />
      </>

      <Footer />
    </div>
  );
}

export default App;
