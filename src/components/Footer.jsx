import BrandLogo from "@assets/logos/brandLogo.webp";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-4 py-4">
      <img className="max-w-[100px]" src={BrandLogo} alt="Brand Logo" />
      <div className="flex gap-8 justify-center items-center">
        <a href="https://www.facebook.com/AltaVidaBienesRaices">
          <BsFacebook color="#4E5B6D" size={"2em"} />
        </a>
        <a href="https://www.instagram.com/altavidabienesraices/">
          <AiFillInstagram color="#4E5B6D" size={"2.4em"} />
        </a>
        <a href="https://www.tiktok.com/@altavida.oficial">
          <FaTiktok color="#4E5B6D" size={"2em"} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
