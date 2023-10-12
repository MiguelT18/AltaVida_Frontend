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
      setModalOpen(false);
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
    <article className="max-w-[380px] bg-navy-blue text-white border-2 border-orange rounded-2xl">
      <div>
        <img className="w-full rounded-t-2xl" src={image} alt="Blog post" />
        <div className="p-5 flex flex-col items-end justify-between gap-2">
          <h1 className="text-lg font-my-raleway font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <div className="text-sm flex items-center w-full justify-between gap-2 pt-3">
            <button
              onClick={openModal}
              className="bg-orange hover:bg-[#De7700] block w-fit transition-all text-white font-my-raleway font-bold px-4 py-1 rounded-md"
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
          <div className="bg-white w-[90%] max-w-[1080px] max-h-[80%] overflow-y-auto py-6 px-1  rounded-2xl shadow-md">
            <div className="max-md:max-w-[90%] max-w-[60%] mx-auto">
              {blogContent}
            </div>
            <div className="fixed top-0 right-3 lg:right-12 lg:top-2">
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

CardBlog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  views: PropTypes.string,
  image: PropTypes.any,
  blogContent: PropTypes.node,
};

export default CardBlog;
