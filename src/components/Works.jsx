import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectCart = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseHold = (e) => {
    setIsGrabbing(true);
  };
  const handleMouseFree = (e) => {
    setIsGrabbing(false);
  };

  return (
    <div
      onMouseDown={handleMouseHold}
      onMouseUp={handleMouseFree}
      className={`py-10 ml-3 ${
        isGrabbing ? "cursor-grabbing" : "cursor-pointer"
      }`}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full z-10">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 cart-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                className="w-1/2 h-1/2 object-contain"
                alt="github"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In my career journey, I've undertaken a range of projects,
          demonstrating creativity and unwavering dedication. The following
          showcase my commitment to excellence and passion for achieving
          outstanding results.
        </motion.p>
      </div>

      <Carousel
        swipeable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        className="mt-10 flex flex-wrap"
      >
        {projects.map((project, index) => (
          <ProjectCart key={`project-${index}`} index={index} {...project} />
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Works, "");
