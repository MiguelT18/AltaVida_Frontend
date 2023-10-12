// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Bless = () => {
  const ProjectPictures = {
    src: [],
  };

  return (
    <div>
      <h2 className="text-xl font-bold uppercase text-center pb-1">Bless</h2>
      <p className="text-sm text-dark-gray pb-8">
        Adéntrate en Bless, donde la elegancia y el confort se entrelazan para
        darte la bienvenida a tu nuevo hogar. Descubre la sofisticación de vivir
        en un espacio que combina estilo y comodidad. Bienvenido a un lugar
        donde cada día es una bendición de confort y elegancia.
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

export default Bless;
