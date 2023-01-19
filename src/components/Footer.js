const Footer = () => {
    return (  
        <footer className="bg-black text-white py-6 flex  justify-between " >
          <div className="ml-32">
            <div className="mb-4">
                <a href="#hh"  className="text-lg   font-bold">Loopstudios</a>
            </div>
                <div>
                <a href="#hh"  className="text-sm  py-2 leading-none rounded-full hover:underline">About</a>
                <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Careers</a>
                <a href="#hh" className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Events</a>
                <a href="#hh"  className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Products</a>
                <a href="#hh"  className="text-sm px-4 py-2 leading-none rounded-full hover:underline">Support</a>
            </div>
          </div>
          <div className="mr-32">
            <div className="flex mb-4 ml-32">
                <a href="#" class="mr-4 text-white ">
                  <ion-icon name="logo-facebook" style = {{fontSize: "1.5rem"}}></ion-icon>
                </a>
                <a href="#" class="mr-4 text-white">
                  <ion-icon name="logo-twitter" style = {{fontSize: "1.5rem"}}></ion-icon>
                </a>
                <a href="#" class="mr-4 text-white">
                  <ion-icon name="logo-pinterest" style = {{fontSize: "1.5rem"}}></ion-icon>
                </a>
                <a href="#" class=" text-white">
                  <ion-icon name="logo-instagram" style = {{fontSize: "1.5rem"}}></ion-icon>
                </a>
            </div>
            <div>
                <p > © 2021 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </footer>
    );
}
 
export default Footer;