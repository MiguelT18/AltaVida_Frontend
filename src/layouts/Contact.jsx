// import BlurModule from "@src/components/BlurModule";
import HeaderTitle from "@src/components/HeaderTitle";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-full grid place-content-center bg-[url('@assets/images/contact_layout/contact_background.webp')] bg-center bg-no-repeat bg-cover bg-fixed py-32 px-6 text-white">
      <HeaderTitle
        title="Descubre nuestros desarrollos exclusivos"
        description="Contáctanos"
        titleClass="text-white"
        lineClass="bg-silver"
        textClass="text-white"
      />
      <div className="flex flex-wrap justify-center items-center gap-8 pt-5 mx-4">
        <div className="flex flex-col gap-3 text-center">
          <span>¿Tienes dudas? Llámanos</span>
          <a
            className="bg-orange hover:bg-[#De7700] flex items-center justify-center gap-4 w-[280px] px-6 py-2 rounded-full font-bold font-my-raleway"
            href="#"
          >
            <FaPhoneAlt />
            +591 62851111
          </a>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <span>Excríbenos</span>
          <a
            className="bg-orange hover:bg-[#De7700] flex items-center justify-center gap-4 w-[280px] px-6 py-2 rounded-full font-bold font-my-raleway"
            href="#"
          >
            <MdWhatsapp size={"1.5em"} />
            Contacto de soporte
          </a>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <span>¿Deseas información general?</span>
          <a
            className="bg-orange hover:bg-[#De7700] flex items-center justify-center gap-4 w-[280px] px-6 py-2 rounded-full font-bold font-my-raleway"
            href="#"
          >
            <FaEnvelope />
            contacto@altavidasrl.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
