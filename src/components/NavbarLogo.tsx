import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <div className=" py-2 rounded-b-2xl px-16 w-55">
      <Image
        src="/PixelLogo.png"
        alt="Logo Pixel"
        width={207.95}
        height={71}
        className="block w-full"
      />
    </div>
  );
};
