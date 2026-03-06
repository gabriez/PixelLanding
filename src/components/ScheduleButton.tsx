import Link from "next/link";

export const ScheduleButton = () => {
  return (
    <Link
      href="https://calendly.com/gabrieltdeveloper2014/30min"
      target="_blank"
      className="schedule-assesory font-bold cursor-pointer text-center max-sm:w-full 2xl:text-lg px-7 py-5 mx-auto block"
    >
      Agenda una asesoría gratuita
    </Link>
  );
};
