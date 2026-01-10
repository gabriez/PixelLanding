import { Contact } from "@/components/home/Contact";
import { Header } from "@/components/home/Header";
import { Resources } from "@/components/home/Resources";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Team />
      <Services />
      <Contact />
      <Resources />
    </>
  );
}
