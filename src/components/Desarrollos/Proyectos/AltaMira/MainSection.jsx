import AltaMiraLogo from "@assets/images/desarrollos/alta_mira/alta_mira_logo.png";
import Render1 from "@assets/images/desarrollos/alta_mira/render1.webp";
import Render2 from "@assets/images/desarrollos/alta_mira/render2.webp";
import Render3 from "@assets/images/desarrollos/alta_mira/render3.webp";
import Render4 from "@assets/images/desarrollos/alta_mira/render4.webp";
import Render5 from "@assets/images/desarrollos/alta_mira/render5.webp";
import Render6 from "@assets/images/desarrollos/alta_mira/render6.webp";
import Render7 from "@assets/images/desarrollos/alta_mira/render7.webp";
import Render9 from "@assets/images/desarrollos/alta_mira/render9.webp";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const MainSection = () => {
  const ProjectPics = {
    src: [
      Render1,
      Render2,
      Render3,
      Render4,
      Render5,
      Render6,
      Render7,
      Render9,
    ],
  };

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <img
        className="w-[200px] mx-auto"
        src={AltaMiraLogo}
        alt="Project Logo"
      />
      <p className="w-full max-w-[650px] mx-auto text-sm text-dark-gray pt-4 pb-5 text-center">
        En Alta Mira, fusionamos elegancia y comodidad para ofrecerte un estilo
        de vida excepcional. Nuestra amplia gama de propiedades, respaldada por
        la reputación de AltaVida con más de nueve años de experiencia, te
        brinda la libertad de encontrar tu hogar perfecto. Sumérgete en la
        belleza de nuestras propiedades y descubre por qué Alta Mira es el lugar
        donde tus sueños de hogar se hacen realidad.
      </p>

      <button
        onClick={openModalHandler}
        className="bg-orange hover:bg-[#De7700] mx-auto py-2 px-4 block w-fit transition-all text-white text-sm font-my-raleway font-bold rounded-md"
      >
        Haz click aquí
      </button>

      {openModal && (
        <div
          onClick={closeModalHandler}
          className="w-screen h-screen fixed z-50 top-0 left-0 backdrop-blur-lg bg-black bg-opacity-50"
        >
          <div className="w-[90%] max-w-[800px] px-2 h-fit bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl">
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
                    className="animate-pulse-slow"
                    src={project}
                    alt={`Project ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-evenly mb-8">
              <a
                className="bg-orange hover:bg-[#De7700] mx-auto py-2 px-4 block w-fit transition-all text-white text-sm font-my-raleway font-bold rounded-md"
                href="https://wa.link/ovut67"
              >
                Contactar
              </a>
              <button className="hover:bg-orange mx-auto py-2 px-4 block w-fit transition-all text-black text-sm font-my-raleway font-bold rounded-md border-2 border-orange">
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
