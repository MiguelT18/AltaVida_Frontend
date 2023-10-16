import PropTypes from "prop-types";

const ProyectoCard = ({ title, description, image }) => {
  return (
    <article className="block w-full max-w-[300px] mx-auto">
      <div className="h-full text-center flex flex-col items-center justify-between bg-gradient-to-t from-slate-900 to-navy-blue text-white border-orange border-2 px-4 pt-6 pb-2 rounded-xl shadow-lg shadow-gray-500">
        <img
          className="max-w-[70%] mx-auto"
          src={image}
          alt="Project Description"
        />
        <div>
          <h1 className="text-lg font-bold font-my-raleway pb-2 pt-6">
            {title}
          </h1>
          <p className="text-sm pb-5">{description}</p>
        </div>
      </div>
    </article>
  );
};

ProyectoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  project: PropTypes.node,
  image: PropTypes.any,
};

export default ProyectoCard;
