import HomeBlog from "@assets/images/blog/navidad/homeBlog.webp";

const Blog1 = () => {
  return (
    <div className="text-black max-w-[90%] mx-auto">
      <h1 className="text-lg font-my-raleway font-bold">
        ¿Llegó la hora de hacer todas esas compras navideñas y no sabes ni por
        dónde empezar? Te ayudamos a distinguir entre Utilidad y Novedad.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm py-5 text-dark-gray">
        Llegan las fiestas navideñas y en lo único que podemos pensar es
        regalos, regalos y más regalos. Las compras navideñas son una de las
        partes mas emocionantes de esta temporada. Pero; te has puesto a pensar
        ¿Realmente tienen una utilidad todas esas cosas que compramos? o son
        simple novedad.
      </p>
      <img
        className="w-full max-w-[640px] mx-auto pb-4"
        src={HomeBlog}
        alt="Home Blog"
      />
      <p className="text-sm py-5 text-dark-gray">
        Muchas veces compramos cosas pensando que las utilizaremos muchísimo y
        terminan arrumbadas en el fondo de nuestro armario, o en algunos casos,
        hasta nos olvidamos que las tenemos.
        <br />
        <br />
        Como esa maquina de ejercicio que compraste y nunca volviste a utilizar.
        Sabemos que es muy fácil dejarse llevar por los productos en tendencia o
        aquellos que vemos en oferta pero no siempre son la mejor opción. Antes
        <br />
        <br />
        de comprar un producto considera los siguientes aspectos:
      </p>
      <ul className="list-disc text-sm text-dark-gray">
        <li>
          <strong>Analiza si el producto cubrirá una necesidad real. </strong>
          Todas las compras traen con ellas un sentimiento de satisfacción, por
          lo que es importante identificar si tu compra es sólo por satisfacción
          en el momento o si realmente tendrá un lugar útil en tu vida.
        </li>
        <li>
          <strong>No compres cosas sólo porque son económicas. </strong>
          Muchas veces caemos en la trampa de comprar porque vemos una gran
          oferta, piensa dos veces si en realidad las necesitas antes de
          comprarlas.
        </li>
        <li>
          <strong>Invierte en productos de calidad. </strong>
          Como dicen a veces lo barato sale caro. Invierte en productos que
          duren y tengan una larga vida útil.
        </li>
      </ul>

      <p className="text-sm text-dark-gray">
        Y ahora sí, ¡Estás listo para optimizar tus compras navideñas! te
        aseguramos que a partir de ahora pensarás dos veces antes de comprar
        cualquier cosa.
        <br />
        <br />
        Recuerda que el mejor regalo en estas fechas es disfrutar de la compañía
        de tu familia y seres queridos.
      </p>
    </div>
  );
};

export default Blog1;
