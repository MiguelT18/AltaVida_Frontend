import ModeloBrick from "@assets/images/desarrollos/MODELO_BRICK/9.-BRICK.webp";
import ModeloCampestre from "@assets/images/desarrollos/MODELO_CAMPESTRE/8.-CAMPESTRE.webp";
import ModeloCanela from "@assets/images/desarrollos/MODELO_CANELA/3.-CANELA.webp";
import ModeloClasico from "@assets/images/desarrollos/MODELO_CLASICO/2. CLASICO.webp";
import ModeloCountry from "@assets/images/desarrollos/MODELO_COUNTRY/4. COUNTRY.webp";
import ModeloDalia from "@assets/images/desarrollos/MODELO_DALIA/10. DALIA.webp";
import ModeloElite from "@assets/images/desarrollos/MODELO_ELITE/11. eELITE.webp";
import ModeloMediterraneo from "@assets/images/desarrollos/MODELO_MEDITERRANEO/7. MEDITERRANEO.webp";
import ModeloMinimalista from "@assets/images/desarrollos/MODELO_MINIMALISTA/6. MINIMALISTA.webp";
import ModeloPetra from "@assets/images/desarrollos/MODELO_PETRA/5. PETRA.webp";

const Bless = () => {
  const modelos = [
    "Modelo Brick",
    "Modelo Campestre",
    "Modelo Canela",
    "Modelo Clásico",
    "Modelo Country",
    "Modelo Dalia",
    "Modelo Elite",
    "Modelo Mediterraneo",
    "Modelo Minimalista",
    "Modelo Petra",
  ];

  return (
    <div>
      <h2 className="text-xl font-bold uppercase text-center">Bless</h2>
      <ul className="max-w-[1080px] text-md text-center w-full mx-auto font-bold grid justify-items-center items-center grid-cols-2 max-lg:grid-cols-1 gap-10 py-4">
        <li>
          <h4 className="pb-2">{modelos[0]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloBrick}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[1]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloCampestre}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[2]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloCanela}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[3]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloClasico}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[4]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloCountry}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[5]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloDalia}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[6]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloElite}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[7]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloMediterraneo}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[8]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloMinimalista}
            alt="Modelo brick"
          />
        </li>
        <li>
          <h4 className="pb-2">{modelos[9]}</h4>
          <img
            className="w-[90%] max-w-[380px] mx-auto"
            src={ModeloPetra}
            alt="Modelo brick"
          />
        </li>
      </ul>
    </div>
  );
};

export default Bless;
