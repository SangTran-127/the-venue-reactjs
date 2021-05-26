import React from 'react';
import './resources/style.css'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import Featured from './components/featured'
import VenueNFO from './components/venueNFO'
function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>   
      <>
        <VenueNFO />
      </>
      <div style = {{
        background: "red",
        height: "800px"
      }}></div>
      <div style = {{
        background: "blue",
        height: "800px"
      }}></div>
      <div style = {{
        background: "green",
        height: "800px"
      }}></div>
      <Footer />
    </div>
  );  
}

export default App;
