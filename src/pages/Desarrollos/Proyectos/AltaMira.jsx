// Images
import Render1 from "../../../assets/images/desarrollos/alta_mira/render1.webp";
import Render2 from "../../../assets/images/desarrollos/alta_mira/render2.webp";
import Render3 from "../../../assets/images/desarrollos/alta_mira/render3.webp";
import Render4 from "../../../assets/images/desarrollos/alta_mira/render4.webp";
import Render5 from "../../../assets/images/desarrollos/alta_mira/render5.webp";
import Render6 from "../../../assets/images/desarrollos/alta_mira/render6.webp";
import Render7 from "../../../assets/images/desarrollos/alta_mira/render7.webp";
import Render8 from "../../../assets/images/desarrollos/alta_mira/render8.webp";
import Render9 from "../../../assets/images/desarrollos/alta_mira/render9.webp";

// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AltaMira = () => {
  const ProjectPictures = {
    src: [
      Render1,
      Render2,
      Render3,
      Render4,
      Render5,
      Render6,
      Render7,
      Render8,
      Render9,
    ],
  };

  return (
    <div>
      <h1 className="text-xl text-center font-my-raleway font-bold uppercase pb-2">
        Alta Mira
      </h1>
      <p className="text-sm text-center text-dark-gray pb-8">
        En AltaMira, te espera una experiencia de vida excepcional, donde el
        lujo se encuentra con la comodidad para crear tu refugio perfecto en las
        alturas. Bienvenido al estilo de vida que siempre soñaste.
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

export default AltaMira;
