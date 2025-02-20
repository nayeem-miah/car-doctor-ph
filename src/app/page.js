import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Services from "@/components/HomePage/Services";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
    <About/>
    <Services/>
   </div>
  );
}
