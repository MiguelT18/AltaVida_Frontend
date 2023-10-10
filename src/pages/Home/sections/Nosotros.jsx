import SolidModule from "@src/components/SolidModule";
import { useEffect, useRef, useState } from "react";
import TeamGallery from "./picture_gallery/TeamGallery";
import TeamGallerySlider from "./picture_gallery/TeamGallerySlider";
// Hooks
import UseWindowWidth from "@src/hooks/UseWindowWidth";

import { AiOutlineHistory } from "react-icons/ai";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Nosotros = () => {
  const windowWidth = UseWindowWidth();

  const [counter, setCounter] = useState(0);
  const targetNumber = 2000;
  const counterRef = useRef(null);

  useEffect(() => {
    let currentCounterRef = counterRef.current;
    const increment = (targetNumber / 2000) * 10;

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        const intervalID = setInterval(() => {
          setCounter((prevCount) => {
            const newCounter = prevCount + increment;
            if (newCounter >= targetNumber) {
              clearInterval(intervalID);
              return targetNumber;
            }
            return newCounter;
          });
        }, 10);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (currentCounterRef) {
        observer.unobserve(currentCounterRef);
      }
    };
  }, []);

  return (
    <section className="bg-navy-blue text-white">
      <div className="text-center flex flex-col items-center gap-1 py-10">
        <h1 className="text-xl font-my-raleway font-bold uppercase">
          Nosotros Somos
        </h1>
        <p className="text-sm">Alta Vida, empresa que motiva al cambio.</p>
      </div>
      {windowWidth <= 1080 ? <TeamGallerySlider /> : <TeamGallery />}
      <div
        ref={counterRef}
        className="max-w-[500px] mx-auto flex flex-col items-start sm:items-center justify-center gap-10 py-10 px-4"
      >
        <div className="flex items-center gap-4">
          <SolidModule>
            <AiOutlineHistory size={"2rem"} />
          </SolidModule>
          <p className="flex items-center gap-3">
            <span className="font-bold text-xl text-orange">9</span>
            <span className="text-md">
              <strong>Años</strong> de historia
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4 mr-10">
          <SolidModule>
            <BsFillHouseHeartFill size={"2rem"} />
          </SolidModule>
          <p className="flex items-center gap-3">
            <span className="font-bold text-xl text-orange">+350</span>
            <span className="text-md">
              <strong>Casas</strong> en todo Tarija
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SolidModule>
            <FaUsers size={"2rem"} />
          </SolidModule>
          <p className="flex items-center gap-3">
            <span className="font-bold text-xl text-orange">
              {Math.round(counter)}
            </span>
            <span className="text-md">
              <strong>Familias</strong> felices
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
