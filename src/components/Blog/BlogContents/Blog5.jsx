import HomeBlog from "@assets/images/blog/homeBlog.webp";

const Blog5 = () => {
  return (
    <div className="text-black">
      <img
        className="mx-auto mb-6 rounded-xl"
        src={HomeBlog}
        alt="Comienza a hacer ejercicio desde casa"
      />
      <h1 className="text-lg font-my-raleway font-bold">
        Si eres de los que piensan que hacer ejercicio es muy complicado, este
        blog es para ti. Encuentra motivación y ponte en forma sin salir de casa
        con nosotros.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm text-dark-gray py-5">
        Comenzar una vida saludable no es tan difícil como parece, no es
        necesario ir al mejor gimnasio o tener un equipo de aparatos para
        empezar a hacer ejercicio.
        <br />
        <br />
        Basta con implementar pequeños hábitos a tu día a día y comenzarás a
        estar en forma antes de que te des cuenta.
        <br />
        <br />
        A continuación te compartiremos algunos tips para ponerte en forma desde
        casa:
        <br />
        <br />
      </p>

      <div>
        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            Encuentra un momento en el día para hacer ejercicio
          </h2>
          <p className="text-sm text-dark-gray py-5">
            La mayoría de las veces queremos ponernos en forma pero “nunca
            tenemos tiempo” para hacer ejercicio.
            <br />
            <br />
            Y la realidad es que, no es necesario que le dediques todas las
            horas de tu día, 30 minutos al día son más que suficientes para
            empezar una rutina.
            <br />
            <br />
            Siempre piensa que si tienes 30 minutos para revisar tus redes
            sociales por la mañana o por la noche, también tienes 30 minutos
            para ejercitarte.
            <br />
            <br />
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            Empieza encontrando la rutina que se adapte mejor a tus necesidades
          </h2>
          <p className="text-sm text-dark-gray py-5">
            La mejor manera para empezar a ejercitarse desde casa es siguiendo
            una rutina por medio de algún instructor en linea o alguna
            aplicación fitness.
            <br />
            <br />
            Existen una gran variedad de opciones en plataformas como Youtube o
            aplicaciones móviles que ofrecen diferentes rutinas.
            <br />
            <br />
            La mayoría de estas son sin necesidad de equipamiento ya que basan
            sus ejercicios en bodyweight training o entrenamiento con el peso de
            tu propio cuerpo.
            <br />
            <br />
            Una excelente opción gratuita es la app de Nike Training Club, esta
            creará rutinas personalizadas dependiendo tu edad, peso y condición
            física.
            <br />
            <br />
            Ir acompañado de un instructor en linea o aplicación te ayudarán a
            crear mayor compromiso y a establecer objetivos en tus rutinas.
          </p>
        </div>

        <div>
          <h2 className="text-md font-my-raleway font-bold pb-2">
            Establece tu lugar para hacer ejercicio
          </h2>
          <p className="text-sm text-dark-gray py-5">
            Ya sea que quieras ejercitarte en el jardín, al aire libre o en el
            interior de tu casa, intenta buscar un lugar cómodo para poder
            realizar todos los movimientos de las rutinas. El establecer un
            lugar en específico para realizarlo te ayudará a crear un hábito.
            <br />
            <br />
            Nosotros hemos transformado el Flex Space de uno de nuestros modelos
            en un gym en casa, toma este recorrido virtual y descubre cómo lo
            hemos hecho.
            <br />
            <br />
            Conoce nuestros diferentes modelos con Flex Space, un espacio
            flexible para transformarlo en lo que tú quieras, agendando una cita
            hoy mismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog5;
