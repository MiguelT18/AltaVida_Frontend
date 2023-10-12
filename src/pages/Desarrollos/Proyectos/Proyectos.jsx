import AltaMira from "./AltaMira";
import Bless from "./Bless";
import ProyectoCard from "./ProyectoCard";
import RioVida from "./RioVida";

const Proyectos = () => {
  return (
    <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <h1 className="text-navy-blue text-lg text-center font-my-raleway font-bold uppercase pb-6">
        Proyectos
      </h1>
      <div className="flex flex-wrap justify-center gap-12 pb-8">
        <ProyectoCard
          project={<Bless />}
          title="Bless"
          description="Explora condominios verticales elegantes y cómodos. Más de 9 años de experiencia y 350 casas de alta calidad entregadas. Encuentra tu espacio perfecto en nuestros proyectos."
        />
        <ProyectoCard
          project={<RioVida />}
          title="Río Vida"
          description="Naturaleza y comodidad en un hogar perfecto respaldado por años de experiencia en alta calidad. Tu refugio, un nuevo comienzo."
        />
        <ProyectoCard
          project={<AltaMira />}
          title="Alta Mira"
          description="Tu hogar en el cielo. Lujo, comodidad y vistas inspiradoras se fusionan en tu nuevo refugio en las alturas."
        />
      </div>
    </section>
  );
};

export default Proyectos;
