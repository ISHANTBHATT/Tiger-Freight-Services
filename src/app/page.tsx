// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Clients from "./components/Clients";
// import About from "./components/About";
// import Faq from "./components/Faq";
// import Cta from "./components/Cta";
// import Footer from "./components/Footer";
// import LogisticsServices from "./components/LogisticsServices";
// import WhyChooseUs from "./components/WhyChooseUs";
// export default function Home() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <main className=" bg-white font-sans">
//         <Hero />
//         {/* <Clients /> */}
//         <About />
//         <LogisticsServices />
//         <WhyChooseUs />
//         <Faq />
//         <Cta />
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

import StackSection from "./components/StackSection";
import Hero from "./components/Hero";
import About from "./components/About";
import LogisticsServices from "./components/LogisticsServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

// Navbar stays in app/layout.js. Footer now lives here (remove it from layout)
// so it can slide over the CTA like every other section.
export default function Home() {
  return (
    <main className="bg-white font-sans">
      <StackSection index={0}>
        <Hero />
      </StackSection>
      <StackSection index={1}>
        <About />
      </StackSection>
      <StackSection index={2}>
        <LogisticsServices />
      </StackSection>
      <StackSection index={3}>
        <WhyChooseUs />
      </StackSection>
      <StackSection index={4}>
        <Faq />
      </StackSection>
      <StackSection index={5} stick={false}>
        <Cta />
      </StackSection>
      {/* <StackSection index={6} stick={false} bg="bg-[#111111]">
        <Footer />
      </StackSection> */}
    </main>
  );
}
