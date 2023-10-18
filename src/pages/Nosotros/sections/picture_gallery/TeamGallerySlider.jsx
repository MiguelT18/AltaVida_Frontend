import TeamPicture1 from "@assets/images/home/team/01_team_picture.webp";
import TeamPicture2 from "@assets/images/home/team/02_team_picture.webp";
import TeamPicture3 from "@assets/images/home/team/03_team_picture.webp";
import TeamPicture4 from "@assets/images/home/team/04_team_picture.webp";
import TeamPicture5 from "@assets/images/home/team/05_team_picture.webp";

// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamGallerySlider = () => {
  const TeamPictures = {
    src: [TeamPicture1, TeamPicture2, TeamPicture3, TeamPicture4, TeamPicture5],
  };

  return (
    <Swiper
      autoHeight={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
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
      modules={[Pagination, EffectCoverflow, Autoplay]}
    >
      {TeamPictures.src.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full sm:max-w-[70%] mx-auto px-4"
            src={image}
            alt={`Team picture ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamGallerySlider;
