import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700"], // Choose weights you need
  subsets: ["latin"], // Specify subset if needed
});

export const metadata = {
  title: "Rahul Dohare",
  description: "My portfolio website",
}

export default function Home() {
  return (
    <>
      <div className={outfit.className}>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
