import BlurModule from "@src/components/BlurModule";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import BgHeroImage04 from "../../assets/images/desarrollos/bless/4.webp";
import BgHeroImage01 from "../../assets/images/home/01_HeroHome.jpg";
import BgHeroImage02 from "../../assets/images/home/MiradorCopa.jpg";
import BgHeroImage03 from "../../assets/images/home/vino.jpg";

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
    transition: "background 1s",
  };

  return (
    <section className="bg-black w-full h-screen grid place-content-center relative px-6">
      {allImagesLoaded ? (
        <div
          style={imageStyle}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        ></div>
      ) : (
        <div className="absolute inset-0 bg-black"></div>
      )}
      <BlurModule>
        <div className="max-w-[900px] flex flex-col items-end gap-1">
          <h2 className="text-md font-bold">
            Residencias excepcionales donde la elegancia y la comodidad se unen
            para crear experiencias inolvidables.
          </h2>
          <Link
            className="animate__animated animate__animated animate__bounceIn w-fit pt-5 flex items-center justify-end gap-1 hover:underline hover:text-yellow transition-all"
            to={"/desarrollos"}
          >
            <span className="text-sm text-end max-sm:underline max-sm:italic">
              Conoce nuestros desarrollos
            </span>
            <IoArrowForward className="w-fit max-sm:hidden" size={"24px"} />
          </Link>
        </div>
      </BlurModule>
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
