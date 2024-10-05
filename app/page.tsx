import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}/>
        <Hero/>
        <Projects/>
        {/*<Skills/>
        <Experience/>
        <Contact/>*/}
      </div>
    </main>
  );
}
