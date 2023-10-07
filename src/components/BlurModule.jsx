import PropTypes from "prop-types";

const BlurModule = ({ children }) => {
  return (
    <article className="text-white w-[80%] mx-auto p-10 z-10 flex flex-col flex-wrap relative after:block after:absolute after:w-full after:h-full after:backdrop-blur-[5px] after:top-0 after:left-0 after:-z-10 before:block before:absolute before:w-full before:h-full before:border-2 before:border-orange before:-top-4 before:-right-4 before:-z-10">
      {children}
    </article>
  );
};

BlurModule.propTypes = {
  children: PropTypes.node,
};

export default BlurModule;
