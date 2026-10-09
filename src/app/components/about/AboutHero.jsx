import { brand, images } from "@/lib/siteData";
import Photo from "./Photo";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-page px-5 pt-6 xl:px-0">
      <h1 className="wide font-display text-[21vw] font-semibold leading-[0.95] tracking-tight md:text-[180px] md:leading-[96px]">
        ABOUT<span className="md:hidden "> US</span>
      </h1>

      <div className="mt-6 grid gap-8 md:mt-6 md:grid-cols-[250px_1fr_320px] md:gap-5">
        {/* Left: "US" + short descriptors */}
        <div className="flex flex-col justify-around md:min-h-[222px]">
          <span
            aria-hidden="true"
            className="wide hidden font-display md:text-[180px] font-semibold leading-[96px] tracking-tight md:block"
          >
            US
          </span>
          <div className="space-y-9 text-sm leading-[1.45]">
            <p>Luxurious Interior and Industrial Design</p>
            <p>
              Modern Elegance: Designs featuring clean lines, neutral palettes,
              and high-quality materials.
            </p>
          </div>
        </div>

        {/* Middle: large image */}
        <Photo
          src={images.aboutHeroLarge}
          label="Luxury living room interior"
          className="h-[260px] rounded-[32px] md:h-[350px]"
        />

        {/* Right: small image + philosophy */}
        <div>
          <Photo
            src={images.aboutHeroSmall}
            label="Detail of a lounge interior"
            fallback="linear-gradient(135deg, #CFC6BA 0%, #8C7F6E 100%)"
            className="h-[200px] rounded-[28px]"
          />
          <h2 className="wide mt-5 font-display text-[26px] font-bold leading-none">
            Our Philosophy
          </h2>
          <p className="mt-5 text-sm leading-[1.45]">
            At {brand.name}, we believe in creating luxurious, personalized
            environments that reflect our clients&apos; tastes and lifestyles.
          </p>
        </div>
      </div>
    </section>
  );
}
