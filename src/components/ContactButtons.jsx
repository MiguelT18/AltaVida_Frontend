import "animate.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactButtons = () => {
  return (
    <>
      <a
        href="https://wa.link/ovut67"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineWhatsApp className="animate-pulse w-fit h-fit fixed text-white bg-orange z-30 top-28 right-0 m-5 p-2 rounded-full cursor-pointer text-xl" />
      </a>
    </>
  );
};

export default ContactButtons;
