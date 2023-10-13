import PropTypes from "prop-types";

// import HeaderPic from "@assets/images/financiamiento/HeaderBackground.webp";

const Header = ({ title, description, image }) => {
  const headerStyles = {
    background: image ? `[url(${image})]` : "bg-navy-blue",
  };

  return (
    <header
      className={`bg-${headerStyles.background} bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24`}
    >
      <h1 className="text-xl text-center font-my-raleway font-bold uppercase">
        {title}
      </h1>
      <p className="text-sm text-center">{description}</p>
    </header>
  );
};

Header.defaultProps = {
  title: "Untitled",
  description: "Default description",
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Header;
