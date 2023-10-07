const BlurModule = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto backdrop-blur-md p-12 relative before:block before:border-2 before:border-orange before:-top-3 before:-right-3 before:absolute before:w-full before:h-full before:-z-50">
      <h2 className="text-white text-md font-bold">
        Residencias excepcionales donde la elegancia y la comodidad se unen para
        crear experiencias inolvidables.
      </h2>
      <a
        className="text-white text-end mt-3 underline hover:text-orange"
        href="#"
      >
        Conoce nuestros desarrollos
      </a>
    </div>
  );
};

export default BlurModule;
