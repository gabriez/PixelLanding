import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Resources } from "@/components/home/Resources";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Navbar } from "@/components/Navbar";
import { BrandsTrust } from "@/components/home/BrandsTrust";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <BrandsTrust />
      <Contact />
      <Resources />
    </>
  );
}
