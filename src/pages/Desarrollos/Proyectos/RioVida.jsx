import RioVida1 from "@assets/images/desarrollos/RIOVIDA/RioVida1.webp";
import RioVida2 from "@assets/images/desarrollos/RIOVIDA/RioVida2.webp";
import RioVida3 from "@assets/images/desarrollos/RIOVIDA/RioVida3.webp";
import RioVida4 from "@assets/images/desarrollos/RIOVIDA/RioVida4.webp";
import RioVida5 from "@assets/images/desarrollos/RIOVIDA/RioVida5.webp";
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
      <h1 className="text-xl font-my-raleway font-bold uppercase">Río Vida</h1>
      <p className="text-sm text-dark-gray pb-8">
        Naturaleza y comodidad en un hogar perfecto respaldado por años de
        experiencia en alta calidad. Tu refugio, un nuevo comienzo.
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
