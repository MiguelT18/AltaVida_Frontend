import Hexa from "@assets/images/blog/hexa.webp";

const Blog2 = () => {
  return (
    <div className="text-black max-w-[90%] mx-auto">
      <h1 className="text-lg font-my-raleway font-bold">
        Aunque creas que todo estaba inventado en la robótica, no es así. HEXA
        el robot que cuida tus plantas.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <img className="mx-auto mt-9 mb-4" src={Hexa} alt="Hexa bot is here!" />
      <p className="text-sm py-5">
        Uno de nuestros mayores errores a la hora de tener plantas es que no nos
        solemos acordar a la hora de regarlas, o que no lo hacemos lo
        suficiente, haciendo que muchas de ellas se acaben secando y pasando a
        mejor vida.
        <br />
        <br />
        Pero Sun Tianqi, un empresario chino especialista en robótica, no quiere
        que te pase eso, y para ello ha modificado un robot Hexa con una maceta
        en su cabeza y nuevas funciones para que mantenga viva a una planta que
        lleva en la cabeza.
        <br />
        Este robot, fabricado por la compañía Vincross, es un cangrejo con seis
        patas con una maceta en su parte superior que es capaz de saber cuándo
        le da el sol o la sombra.
        <br />
        <br />
        Esta nueva versión del robot cangrejo es capaz de moverse por toda la
        casa, encontrando la luz o la sombra según las necesidades de la planta
        gracias a sus sensores. También es capaz de monitorizar la humedad de la
        tierra, con lo que sabría cuándo es necesario regar la planta.
        Evidentemente el robot no es suficientemente hábil como para regar la
        planta por sí mismo, pero realizará un curioso baile para avisar al
        dueño de que debe regar la planta.
        <br />
        <br />
        Su precio es de $949 dólares en su versión más básica, así que a
        estrenar este hermoso robot, ahora ya solo te falta escoger el modelo de
        tu casa favorito para que pueda andar este robot literal como en su
        casa.
      </p>
    </div>
  );
};

export default Blog2;
