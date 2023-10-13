import ImageSlide1 from "../../../assets/images/desarrollos/bless/1.webp";
import ImageSlide10 from "../../../assets/images/desarrollos/bless/10.webp";
import ImageSlide2 from "../../../assets/images/desarrollos/bless/2.webp";
import ImageSlide3 from "../../../assets/images/desarrollos/bless/3.webp";
import ImageSlide4 from "../../../assets/images/desarrollos/bless/4.webp";
import ImageSlide5 from "../../../assets/images/desarrollos/bless/5.webp";
import ImageSlide6 from "../../../assets/images/desarrollos/bless/6.webp";
import ImageSlide7 from "../../../assets/images/desarrollos/bless/7.webp";
import ImageSlide8 from "../../../assets/images/desarrollos/bless/8.webp";
import ImageSlide9 from "../../../assets/images/desarrollos/bless/9.webp";
// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Bless = () => {
  const ProjectPictures = {
    src: [
      ImageSlide1,
      ImageSlide2,
      ImageSlide3,
      ImageSlide4,
      ImageSlide5,
      ImageSlide6,
      ImageSlide7,
      ImageSlide8,
      ImageSlide9,
      ImageSlide10,
    ],
  };

  return (
    <article>
      <h2 className="text-xl font-bold uppercase text-center pb-2">Bless</h2>
      <p className="text-sm text-center text-dark-gray pb-8">
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
    </article>
  );
};

export default Bless;
