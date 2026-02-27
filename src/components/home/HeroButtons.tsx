export const HeroButtons = () => {
  return (
    <div className="flex gap-8">
      <button className="schedule-assesory cursor-pointer">
        Agenda una asesoría gratuita
      </button>
      <button className="cursor-pointer text-white border border-(--primary-color) px-5 py-3 rounded-xl hover:bg-(--primary-color)/20 transition">
        Ver cómo trabajamos
      </button>
    </div>
  );
};
