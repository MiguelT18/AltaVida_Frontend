import Financiamiento from "@src/assets/images/blog/financiamiento.webp";

const Blog4 = () => {
  return (
    <div className="text-black">
      <img
        className="mx-auto mb-8 rounded-xl"
        src={Financiamiento}
        alt="¿Llego el momento de comprar tu casa?"
      />
      <h1 className="text-lg font-my-raleway font-bold">
        ¿Llegó el momento de comprar tu casa? Te decimos todo lo que necesitas
        saber de financiamiento antes de obtener un crédito hipotecario.
      </h1>
      <span className="block w-full h-[2px] bg-navy-blue mt-5"></span>
      <p className="text-sm text-dark-gray py-5">
        Te decimos las 5 cosas que necesitas saber de financiamiento antes de
        obtener un crédito hipotecario.
        <br />
        <br />
        Entendemos que comprar una casa es una de las decisiones más
        emocionantes e importantes de tu vida, por ello es crucial que conozcas
        el financiamiento que se adapte mejor a ti.
      </p>
      <h2 className="text-md font-my-raleway font-bold pb-2">
        5 Aspectos principales a considerar antes de tramitar un crédito.
      </h2>
      <div>
        <p className="text-sm text-dark-gray py-5">
          <strong>1) Realiza un análisis de tu situación financiera</strong>
          <br />
          El primer paso es realizar un análisis de tu situación financiera
          actual y tener un buen historial crediticio, contemplar compromisos
          actuales en Buró de crédito y no contratar créditos que sobrepasen tu
          capacidad de pago.
        </p>

        <p className="text-sm text-dark-gray py-5">
          <strong>2) Elige una propiedad</strong>
          <br />
          Elige una propiedad que esté dentro de tus posibilidades. El haber
          realizado un análisis de tu situación financiera te ayudará a tomar
          una decisión objetiva. Conoce nuestros desarrollos en Querétaro, San
          Miguel de Allende, Celaya y Hermosillo.
        </p>

        <p className="text-sm text-dark-gray py-5">
          <strong>3) Considera gastos Iniciales</strong>
          <br />
          Al adquirir tu casa con un crédito deberás cubrir ciertos gastos
          iniciales como: avalúo, impuestos, derechos y honorarios notariales,
          entre otros. Además considera un enganche (generalmente entre el 10%
          al 15% del valor de la propiedad).
        </p>

        <p className="text-sm text-dark-gray py-5">
          <strong>4) Compara todas tus opciones</strong>
          <br />
          Antes de decidir, es importante que tengas en mente que cada
          institución financiera tiene condiciones distintas. La Condusef ofrece
          un simulador de crédito hipotecario en donde puedes comparar
          diferentes instituciones financieras junto con sus tasas de interés
          inicial, Costo Anual Total (CAT). Te dejamos el link aquí.
        </p>

        <p className="text-sm text-dark-gray py-5">
          <strong>5) Aprovecha todos tus recursos</strong>
          <br />
          Si estás considerando usar un crédito INFONAVIT, puedes utilizarlo
          solo o como opción de cofinanciamiento.
        </p>
      </div>
    </div>
  );
};

export default Blog4;
