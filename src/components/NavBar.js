import React from "react";


const NavBar = () => {
    return ( 
        <nav className="bg-transparent text-white p-4">
        <div className="container mx-auto flex items-center justify-between mt-4">
          <a href="#hh"  className="text-lg  font-bold">Loopstudios</a>
          <div>
            <a href="#hh"  className="text-sm px-4 py-2 leading-none rounded-full">About</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full">Careers</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full">Events</a>
            <a href="#hh"  className="text-sm px-4 py-2 leading-none rounded-full">Products</a>
            <a href="#hh"  className="text-sm px-4 py-2 leading-none rounded-full">Support</a>
          </div>
        </div>
      </nav>
     );
}



export default NavBar;