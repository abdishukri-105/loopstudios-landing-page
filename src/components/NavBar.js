import React from "react";


const NavBar = () => {
    return ( 
        <nav className="bg-transparent text-white p-4">
        <div className="container mx-auto flex items-center justify-between mt-4">
          <a href="#hh"  className=" text-2xl font-bold">Loopstudios</a>
          <div>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">About</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Careers</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Events</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Products</a>
            <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Support</a>
          </div>
        </div>
      </nav>
     );
}



export default NavBar;