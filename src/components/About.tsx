import aboutImg from "../assets/images/about.png";
import { FiDownload } from "react-icons/fi";

const About = () => {
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">About</h3>
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="w-11/12 mx-auto leading-7 text-justify">
                Hi I am Divyata Borse, Computer Engineer graduated from MVPs KBT
                college of Engineering, Nashik. I am currently pursuing the Post Graduate Diploma in Advanced Computing (PG-DAC) at the Centre for Development of Advanced Computing (CDAC). 
              </p>

              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">
                  <FiDownload /> Resume
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 mt-6 md:mt-0">
            <div className="relative w-11/12 h-full max-w-sm lg:w-96 sm:w-10/12 aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="object-cover w-full bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
