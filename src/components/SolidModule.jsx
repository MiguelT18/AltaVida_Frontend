import PropTypes from "prop-types";

const SolidModule = ({ children }) => {
  return (
    <div className="bg-steel-blue border-2 border-orange max-w-[100px] p-3 md:p-5">
      {children}
    </div>
  );
};

SolidModule.propTypes = {
  children: PropTypes.node,
};

export default SolidModule;
