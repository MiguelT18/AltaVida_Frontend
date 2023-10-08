import TeamGallery from "./picture_gallery/TeamGallery";
import TeamGallerySlider from "./picture_gallery/TeamGallerySlider";
// Hooks
import UseWindowWidth from "@src/hooks/UseWindowWidth";

const Nosotros = () => {
  const windowWidth = UseWindowWidth();

  return (
    <section className="bg-navy-blue text-white">
      <div className="text-center flex flex-col items-center gap-1 pt-10">
        <h1 className="text-xl font-my-raleway font-bold uppercase">
          Nosotros Somos
        </h1>
        <p className="text-sm">Alta Vida, empresa que motiva al cambio.</p>
      </div>
      {windowWidth <= 1080 ? <TeamGallerySlider /> : <TeamGallery />}
    </section>
  );
};

export default Nosotros;
