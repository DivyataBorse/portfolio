import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Smart Fish Aquarium",
      description:
        "aquarium monitoring system than can send data the users through application, can feed fishes automatically & make convenient users to maintain aquarium.",
      github_link: "https://github.com/DivyataBorse/Smart-fish-aquarium",
    },
    {
      img: project2,
      name: "Network traffic anomaly detection",
      description:
        "A system for detecting anomalies in network traffic using machine learning techniques. Used multiple machine learning algorithms for evaluation",
      github_link:
        "https://github.com/DivyataBorse/Network-Traffic-Anomaly-Detection-using-Machine-Learning",
    },
    {
      img: project3,
      name: "Blood bank management system",
      description:
        "A web based blood bank management system which can be use as a solution over traditional blood bank management system",
      github_link:
        "https://github.com/DivyataBorse/Blood-bank-management-system",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
  speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // screen width below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // screen width below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="relative flex items-center max-w-6xl gap-6 px-5 mx-auto">
        <div className="w-full gap-2">
          <Slider {...settings} className="gap-2">
            {projects.map((project) => {
              return (
                <div className="p-3 h-fit bg-slate-700 rounded-xl">
                  <img
                    src={project.img}
                    alt=""
                    className="rounded-lg h-[200px]"
                  />
                  <div className="min-h-[170px]">
                    <h3 className="my-4 text-xl">{project.name}</h3>
                    <p className="">{project.description}</p>
                    <div className="flex justify-end gap-3 ">
                      <a
                        href={project.github_link}
                        target="_blank"
                        className="inline-block px-2 py-1 text-white"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
