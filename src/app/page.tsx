import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { BrandsTrust } from "@/components/home/BrandsTrust";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <BrandsTrust />
      <Contact />
    </>
  );
}
