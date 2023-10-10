import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

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
        <div className="w-full h-full backdrop-blur-md bg-opacity-50 bg-black fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[80%] max-h-[80%] overflow-y-auto p-5 rounded-2xl shadow-md">
            {project}
            <div className="fixed top-2 right-10">
              <button
                className=" text-white font-my-raleway font-bold py-1 rounded-full mt-4"
                onClick={closeModal}
              >
                <AiFillCloseCircle
                  className="text-orange transition-all"
                  size={"3em"}
                />
              </button>
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
