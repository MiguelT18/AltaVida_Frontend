import HeaderTitle from "@src/components/HeaderTitle";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Contact = () => {
  const phoneNumber = "+59162851111";
  const email = "contacto@altavidasrl.com";

  return (
    <section className="w-full h-full min-h-[70vh] pt-6 pb-12 grid place-content-center bg-[url('@assets/images/contact_layout/contact_background.webp')] bg-center bg-no-repeat bg-cover bg-fixed text-white">
      <HeaderTitle
        title="Descubre nuestros desarrollos exclusivos"
        description="Contáctanos"
        titleClass="text-white"
        lineClass="bg-silver"
        textClass="text-white text-md"
      />

      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 pt-5 px-4">
        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-2 text-center">
          <span className="text-sm">¿Tienes dudas? Llámanos</span>
          <a
            className="bg-orange hover:bg-[#De7700] w-full md:w-[340px] flex items-center justify-center gap-2 py-2 px-4 rounded-full text-sm"
            href={`tel:${phoneNumber}`}
          >
            <FaPhoneAlt />
            +591 62851111
          </a>
        </div>

        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-2 text-center">
          <span className="text-sm">Excríbenos</span>
          <a
            className="bg-orange hover:bg-[#De7700] w-full md:w-[340px] flex items-center justify-center gap-2 py-2 px-4 rounded-full text-sm"
            href="https://wa.link/ovut67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdWhatsapp size={"1.5em"} />
            Contacto de soporte
          </a>
        </div>

        <div className="w-fit mx-auto flex flex-col justify-center items-center gap-2 text-center">
          <span className="text-sm">¿Deseas información general?</span>
          <a
            className="bg-orange hover:bg-[#De7700] w-full md:w-[340px] flex items-center justify-center gap-2 py-2 px-4 rounded-full text-sm"
            href={`mailto:${email}`}
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
