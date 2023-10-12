import VideoTestimonial from "@assets/videos/testimonial_1.mp4";

const Testimonios = () => {
  return (
    <section className="bg-white gap-6 flex flex-wrap flex-row-reverse justify-around items-center w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
      <div className="max-w-[400px] flex flex-col gap-4 max-[1045px]:text-center">
        <h1 className="text-lg font-my-raleway">
          Conoce lo que piensan nuestros clientes de AltaVida
        </h1>
        <p className="text-sm text-dark-gray">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          omnis ut natus culpa in vero! Cupiditate pariatur neque ex? Tenetur
          similique at nam voluptatum doloremque id ullam quod eius dolor?
        </p>
      </div>
      <video
        className="w-fit max-w-[260px] mx-md:max-w-[380px]"
        src={VideoTestimonial}
        autoPlay
        controls
      ></video>
    </section>
  );
};

export default Testimonios;
