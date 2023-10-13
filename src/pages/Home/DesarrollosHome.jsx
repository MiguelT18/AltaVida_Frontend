import ProyectoCard from "../Desarrollos/Proyectos/ProyectoCard";

import AltaMiraLogo from "@assets/images/desarrollos/alta_mira/alta_mira_logo.png";
import BlessLogo from "@assets/images/desarrollos/bless/Logo_Bless.png";
import RioVidaLogo from "@assets/images/desarrollos/rio_vida/rio_vida_logo.png";
import HeaderTitle from "@src/components/HeaderTitle";
import AltaMira from "../Desarrollos/Proyectos/AltaMira";
import Bless from "../Desarrollos/Proyectos/Bless";
import RioVida from "../Desarrollos/Proyectos/RioVida";

const DesarrollosHome = () => {
  return (
    <div className="pt-10 pb-24">
      <HeaderTitle
        textClass="text-sm text-dark-dray"
        lineClass="bg-navy-blue"
        description="Explora nuestro sólido legado de confianza y calidad en los proyectos de Tarija. Con más de nueve años de experiencia y la entrega exitosa de más de 350 casas, no solo construimos viviendas, sino transformamos sueños en realidad. Desde nuestros condominios vanguardistas, como Alta Mira, Río Vida y Bless, hasta las casas personalizadas, cada proyecto es un testimonio palpable de excelencia."
        title="Conoce nuestros desarrollos de Tarija"
      />
      <div className="flex flex-wrap gap-10 justify-around mt-10">
        <ProyectoCard
          image={BlessLogo}
          project={<Bless />}
          title="Bless"
          description="Explora condominios verticales elegantes y cómodos. Más de 9 años de experiencia y 350 casas de alta calidad entregadas. Encuentra tu espacio perfecto en nuestros proyectos."
        />
        <ProyectoCard
          image={RioVidaLogo}
          project={<RioVida />}
          title="Río Vida"
          description="Naturaleza y comodidad en un hogar perfecto respaldado por años de experiencia en alta calidad. Tu refugio, un nuevo comienzo."
        />
        <ProyectoCard
          image={AltaMiraLogo}
          project={<AltaMira />}
          title="Alta Mira"
          description="Tu hogar en el cielo. Lujo, comodidad y vistas inspiradoras se fusionan en tu nuevo refugio en las alturas."
        />
      </div>
    </div>
  );
};

export default DesarrollosHome;
