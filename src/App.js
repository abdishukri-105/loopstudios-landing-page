
import './App.css';
import NavBar from './NavBar';
// import HeroImage from "../images/desktop/image-hero.jpg"
import Hero from './Hero';
function App() {
  return (

    <div className="App ">
     
     <div className="bg-[url('../images/desktop/image-hero.jpg')] h-screen ">
      <div className='ml-14 mr-14'>
      <NavBar />
      </div>
      <Hero />
    </div>

    </div>
  );
}

export default App;
