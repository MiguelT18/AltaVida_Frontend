// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

const AltaMira = () => {
  // const ProjectPictures = {
  //   src: [
  //     ImageSlide1,
  //     ImageSlide2,
  //     ImageSlide3,
  //     ImageSlide4,
  //     ImageSlide5,
  //     ImageSlide6,
  //     ImageSlide7,
  //     ImageSlide8,
  //     ImageSlide9,
  //     ImageSlide10,
  //   ],
  // };

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

      {/*
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
      </Swiper> */}
    </div>
  );
};

export default AltaMira;
