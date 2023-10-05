import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIconsVisible(!iconsVisible);

    if (!isOpen) {
      setIconsVisible(true);
    } else {
      setIconsVisible(false);
    }
  };

  const socialIcons = [
    {
      icon: <FaInstagram className="text-3xl text-pink-600" />,
      link: "https://www.instagram.com/snorlex.png/",
    },
    {
      icon: <FaGithub className="text-3xl text-gray-800" />,
      link: "https://github.com/",
    },
    {
      icon: <FaLinkedin className="text-3xl text-blue-800" />,
      link: "https://www.linkedin.com/in/ritoramadhan",
    },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        className={`bg-[#915EFF] text-white rounded-full p-4 shadow-lg focus:outline-none fixed bottom-10 right-10 z-50 transition-transform transform ${
          isOpen ? "rotate-45" : ""
        }`}
        onClick={toggleMenu}
      >
        <FaPlus className="text-2xl" />
      </button>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 bottom-16 space-y-4 bg-transparent rounded-lg p-3 shadow-lg`}
      >
        {iconsVisible &&
          socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center bg-white p-3 -m-3 rounded-full "
            >
              {social.icon}
            </a>
          ))}
      </motion.div>
    </div>
  );
};

export default FloatingMenu;
