import { primaryColor } from "@/constants";

export const Header = () => {
  return (
    <div className="pt-40 pb-96 flex flex-col items-start justify-start px-10 gap-4  bg-linear-[140deg] from-[#1D0843] from-[28.57%] via-[#09061D] via-[48.68%] to-[#0C1830] to-[66.75%]">
      <div
        className={`flex items-center  border border-[#7430e8]/20 bg-[#7430e8]/10 rounded-full px-4 py-2.5 text-sm font-medium`}
      >
        <span className={`text-[#7430e8] `}>
          🚀 Agencia de Marketing Digital
        </span>
      </div>
      <h1 className="text-white font-semibold text-6xl">
        <span className="block"> Impulsamos marcas con</span>
        <span className="block">diseño, tecnología y</span>
        <span className="block">marketing que convierten</span>
      </h1>
    </div>
  );
};
