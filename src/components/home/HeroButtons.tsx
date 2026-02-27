import { ScheduleButton } from "../ScheduleButton";

export const HeroButtons = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:w-full gap-4 sm:gap-8 mt-2">
      <ScheduleButton />
      <button className="cursor-pointer text-white max-sm:w-full border border-(--primary-color) px-5 py-3 rounded-xl hover:bg-(--primary-color)/20 transition 2xl:text-lg">
        Ver cómo trabajamos
      </button>
    </div>
  );
};
