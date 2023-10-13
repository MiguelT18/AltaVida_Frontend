import TestimonioHeader from "../../../assets/images/testimoniales/testimonio_11.webp";

import { AiOutlineWhatsApp } from "react-icons/ai";

const TestimoniosHeader = () => {
  return (
    <article>
      <div className="flex justify-between items-center max-lg:flex-col gap-8">
        <div className="max-w-[50%] max-lg:max-w-full max-lg:text-center flex flex-col gap-4 justify-center">
          <h1 className="text-lg font-my-raleway">
            Conoce lo que piensan nuestros clientes de AltaVida
          </h1>
          <p className="text-sm text-dark-gray">
            En AltaVida, la confianza de nuestros clientes es nuestra mayor
            recompensa. Descubre por qué nos eligen una y otra vez para
            encontrar su hogar perfecto en medio de la naturaleza.
          </p>
          <a
            href="https://wa.link/ovut67"
            className="bg-orange text-white text-sm w-fit flex items-center gap-2 font-my-raleway font-bold py-2 px-4 rounded-md mt-1 max-lg:mx-auto"
          >
            Ponerse en contacto <AiOutlineWhatsApp size={"1.5em"} />
          </a>
        </div>
        <img
          className="max-w-[50%] max-lg:max-w-full h-fit"
          src={TestimonioHeader}
          alt="Header testimonial moment"
        />
      </div>
    </article>
  );
};

export default TestimoniosHeader;
