import { brand, images, services } from "@/lib/siteData";
import Photo from "./Photo";

export default function Services() {
  return (
    <section className="mx-auto mt-28 max-w-page px-5 md:mt-36 xl:px-0">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20 md:px-14">
        {/* Left */}
        <div>
          <h2 className="wide font-display text-4xl font-bold leading-none md:text-6xl">
            Our Services
          </h2>
          <p className="mt-7 max-w-[400px] text-sm leading-[1.45]">
            At {brand.name}, we offer a comprehensive range of services to
            bring your interior design vision to life. Each service is tailored
            to meet the unique needs of our clients, ensuring a seamless and
            satisfying experience.
          </p>

          <Photo
            src={images.services}
            label="Styled bedroom console with city view"
            fallback="linear-gradient(160deg, #E7E2DB 0%, #B7AB9A 60%, #8C7F6E 100%)"
            className="mt-10 h-[280px] w-full max-w-[310px] rounded-[28px]"
          />
        </div>

        {/* Right */}
        <ul className="space-y-9">
          {services.map((s) => (
            <li key={s.title}>
              <h3 className="wide font-display text-3xl font-semibold uppercase leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[400px] text-sm leading-[1.45]">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
