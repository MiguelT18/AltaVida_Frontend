import PropTypes from "prop-types";

const HeaderTitle = ({
  title,
  description,
  titleClass,
  lineClass,
  textClass,
}) => {
  return (
    <header>
      <div className="w-full mx-auto flex flex-col gap-4">
        <h1
          className={` text-center text-xl ${titleClass} font-bold font-my-raleway`}
        >
          {title}
        </h1>
        <span
          className={`block mx-auto w-[60%] h-[2px] ${lineClass} relative after:block after:w-[25%] after:h-[5px] after:mx-auto after:bg-orange mt-1 mb-6`}
        ></span>
      </div>
      <p className={`w-fit mx-auto text-center ${textClass}`}>{description}</p>
    </header>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  lineClass: PropTypes.string,
  textClass: PropTypes.string,
};

export default HeaderTitle;
