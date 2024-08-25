import hero from "../assets/images/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const social_media = [
    <FaGithub className="text-white" />,
    <FaLinkedin className="text-[#0A66C2]" />,
  ];
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-screen py-10 md:flex-row"
    >
      <div className="relative flex items-center justify-center flex-1 h-full">
        <img
          src={hero}
          alt=""
          className="relative z-10 object-cover px-4 scale-75 bg-transparent"
        ></img>
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-600 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is <span>Divyata Borse</span>
          </h1>
          <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            Computer Engineer
          </h4>
          <Link to={"/resume"}>
            <button className="mt-8 btn-primary">Resume</button>
          </Link>
          <div className="flex items-center justify-center gap-5 mt-8 text-3xl md:justify-start">
            {social_media?.map((icon) => (
              <div
                key={String(icon)}
                className="text-gray-600 cursor-pointer hover:text-white "
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
