import interactiveimage from "../images/desktop/image-interactive.jpg"

const About = () => {
    return ( 
        <div className="mt-32 flex justify-center h-screen">
    <div className="h-2/3 mr-64 " >
        <img src={interactiveimage} alt="vr user" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="h-2/3 w-2/4 mr-2 bg-red mt-32  absolute right-0 z-10 bg-white p-20">
        <h1 className="text-5xl mb-4 tracking-widest uppercase" style={{fontFamily: 'Josefin Sans'}}>The leader in <br></br>interactive VR</h1>
        <p className="tracking-wide "> 
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
        </p>
    </div>
</div>

    
     );
}
 
export default About;

      /* The leader in interactive VR

Founded in 2011, Loopstudios has been producing world-class virtual reality 
projects for some of the best companies around the globe. Our award-winning 
creations have transformed businesses through digital experiences that bind 
to their brand. */