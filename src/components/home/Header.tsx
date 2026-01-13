import Image from "next/image";

export const Header = () => {
  return (
    <div className="pt-40 flex items-center justify-center px-10">
      <h1>&ldquo;DALE PLAY A TU TRANSFORMACIÓN DIGITAL&rdquo;</h1>
      <Image
        src="/astronaut.png"
        alt="Astronaut"
        width={207.95}
        height={71}
        className="block w-[25vw] md:w-[15vw] lg:w-[10vw]"
      />
    </div>
  );
};
