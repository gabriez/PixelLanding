import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Resources } from "@/components/home/Resources";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Services />
      <Contact />
      <Resources />
    </>
  );
}
