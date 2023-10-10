import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProyectoCard = ({ project, title, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <article className="max-w-[300px]">
      <div className="flex flex-col justify-center text-white bg-navy-blue border-orange border-2 px-4 py-6 rounded-xl">
        <h1 className="text-lg font-bold font-my-raleway pb-2">{title}</h1>
        <p className="text-sm pb-5">{description}</p>
        <button
          onClick={openModal}
          className="bg-orange hover:bg-[#De7700] w-fit mx-auto transition-all text-white font-my-raleway font-bold px-4 py-1 rounded-md"
        >
          Ver proyectos
        </button>
      </div>

      {modalOpen && (
        <div className="w-full h-screen backdrop-blur-md bg-opacity-50 bg-black fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[80%] p-4 rounded-md shadow-md">
            {project}
            <button
              className="bg-orange hover:bg-[#De7700] transition-all text-white font-my-raleway font-bold px-4 py-1 rounded-md mt-4"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

ProyectoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  project: PropTypes.any,
};

export default ProyectoCard;
