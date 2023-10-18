import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillEye } from "react-icons/ai";

const CardBlog = ({ image, title, description, views, blogContent }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
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
    <article className="max-w-[380px] bg-gradient-to-t from-slate-900 to-navy-blue text-white border-2 border-orange rounded-2xl">
      <div>
        <img className="w-full rounded-t-2xl" src={image} alt="Blog post" />
        <div className="p-5 flex flex-col items-end justify-between gap-2">
          <h1 className="text-md font-my-raleway font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <div className="text-sm flex items-center w-full justify-between gap-2 pt-5">
            <button
              onClick={openModal}
              className="bg-orange hover:bg-[#De7700] py-2 px-4 block w-fit transition-all text-white font-my-raleway font-bold rounded-md"
            >
              Ver noticia
            </button>
            <span className="flex items-center gap-2">
              <AiFillEye stroke="#fff" size={"1em"} />
              {views}
            </span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={handleOuterClick}
          className="w-full h-full backdrop-blur-md bg-opacity-50 bg-black fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white max-w-[90%] sm:max-w-[70%] max-h-[80%] overflow-y-auto py-6 px-1 rounded-2xl shadow-md relative">
            <div className="max-md:max-w-[90%] max-w-[80%] mx-auto">
              {blogContent}
            </div>

            <div className="fixed top-4 right-6">
              <button
                className=" text-white font-my-raleway font-bold py-1 rounded-full mt-4 animate-bounce-slow"
                onClick={closeModal}
              >
                <AiFillCloseCircle
                  className="animate__animated animate__heartBeat text-orange bg-dark-gray transition-all rounded-full"
                  size={"3em"}
                />
              </button>
              <div
                className="absolute block w-full h-2 -z-50 rounded-full -mt-7"
                style={{
                  boxShadow: "0 20px 15px rgba(0, 0, 0, .5)",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

CardBlog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  views: PropTypes.string,
  image: PropTypes.any,
  blogContent: PropTypes.node,
};

export default CardBlog;
