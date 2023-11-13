import Tarija02 from "@assets/images/blog/tarija/tarija02.webp";

const Blog3 = () => {
  return (
    <div className="text-black max-w-[90%] mx-auto">
      <img className="mx-auto mb-8 rounded-xl" src={Tarija02} alt="" />
      <h1 className="text-lg font-my-raleway font-bold">
        Descubre las 5 Razones por las que Tarija, Bolivia, es un Lugar Ideal
        para Vivir
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm text-dark-gray py-5">
        Tarija, ubicada al sur de Bolivia, es una ciudad que combina la belleza
        natural con una rica cultura y un estilo de vida relajado. Aquí te
        presentamos cinco razones por las cuales Tarija es un lugar ideal para
        vivir.
      </p>
      <article className="flex flex-col gap-4">
        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            1. Paisajes de Ensoñación
          </h2>
          <p className="text-sm text-dark-gray">
            Tarija está rodeada de impresionantes paisajes naturales. Desde los
            valles y viñedos de la región de Cinti hasta las montañas y bosques
            de la zona de Entre Ríos, la belleza de la naturaleza se encuentra a
            la vuelta de la esquina. Los amantes de la aventura y la
            tranquilidad encontrarán en Tarija un paraíso natural.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            2. Clima Agradable
          </h2>
          <p className="text-sm text-dark-gray">
            Tarija disfruta de un clima templado durante todo el año. Con días
            soleados y noches frescas, es un lugar donde el tiempo nunca es un
            obstáculo para salir y disfrutar. Los inviernos suaves y los veranos
            moderados hacen que Tarija sea un lugar atractivo para vivir.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            3. Cultura y Tradición
          </h2>
          <p className="text-sm text-dark-gray">
            Tarija es famosa por su rica herencia cultural. Desde festivales de
            música folklórica hasta celebraciones tradicionales, la ciudad
            ofrece numerosas oportunidades para sumergirse en la cultura
            boliviana. La comida y la música son elementos fundamentales en la
            vida de Tarija, y sus habitantes te recibirán con los brazos
            abiertos.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            4. Vino y Gastronomía
          </h2>
          <p className="text-sm text-dark-gray">
            Tarija es conocida por su producción de vino. La región de los
            Cintis es un epicentro vinícola en Bolivia, y hay muchas bodegas
            donde se producen vinos de alta calidad. Además, la comida local es
            deliciosa. Desde la famosa salteña hasta los platos tradicionales
            como la saice y el api, Tarija es un paraíso gastronómico.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            5. Estilo de Vida Relajado
          </h2>
          <p className="text-sm text-dark-gray">
            La vida en Tarija se mueve a un ritmo pausado. Aquí, las prisas y el
            estrés son cosas del pasado. La calidad de vida es alta, y las
            personas valoran el tiempo para disfrutar con la familia y amigos.
            Es un lugar donde se aprecia la simplicidad y la felicidad en las
            pequeñas cosas.
          </p>
        </div>

        <p className="text-sm text-dark-gray">
          Tarija, con su belleza natural, su cultura rica y su estilo de vida
          relajado, es un lugar que capta el corazón de quienes lo visitan. Ya
          sea que estés buscando un cambio de vida o unas vacaciones eternas,
          Tarija te brinda la oportunidad de experimentar lo mejor de Bolivia.
          ¡Ven y descubre la magia de Tarija por ti mismo!
        </p>
      </article>
    </div>
  );
};

export default Blog3;
