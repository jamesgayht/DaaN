import { projects } from "../constants";
import { githubIcon, startup } from "../assets";
import styles from "../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const ProjectCard = ({
    index,
    title,
    description,
    techstack,
    github,
    deployment,
    image,
  }) => {
    return (
      <div className="bg-black-gradient p-5 rounded-2xl sm:w-[380px] w-full sm:h-[420px] m-auto">
        {/* project card image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">


            {/* project card deployment url icon if needed */}
            {deployment ? (
              <div
                onClick={() => window.open(deployment, "_blank")}
                className="bg-blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 z-[2]"
              >
                <img
                  src={startup}
                  alt="deployment"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ) : null}
                        {/* project card github icon */}
            <div
              onClick={() => window.open(github, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* name and description of project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* tech stacks used for projects */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techstack.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    );
  };

  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full m-auto">
      {/* container for project cards */}
      <h2 className={`${styles.heading2}`}>Projects that we have completed</h2>

      <div className="w-3/4 mt-[30px] mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
