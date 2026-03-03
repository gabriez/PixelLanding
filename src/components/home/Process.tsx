import { IconView } from "../common/IconView";
import { processData } from "../data/Process";

export const Process = () => {
  return (
    <section
      id="process"
      className="bg-linear-to-r from-[#18083A] from-[28.57%] via-[#090820] via-[48.68%] to-[#0C1019] to-[66.75%] py-20"
    >
      <article>
        <h1 className="text-center text-4xl font-bold text-white">
          Nuestro <span className="text-gradient">proceso</span> de trabajo
        </h1>
        <p className="text-center text-sm text-[#7E96A3] pt-4">
          Un método claro y eficiente que garantiza resultados en cada etapa.
        </p>
      </article>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-[10%] mt-12">
        {processData.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="p-3 bg-[#24203B] rounded-2xl w-fit">
              <IconView
                icon={item.icon}
                className="w-15 h-15 text-purple-500"
              />
            </div>
            <span className="text-purple-800 font-medium">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-white text-lg font-bold">{item.title}</h4>
            <span className="text-[#7E96A3] text-sm font-medium">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
