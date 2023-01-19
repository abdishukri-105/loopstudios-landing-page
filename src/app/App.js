import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

import About from '../components/About';
// import Careers from '../components/Careers';
// import Events from '../components/Events';
// import Products from '../components/Products';
// import Support from '../components/Support';

function App() {
  return (
    <div className="App ">
     
    <div className="bg-[url('../images/desktop/image-hero.jpg')] h-screen ">
     <div className='ml-32 mr-32'>
     <NavBar />
     </div>
     <Hero />
   </div>
   <div><About /></div>
   </div>
  );
}

export default App;
