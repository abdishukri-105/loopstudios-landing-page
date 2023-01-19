
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import curiosityImg from "../images/desktop/image-curiosity.jpg";
import fishEyeImg from "../images/desktop/image-fisheye.jpg";
import gridimg from "../images/desktop/image-grid.jpg";
import soccerimg from "../images/desktop/image-soccer-team.jpg";
const Products = () => {
    return ( 
        <div className=" mr-32 ml-32 h-screen">
            <div className="flex flex-row  justify-between">
                <p className="text-5xl uppercase tracking-wider">our creations</p>
                <button className="bg-white text-black px-7  border border-black  hover:bg-black hover:text-white"> <p>SEE ALL</p> </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-14">
               <div className=" ">
                      <img src={deepEarth} alt="deep earth" />
                </div>
               <div className="bg-red">
               <img src={deepEarth} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={soccerimg} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={deepEarth} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={gridimg} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={deepEarth} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={curiosityImg} alt="deep earth" />
               </div>
               <div className="bg-red">
               <img src={fishEyeImg} alt="deep earth" />
               </div>
            </div>
            
        </div>
     );
}
 
export default Products;