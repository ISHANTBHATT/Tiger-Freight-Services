
import AboutHero from "../components/about/AboutHero";
import Principals from "../components/about/Principals";
import Services from "../components/about/Services";
import SocialStickers from "../components/about/SocialStickers";
import ContactFooter from "../components/about/ContactFooter";
import Navbar from "../components/about/Navbar";

export default function Home() {
  return (
    <div className="px-20 pt-10">
        <AboutHero />
        <Principals />
        <Services />
        <SocialStickers />
      <ContactFooter />
    </div>
  );
}
