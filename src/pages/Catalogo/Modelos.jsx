import ModeloDalia from "../../assets/images/modelos/10. DALIA.webp";
import ModeloElite from "../../assets/images/modelos/11. EELITE.webp";
import ModeloClasico from "../../assets/images/modelos/2. CLASICO.webp";
import ModeloCanela from "../../assets/images/modelos/3. CANELA.webp";
import ModeloCountry from "../../assets/images/modelos/4. COUNTRY.webp";
import ModeloPetra from "../../assets/images/modelos/5. PETRA.webp";
import ModeloMinimalista from "../../assets/images/modelos/6. MINIMALISTA.webp";
import ModeloMediterraneo from "../../assets/images/modelos/7. MEDITERRANEO.webp";
import ModeloCampestre from "../../assets/images/modelos/8. CAMPESTRE.webp";
import ModeloBrick from "../../assets/images/modelos/9. BRICK.webp";

const Modelos = () => {
  const Modelos = {
    names: [
      "Modelo Clasico",
      "Modelo Canela",
      "Modelo Country",
      "Modelo Petra",
      "Modelo Minimalista",
      "Modelo Mediterraneo",
      "Modelo Campestre",
      "Modelo Brick",
      "Modelo Dalia",
      "Modelo Elite",
    ],
    src: [
      ModeloClasico,
      ModeloCanela,
      ModeloCountry,
      ModeloPetra,
      ModeloMinimalista,
      ModeloMediterraneo,
      ModeloCampestre,
      ModeloBrick,
      ModeloDalia,
      ModeloElite,
    ],
  };

  return (
    <section className="bg-white w-[90%] lg:w-[70%] mx-auto -mt-14 mb-16 pb-10 pt-14 px-6 shadow-lg shadow-gray-500">
      <h1 className="text-center text-lg font-bold font-my-raleway pb-6 uppercase">
        Modelos de Construcción
      </h1>

      <div className="flex flex-wrap justify-center gap-14">
        {Modelos.src.map((modelo, index) => (
          <div className="w-fit" key={index}>
            <h1 className="text-md text-center pb-2 text-dark-gray">
              {Modelos.names[index]}
            </h1>
            <img
              className="w-full max-w-[300px] mx-auto"
              src={modelo}
              alt={`${Modelos.names[index]}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modelos;
