import AltaMiraImg from "@assets/images/desarrollos/ALTAMIRA.webp";
import BlessImg from "@assets/images/desarrollos/BLESS.webp";
import RioVidaImg from "@assets/images/desarrollos/RIOVIDA.webp";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import "./proyectosSlider.css";

const Proyectos = () => {
  const Projects = {
    src: [AltaMiraImg, BlessImg, RioVidaImg],
    routes: [
      "/desarrollos/altamira",
      "/desarrollos/bless",
      "/desarrollos/riovida",
    ],
  };

  return (
    <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 pt-5 shadow-lg shadow-gray-500">
      <div>
        <p className="text-sm px-5">
          Descubre la excelencia de AltaVida en proyectos que abarcan desde lujo
          con <strong>Bless</strong> hasta versatilidad con
          <strong> Río Vida</strong> y confiabilidad con
          <strong>Altamira</strong>. Nuestra experiencia de nueve años, más de
          350 casas construidas y servicios de intermediación financiera nos
          distinguen. Explora nuestras opciones con un compromiso inquebrantable
          con la excelencia, versatilidad e integridad.
        </p>

        <Swiper
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
          {Projects.src.map((project, index) => (
            <SwiperSlide key={index}>
              <Link to={Projects.routes[index]}>
                <img
                  className="w-[80%] sm:w-full mx-auto shadow-lg shadow-black"
                  src={project}
                  alt={`Project ${index}`}
                />
                <span className="bg-orange hover:bg-[#De7700] mx-auto mt-6 py-2 px-4 block w-fit transition-all text-white font-my-raleway font-bold rounded-md">
                  Ver Proyecto
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Proyectos;
