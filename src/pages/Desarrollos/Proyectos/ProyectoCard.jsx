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
    const body = document.body;

    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <article className="max-w-[300px]">
      <div className="h-full flex flex-col justify-between text-white bg-navy-blue border-orange border-2 px-4 py-6 rounded-xl">
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
        <div
          onClick={handleOuterClick}
          className="w-full h-full backdrop-blur-md bg-opacity-50 bg-black fixed flex inset-0 items-center justify-center z-50"
        >
          <div className="bg-white w-[90%] max-h-[80%] overflow-y-auto px-5 py-6 rounded-2xl shadow-md">
            {project}

            <div className="w-full h-full flex items-center justify-between">
              <button
                className="border-2 border-orange font-my-raleway font-bold py-1 px-3 rounded-md mt-4"
                onClick={closeModal}
              >
                Cerrar
              </button>
              <a
                href="https://wa.link/ovut67"
                className="bg-orange text-white font-my-raleway font-bold py-1 px-3 rounded-md mt-4"
              >
                Contactar
              </a>
            </div>
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
