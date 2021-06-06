import React from 'react';
import './resources/style.css'
import {Element} from 'react-scroll'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import Featured from './components/featured'
import VenueNFO from './components/venueNFO'
import HighLights from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
function App() {
  return (
    <div className="App">
      <Header/>
      <Element name="featured">
        <Featured/>
      </Element>   
      <Element name="venuenfo">
        <VenueNFO/>
      </Element>
      <Element name="hightlights">
        <HighLights/>
      </Element>
      <Element name="pricing">
        <Pricing/>
      </Element>
      <Element name="location">
        <Location/>
      </Element>
      <>
        <Footer/>
      </>
    </div>
  );  
}

export default App;
