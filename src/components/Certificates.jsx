import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";
import { Tilt } from "react-tilt";
import { useState, useEffect } from "react";

const CertificateCard = ({
  index,
  name,
  image,
  company,
  companyImage,
  color,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="cursor-pointer"
    >
      <Tilt
        className="bg-black-200 p-3 rounded-3xl xs:w-[320px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="mt-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="mt-6 mb-2 flex justify-between items-center gap-1 px-2">
            <div className="flex flex-1 flex-col">
              <p className="text-white font-medium text-[16px]">{name}</p>
              <p className="mt-1 text-secondary text-[12px]">
                <span className={color}>@ </span>
                {company}
              </p>
            </div>
            <img
              src={companyImage}
              alt={`feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  } else {
    return (
      <AnimatePresence>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-lg relative w-1/2"
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-2 z-10 bg-pink-600 text-white px-2 py-2 rounded-full hover:bg-pink-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={image} alt="certificate" className="" />
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }
};

const Certificate = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const toggleClose = () => {
    setModalImage(null);
    setIsOpen(false);
  };

  return (
    <div className="mt-10 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what I have achieved</p>
          <h2 className={styles.sectionHeadText}>Certificate.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <div onClick={() => toggleModal(certificate.image)} key={index}>
            <CertificateCard
              key={certificate.name}
              index={index}
              {...certificate}
              onClick={() => click}
            />
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={toggleClose} image={modalImage} />
    </div>
  );
};

export default SectionWrapper(Certificate);
