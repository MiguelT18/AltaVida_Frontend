import SanMiguel01 from "@assets/images/blog/san_miguel/01_san_miguel.webp";

const Blog3 = () => {
  return (
    <div className="text-black max-w-[90%] mx-auto py-6">
      <img className="mx-auto mb-8" src={SanMiguel01} alt="" />
      <h1 className="text-lg font-my-raleway font-bold">
        San Miguel de Allende es una de las ciudades con mayor prestigio en
        México. Aquí te platicamos 5 razones para vivir en San Miguel.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm text-dark-gray py-5">
        San Miguel de Allende es una ciudad reconocida mundialmente por sus
        hermosas calles pintorescas y su riqueza artística y cultural. Descubre
        con nosotros 5 razones que te harán querer vivir aquí.
      </p>
      <article className="flex flex-col gap-4">
        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            1. Prestigio
          </h2>
          <p className="text-sm text-dark-gray">
            San Miguel de Allende no solo es considerada como Patrimonio
            Cultural de la Humanidad por la UNESCO, también ha ganado múltiples
            premios en los últimos años.
            <br />
            <br />
            En el 2013 fue nombrada como “La Mejor Ciudad del Mundo” por la
            prestigiosa revista Condé Nast Traveler y en 2020, por segundo año
            consecutivo, alcanzó el segundo lugar en los premios World’s Best
            Awards de la revista internacional Travel + Leisure.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            2. Ubicación privilegiada
          </h2>
          <p className="text-sm text-dark-gray">
            La ciudad se encuentra en la zona Centro-Este del estado de
            Guanajuato, localizada a tan solo 1 hora de Querétaro y Léon y a 4
            horas de la Ciudad de México.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            3. Oferta Cultural
          </h2>
          <p className="text-sm text-dark-gray">
            Es una ciudad sumergida en cultura que respira un aire cosmopolita
            por la cantidad de galerías, eventos culturales, desfiles y
            festivales que se llevan a cabo en la ciudad. Además de ser el hogar
            de muchos artistas y extranjeros.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Blog3;
