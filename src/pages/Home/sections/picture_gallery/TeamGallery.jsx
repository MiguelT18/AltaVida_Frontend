import TeamPicture1 from "@assets/images/home/team/01_team_picture.webp";
import TeamPicture2 from "@assets/images/home/team/02_team_picture.webp";
import TeamPicture3 from "@assets/images/home/team/03_team_picture.webp";
import TeamPicture4 from "@assets/images/home/team/04_team_picture.webp";
import TeamPicture5 from "@assets/images/home/team/05_team_picture.webp";
// SWIPER
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

const TeamGallery = () => {
  const TeamPictures = {
    src: [TeamPicture1, TeamPicture2, TeamPicture3, TeamPicture4, TeamPicture5],
  };

  return (
    <div className="min-w-[1028px] max-w-[1260px] mx-auto flex justify-center items-center align-middle gap-1 flex-wrap pt-8">
      {TeamPictures.src.map((image, index) => (
        <img key={index} src={image} alt={`Team picture ${index}`} />
      ))}
    </div>
  );
};

export default TeamGallery;
