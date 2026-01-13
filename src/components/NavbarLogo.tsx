import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <div className="bg-white py-2 rounded-b-2xl px-16 w-fit">
      <Image
        src="/LOGO.png"
        alt="Logo Pixel"
        width={207.95}
        height={71}
        className="block"
      />
    </div>
  );
};
