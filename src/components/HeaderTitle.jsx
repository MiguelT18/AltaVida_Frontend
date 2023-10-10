import PropTypes from "prop-types";

const HeaderTitle = ({
  title,
  description,
  titleClass,
  lineClass,
  textClass,
}) => {
  return (
    <header className="mx-4">
      <div className="w-fit mx-auto flex flex-col gap-5">
        <h1
          className={`text-center text-xl ${titleClass} font-bold font-my-raleway`}
        >
          {title}
        </h1>
        <span
          className={`block mx-auto w-[75%] h-[2px] ${lineClass} relative after:block after:w-[25%] after:h-[5px] after:mx-auto after:bg-orange`}
        ></span>
      </div>
      <p className={`text-center text-sm ${textClass} pt-5`}>{description}</p>
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
