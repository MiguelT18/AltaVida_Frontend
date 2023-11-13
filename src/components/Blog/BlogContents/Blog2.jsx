import FocoOrangeBg from "@assets/images/blog/ahorra/FocoOrangeBg.webp";
import Enchufe from "@assets/images/blog/ahorra/enchufe.webp";
import Lavadora from "@assets/images/blog/ahorra/lavadora.webp";
import Room01 from "@assets/images/blog/ahorra/room01.webp";

const Blog2 = () => {
  return (
    <div className="text-black max-w-[90%] mx-auto">
      <h1 className="text-lg font-my-raleway font-bold">
        Descubre cómo ahorrar energía en casa y reducir tus gastos mensuales.
        Con consejos prácticos y efectivos, aprenderás a cuidar el medio
        ambiente mientras ahorras dinero.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm py-5">
        El consumo de energía en el hogar es uno de los principales gastos en
        nuestras facturas mensuales, por lo que es importante buscar formas de
        reducirlo y ahorrar dinero. Afortunadamente, existen varios tips para
        ahorrar energía en casa que no solo reducirán nuestros costos, sino que
        también ayudarán al medio ambiente.
        <img className="my-8 rounded-xl" src={Enchufe} alt="Enchufe de casa" />
        Uno de los primeros pasos para ahorrar energía es apagar los aparatos
        electrónicos cuando no los estamos usando. Muchos de estos dispositivos,
        como los televisores, continúan utilizando energía incluso cuando están
        en modo de espera. Apagarlos por completo cuando no los estemos usando
        puede ahorrar energía y dinero en nuestras facturas.
        <br />
        <br />
        Otra forma de ahorrar energía es elegir las bombillas adecuadas para
        nuestras necesidades. Las bombillas LED son una excelente opción, ya que
        consumen hasta un 80% menos de energía que las bombillas incandescentes
        y duran mucho más tiempo. Aunque su costo inicial puede ser un poco más
        alto, el ahorro en nuestras facturas de energía a largo plazo hace que
        valga la pena.
        <img
          className="my-8 rounded-xl"
          src={Room01}
          alt="Habitación con las luces encendidas"
        />
        La ventilación adecuada también puede ayudar a reducir el consumo de
        energía. En los meses más cálidos, podemos usar ventiladores de techo en
        lugar de aire acondicionado para mantenernos frescos. En los meses más
        fríos, podemos abrir las cortinas para dejar entrar la luz solar y el
        calor natural en lugar de encender la calefacción.
        <img
          className="my-8 rounded-xl"
          src={Lavadora}
          alt="Habitación con las luces encendidas"
        />
        Otra forma de ahorrar energía es utilizar electrodomésticos con
        calificación energética alta. Muchos electrodomésticos modernos están
        diseñados para ser más eficientes en el consumo de energía y pueden
        ahorrar mucho dinero a largo plazo. Al elegir un electrodoméstico,
        debemos buscar aquellos que tengan la calificación ENERGY STAR, ya que
        son los más eficientes en términos de consumo de energía.
        <br />
        <br />
        Finalmente, podemos reducir el consumo de energía en nuestras
        actividades diarias. Por ejemplo, lavar la ropa en agua fría en lugar de
        caliente puede ahorrar energía y dinero. Además, podemos reducir el
        tiempo de nuestras duchas para ahorrar en el uso de agua caliente.
        <img
          className="my-8 rounded-xl"
          src={FocoOrangeBg}
          alt="Habitación con las luces encendidas"
        />
        Existen varios tips para ahorrar energía en casa que podemos implementar
        para reducir nuestros costos y cuidar el medio ambiente. Apagar los
        aparatos electrónicos cuando no los estemos usando, elegir las bombillas
        adecuadas, utilizar ventilación adecuada, utilizar electrodomésticos de
        alta calificación energética y reducir el consumo de energía en nuestras
        actividades diarias son algunas de las formas más efectivas de ahorrar
        energía en casa.
      </p>
    </div>
  );
};

export default Blog2;
