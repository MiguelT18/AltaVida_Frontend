import { useEffect, useState } from "react";

import BgHeroImage01 from "../../assets/images/home/01_HeroImg.webp";
import BgHeroImage02 from "../../assets/images/home/02_HeroImg.webp";
import BgHeroImage03 from "../../assets/images/home/03_HeroImg.webp";
import BgHeroImage04 from "../../assets/images/home/04_HeroImg.webp";

import { BsChevronDoubleDown } from "react-icons/bs";

import "animate.css";

const Hero = () => {
  const images = [BgHeroImage01, BgHeroImage02, BgHeroImage03, BgHeroImage04];

  const [currentImage, setCurrentImage] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleAllImagesLoaded = () => {
    setAllImagesLoaded(true);
  };

  const imageStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    transition: "background 1.5s",
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-end relative px-6">
      {allImagesLoaded ? (
        <div
          style={imageStyle}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        ></div>
      ) : (
        <div className="absolute inset-0 bg-black"></div>
      )}

      <article className="flex flex-col items-center justify-center z-20">
        <div className="text-white text-sm text-center w-full md:w-[70%] max-w-[960px] p-5 pt-3 z-10 relative after:block after:absolute after:w-full after:h-full after:backdrop-blur-[6px] after:bg-opacity-60 after:top-0 after:left-0 after:-z-50 before:block before:absolute before:w-full before:h-full before:border-2 before:border-orange before:-top-2 before:-right-2 before:-z-50">
          <h2>
            <strong className="text-orange">Residencias excepcionales</strong>{" "}
            donde la elegancia y la comodidad se unen para{" "}
            <strong className="text-orange">
              crear experiencias inolvidables
            </strong>
            .
          </h2>
        </div>
        <span className="animate__animated animate__infinite animate__fadeInDown block w-fit h-fit my-3  text-orange">
          <BsChevronDoubleDown size={"2rem"} />
        </span>
      </article>

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{ display: "none" }}
          onLoad={index === images.length - 1 ? handleAllImagesLoaded : null}
        />
      ))}
    </section>
  );
};

export default Hero;
