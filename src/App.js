
import React from "react";

import {Element} from "react-scroll";

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

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueinfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>
     
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
