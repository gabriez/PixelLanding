import { ServicesCard } from "@/types/Services";
import { IconView } from "../common/IconView";
import { servicesCardData, servicesPresenceData } from "../data/Services";
import { X, Check, LucideProps } from "lucide-react";

const iconClass = "w-8.5 h-8.5 shrink-0";

/* Values Grid for services Card*/

const total = servicesCardData.length;
const remainder = total % 3;
const fullRows = Math.floor(total / 3);

/* Service Card */
const Card = ({ card }: ServicesCard) => (
  <div className="bg-[#181B25] p-7 rounded-2xl">
    <div className="p-2 bg-[#241F3B] rounded-2xl w-fit">
      <IconView icon={card.icon} className="w-10 h-10 text-purple-500" />
    </div>

    <h4 className="pt-3 text-white text-2xl font-bold">{card.title}</h4>

    <span className="text-[#7E96A3] pt-2 block text-sm">
      {card.description}
    </span>
  </div>
);

export const Services = () => {
  return (
    <section
      className="min-h-screen pt-20 pb-25 bg-linear-to-r from-[#18083A] from-[28.57%] via-[#090820] via-[48.68%] to-[#0C1019] to-[66.75%]"
      id="services"
    >
      <article>
        <h1 className="text-center pt-17 text-4xl font-semibold px-4">
          <span className="text-white">Tu negocio merece más</span>
          <span className="bg-linear-to-r from-[#6D34E6] to-[#4678F2] bg-clip-text text-transparent pl-2">
            que presencia digital
          </span>
        </h1>
        <h3 className="text-center text-gray-500 px-[15%] font-normal pt-1.5">
          Muchas empresas invierten en digital sin ver resultados. Nosotros
          cambiamos eso con estrategia, diseño y tecnología que funcionan.
        </h3>
      </article>

      <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-[10%] mt-12">
        {servicesPresenceData.map((card, index) => (
          <div
            key={`section-cards-${index}`}
            className="rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm p-6"
          >
            <ul className="flex flex-col gap-3">
              {card.items.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  {item.type === "error" ? (
                    <Check className={`text-purple-700 ${iconClass}`} />
                  ) : (
                    <X className={`text-orange-600 ${iconClass}]`} />
                  )}
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>

      {/* Services marketing */}
      <section className=" pt-20 pb-15 bg-linear-to-r from-[#18083A] from-[28.57%] via-[#090820] via-[48.68%] to-[#0C1019] to-[66.75%]">
        <div>
          <h1 className="text-center pt-17 sm:text-3xl md:text-4xl px-4 font-semibold ">
            <span className="text-white">Servicios de</span>
            <span className="bg-linear-to-r from-[#6D34E6] to-[#4678F2] bg-clip-text text-transparent pl-2">
              marketing digital
            </span>
            <span className="text-white pl-2">y desarrollo</span>
          </h1>
          <h3 className="text-center text-gray-500 px-[15%] font-normal pt-1.5">
            Todo lo que tu marca necesita para crecer, en un solo lugar.
          </h3>
        </div>
      </section>
      <article className="px-[10%] mt-1">
        {/* Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {servicesCardData.map((card, index) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-6">
          {/* Filas completas */}
          {Array.from({ length: fullRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-6">
              {servicesCardData
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((card) => (
                  <Card key={card.id} card={card} />
                ))}
            </div>
          ))}

          {/* Ultimas filas */}
          {remainder > 0 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 w-[66%]">
                {servicesCardData.slice(-remainder).map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};
