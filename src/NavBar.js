const NavBar = () => {
    return ( 
        <nav className="bg-transparent text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-lg  font-bold">Loopstudios</a>
          <div>
            <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-red-800">About</a>
            <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-red-800">Careers</a>
            <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-red-800">Events</a>
            <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-red-800">Products</a>
            <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-red-800">Support</a>
          </div>
        </div>
      </nav>
     );
}


export default NavBar;