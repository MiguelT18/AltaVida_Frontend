import PropTypes from "prop-types";

const BlurModule = ({ children }) => {
  return (
    <article className="text-white w-full p-8 z-10 flex flex-col flex-wrap relative after:block after:absolute after:w-full after:h-full after:backdrop-blur-[6px] after:bg-black after:bg-opacity-60 after:top-0 after:left-0 after:-z-50 before:block before:absolute before:w-full before:h-full before:border-2 before:border-orange before:-top-2 before:-right-2 before:-z-50">
      {children}
    </article>
  );
};

BlurModule.propTypes = {
  children: PropTypes.node,
};

export default BlurModule;
