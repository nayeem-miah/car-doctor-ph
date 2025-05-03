export const dynamic = "force-dynamic";  //deploy time
import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Services from "@/components/HomePage/Services";


export default function Home() {
  return (
   <div>
    <Banner/>
    <About/>
      <div className="my-10">
      <Services/>
    </div>
   </div>
  );
}
