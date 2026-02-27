import { HeroButtons } from "./HeroButtons";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="pt-40 pb-96 flex flex-col items-start justify-start px-10 gap-4  bg-linear-[140deg] from-[#1D0843] from-[28.57%] via-[#09061D] via-[48.68%] to-[#0C1830] to-[66.75%]"
    >
      <div
        className={`flex items-center  border border-(--primary-color)/20 bg-(--primary-color)/10 rounded-full px-4 py-2.5 text-sm font-medium`}
      >
        <span className={`text-[#7430e8] `}>
          🚀 Agencia de Marketing Digital
        </span>
      </div>
      <h1 className=" text-white font-(--font-plus-jakarta-sans) font-[600] w-4xl text-4xl md:text-5xl lg:text-6xl leading-tight mb-2">
        Impulsamos marcas con diseño, tecnología y marketing que{" "}
        <span className="text-gradient"> convierten</span>
      </h1>
      <span className="block w-3xl text-(--muted-foreground) text-lg font-medium">
        En Pixel Agencia Creativa transformamos ideas en experiencias digitales
        que generan resultados reales.
      </span>
      <HeroButtons />
    </div>
  );
};
