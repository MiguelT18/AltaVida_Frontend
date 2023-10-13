import PropTypes from "prop-types";

const InfoCard = ({ title, text, image }) => {
  return (
    <article className="max-w-[400px] bg-navy-blue text-white border-orange border-2 rounded-3xl p-6 shadow-xl shadow-slate-500">
      <h1 className="text-md font-bold uppercase">{title}</h1>
      <p className="text-sm pt-3 pb-5">{text}</p>
      <img className="w-full rounded-lg" src={image} alt="Info Card" />
    </article>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.any,
};

export default InfoCard;
