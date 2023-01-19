import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

import About from '../components/About';

import Products from '../components/Products';
import Footer from '../components/Footer';
function App() {
  return (
    <div className="App ">
     
    <div className="bg-[url('./images/desktop/image-hero.jpg')] h-screen ">
     <div className='ml-32 mr-32'>
     <NavBar />
     </div>
     <Hero />
   </div>
     <About />
     <Products />
     <Footer />
   </div>
  );
}

export default App;
