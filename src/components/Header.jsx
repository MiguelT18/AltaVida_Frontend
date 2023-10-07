import PropTypes from "prop-types";

const Header = ({ title, description }) => {
  return (
    <header className="bg-navy-blue text-white flex flex-col items-center justify-end w-full h-[40vh] pb-24">
      <h1 className="text-xl font-my-raleway font-bold uppercase">{title}</h1>
      <p className="text-sm">{description}</p>
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
};

export default Header;
