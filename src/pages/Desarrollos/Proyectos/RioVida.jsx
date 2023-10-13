import RioVida1 from "@assets/images/desarrollos/rio_vida/1.webp";
import RioVida2 from "@assets/images/desarrollos/rio_vida/2.webp";
import RioVida3 from "@assets/images/desarrollos/rio_vida/3.webp";
import RioVida4 from "@assets/images/desarrollos/rio_vida/4.webp";
import RioVida5 from "@assets/images/desarrollos/rio_vida/5.webp";
// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RioVida = () => {
  const ProjectPictures = {
    src: [RioVida1, RioVida2, RioVida3, RioVida4, RioVida5],
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-my-raleway font-bold uppercase pb-2">
        Río Vida
      </h1>
      <p className="text-sm text-dark-gray pb-8">
        Sumérgete en Río Vida, donde la naturaleza se funde con la comodidad
        para ofrecerte un hogar único. Descubre el encanto de vivir en armonía
        con un entorno natural de ensueño. Bienvenido a tu refugio en la belleza
        de la vida.
      </p>
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        centeredSlides={true}
        pagination={true}
        grabCursor={true}
        modules={[Pagination, EffectCoverflow]}
      >
        {ProjectPictures.src.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full max-w-[800px] mx-auto mb-10"
              src={image}
              alt={`Team picture ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RioVida;
