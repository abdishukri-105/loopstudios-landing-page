
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import curiosityImg from "../images/desktop/image-curiosity.jpg";
import fishEyeImg from "../images/desktop/image-fisheye.jpg";
import gridimg from "../images/desktop/image-grid.jpg";
import soccerimg from "../images/desktop/image-soccer-team.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import pocketimg from "../images/desktop/image-pocket-borealis.jpg";
import fromAbvImg from "../images/desktop/image-from-above.jpg";
const Products = () => {
    return ( 
        <div className=" mr-32 ml-32 mb-56  ">
            <div className="flex flex-row  justify-between">
                <p className="text-5xl uppercase tracking-wider">our creations</p>
                <button className="bg-white text-black px-7  border border-black  hover:bg-black hover:text-white"> <p>SEE ALL</p> </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-14">
               <div className="relative rounded-lg hover:opacity-75 cursor-pointer ">
                  <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">DEEP <br /> EARTH</p>
                  <img src={deepEarth} alt="deep earth" />
                </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">NIGHT<br /> ARCADE</p>
                 <img src={nightArcade} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">SOCCER <br /> TEAM VR</p>
                 <img src={soccerimg} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">THE<br /> GRID</p>
                 <img src={gridimg} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">FROM UP <br /> ABOVE VR</p>
                 <img src={fromAbvImg} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">POCKET <br /> BOREALIS</p>
                 <img src={pocketimg} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">THE <br /> CURIOSITY</p>
                 <img src={curiosityImg} alt="deep earth" />
               </div>

               <div className="relative rounded-lg hover:opacity-75 cursor-pointer">
                 <p className=" text-3xl z-10 absolute mt-80 ml-9 text-white">MAKE IT<br /> FISHEYE</p>
                 <img src={fishEyeImg} alt="deep earth" />
               </div>
            </div>
            
        </div>
     );
}
 
export default Products;