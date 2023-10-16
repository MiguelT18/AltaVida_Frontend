import HeaderTitle from "@src/components/HeaderTitle";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import FocoPicture from "../assets/images/blog/ahorra/FocoPicture.webp";

const BlogView = () => {
  return (
    <section className="bg-navy-blue text-white py-14 pb-20">
      <HeaderTitle
        title="Blog"
        description="Entérate de nuestras últimas noticias"
        lineClass="bg-white"
      />

      <article className="pt-10 flex max-md:flex-col-reverse justify-center items-center mx-8">
        <div className="bg-white text-dark-gray w-full max-w-[520px] h-fit p-12 pr-28 max-md:p-10 max-sm:p-6 max-sm:pt-20 max-md:pt-16">
          <h2 className="text-lg font-my-raleway font-bold">
            Ahorra energía en casa con estos tips y bájale a tu recibo de luz
          </h2>
          <p className="text-sm">
            Descubre cómo ahorrar energía en casa y reducir tus gastos
            mensuales. Con consejos prácticos y efectivos, aprenderás a cuidar
            el medio ambiente mientras ahorras dinero.
          </p>
          <div className="text-sm flex items-center w-full justify-between gap-2 pt-5">
            <Link
              to={"/blog"}
              className="bg-orange hover:bg-[#De7700] py-2 px-4 block w-fit transition-all text-white font-my-raleway font-bold rounded-md"
            >
              Ver noticia
            </Link>
            <span className="flex items-center gap-2">
              <AiFillEye stroke="#fff" size={"1em"} />
              3240
            </span>
          </div>
        </div>

        <img
          className="w-[50%] h-full -ml-16 max-md:-mb-10"
          src={FocoPicture}
          alt="Entérate de nuestras últimas noticias en nuestro blog"
        />
      </article>
    </section>
  );
};

export default BlogView;
