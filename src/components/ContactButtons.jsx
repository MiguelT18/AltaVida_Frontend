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
        <AiOutlineWhatsApp className="animate-pulse w-fit absolute right-0 top-full h-fit text-white bg-orange m-5 p-2 rounded-full cursor-pointer text-xl" />
      </a>
    </>
  );
};

export default ContactButtons;
