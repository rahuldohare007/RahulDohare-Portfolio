import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700"], // Choose weights you need
  subsets: ["latin"], // Specify subset if needed
});

export default function Home() {
  return (
    <>
      <div className={outfit.className}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
