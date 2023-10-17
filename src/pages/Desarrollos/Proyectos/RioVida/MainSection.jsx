import Render10 from "@assets/images/desarrollos/rio_vida/10.webp";
import Render11 from "@assets/images/desarrollos/rio_vida/11.webp";
import Render12 from "@assets/images/desarrollos/rio_vida/12.webp";
import Render13 from "@assets/images/desarrollos/rio_vida/13.webp";
import Render14 from "@assets/images/desarrollos/rio_vida/14.webp";
import Render2 from "@assets/images/desarrollos/rio_vida/2.webp";
import Render3 from "@assets/images/desarrollos/rio_vida/3.webp";
import Render4 from "@assets/images/desarrollos/rio_vida/4.webp";
import Render5 from "@assets/images/desarrollos/rio_vida/5.webp";
import Render6 from "@assets/images/desarrollos/rio_vida/6.webp";
import Render7 from "@assets/images/desarrollos/rio_vida/7.webp";
import Render8 from "@assets/images/desarrollos/rio_vida/8.webp";
import Render9 from "@assets/images/desarrollos/rio_vida/9.webp";
import BlessLogo from "@assets/images/desarrollos/rio_vida/rio_vida_logo.png";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const MainSection = () => {
  const ProjectPics = {
    src: [
      Render2,
      Render3,
      Render4,
      Render5,
      Render6,
      Render7,
      Render8,
      Render9,
      Render10,
      Render11,
      Render12,
      Render13,
      Render14,
    ],
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModalHandler();
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
    <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <img
        className="w-full max-w-[300px] mx-auto"
        src={BlessLogo}
        alt="Project Logo"
      />
      <p className="w-full max-w-[650px] mx-auto text-sm text-dark-gray pt-4 pb-5 text-center">
        Bless es la esencia del lujo inmobiliario de AltaVida. Ofrecemos
        propiedades exclusivas respaldadas por más de nueve años de experiencia
        y la construcción exitosa de más de 350 casas. En Bless, encontrarás
        elegancia y sofisticación en cada detalle. Explora nuestro sitio web con
        imágenes impresionantes y testimonios de clientes satisfechos que
        respaldan nuestra promesa de excelencia.
      </p>

      <button
        onClick={openModalHandler}
        className="bg-orange hover:bg-[#De7700] mx-auto py-2 px-4 block w-fit transition-all text-white text-sm font-my-raleway font-bold rounded-md"
      >
        Haz click aquí
      </button>

      {modalOpen && (
        <div
          onClick={handleOuterClick}
          className="w-screen h-screen fixed z-50 top-0 left-0 backdrop-blur-lg bg-black bg-opacity-50"
        >
          <div className="w-[90%] max-w-[800px] max-sm:px-2 px-8 py-8 h-fit bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl">
            <Swiper
              loop={true}
              autoHeight={true}
              effect={"coverflow"}
              spaceBetween={50}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 40,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
            >
              {ProjectPics.src.map((project, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="animate-pulse-slow pb-8"
                    src={project}
                    alt={`Project ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-evenly mt-3">
              <a
                className="bg-orange hover:bg-[#De7700] mx-auto py-2 px-4 block w-fit transition-all text-white text-sm font-my-raleway font-bold rounded-md"
                href="https://wa.link/ovut67"
              >
                Contactar
              </a>
              <button
                onClick={closeModalHandler}
                className="hover:bg-orange hover:text-white mx-auto py-2 px-4 block w-fit transition-all text-black text-sm font-my-raleway font-bold rounded-md border-2 border-orange"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
