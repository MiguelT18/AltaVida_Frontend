import BancoBCP from "../../../assets/images/financiamiento/banco_bcp.png";
import BancoBisa from "../../../assets/images/financiamiento/banco_bisa.png";
import BancoBNB from "../../../assets/images/financiamiento/banco_bnb.png";
import BancoEconomico from "../../../assets/images/financiamiento/banco_economico.png";
import BancoEFV from "../../../assets/images/financiamiento/banco_efv.png";
import BancoGanadero from "../../../assets/images/financiamiento/banco_ganadero.png";
import BancoMercantil from "../../../assets/images/financiamiento/banco_mercantil.png";

const Creditos = () => {
  const Creditos = {
    names: [
      "Banco Mercantil",
      "Banco de Crédito (BCP)",
      "Banco Bisa",
      "Banco BNB",
      "Banco Economico",
      "Banco La primera EFV",
      "Banco Ganadero",
    ],
    src: [
      BancoMercantil,
      BancoBCP,
      BancoBisa,
      BancoBNB,
      BancoEconomico,
      BancoEFV,
      BancoGanadero,
    ],
  };

  return (
    <section className="bg-white w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <p className="text-sm text-dark-gray mb-8">
        Porque AltaVida piensa en tí, te ofrecemos increíbles facilidades al
        momento de comprar tu casa o departamento, queremos que formes parte de
        nuestra gran familia.
        <br />
        <br />
        Por eso, te asesoramos para que elijas tu crédito de vivienda social,
        con la entidad bancaria que mejor se adapte a tus necesidades.
        <br />
        <br />
        Estás a tiempo para escoger tu hogar con nosotros.
      </p>

      <div className="flex flex-wrap items-stretch gap-10 justify-center">
        {Creditos.src.map((image, index) => (
          <div
            className="bg-navy-blue text-white max-w-[200px] min-h-[200px] p-5 rounded-xl shadow-lg shadow-gray-200 border-2 border-orange"
            key={index}
          >
            <img
              className={`mx-auto bg-white rounded-md ${
                index === 4 ? "bg-[#ed1c24] px-4 py-8" : ""
              } ${index === 3 ? "bg-[#26B460] p-4" : ""} ${
                index === 0 ? "bg-[#004926]" : ""
              } ${index === 6 ? "bg-[#004e08] py-1" : ""} ${
                index === 2 ? "bg-white px-5 py-6" : ""
              } ${index === 5 ? "bg-[#002669] px-4 py-7" : ""}`}
              src={image}
              alt="Credit info"
            />
            <h1 className="text-center text-sm font-bold font-my-raleway pt-4">
              {Creditos.names[index]}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Creditos;
