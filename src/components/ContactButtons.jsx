import "animate.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactButtons = () => {
  return (
    <>
      <a href="https://wa.link/ovut67">
        <AiOutlineWhatsApp
          className="w-fit h-fit fixed text-white bg-orange z-50 bottom-0 right-0 m-5 p-2 rounded-full cursor-pointer"
          size={"40px"}
        />
      </a>
    </>
  );
};

export default ContactButtons;