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

  return (
    <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <img className="mx-auto" src={AltaMiraLogo} alt="Project Logo" />
      <p className="text-sm text-dark-gray pt-4 pb-5 text-center">
        En Alta Mira, fusionamos elegancia y comodidad para ofrecerte un estilo
        de vida excepcional. Nuestra amplia gama de propiedades, respaldada por
        la reputación de AltaVida con más de nueve años de experiencia, te
        brinda la libertad de encontrar tu hogar perfecto. Explora nuestro sitio
        web, sumérgete en la belleza de nuestras propiedades y descubre por qué
        Alta Mira es el lugar donde tus sueños de hogar se hacen realidad.
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
        {ProjectPics.src.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-[90%] mx-auto border-2 borde-red-500">
              <img
                className="w-full h-full mb-10"
                src={project}
                alt={`Project ${index}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSection;
