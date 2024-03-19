import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import ContactUs from './components/ContactUs';
import About from './components/About';
import PastPartners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <PastPartners/>
      <Cards/>
      <ContactUs/>
    </div>
  );
}

export default App;
