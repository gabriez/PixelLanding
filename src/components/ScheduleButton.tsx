import Link from "next/link";

export const ScheduleButton = () => {
  return (
    <Link
      href="https://calendly.com/gabrieltdeveloper2014/30min"
      target="_blank"
      className="schedule-assesory font-bold cursor-pointer max-sm:w-full 2xl:text-lg px-6 py-4 2xl:px-7 2xl:py-5 mx-auto block"
    >
      Agenda una asesoría gratuita
    </Link>
  );
};
