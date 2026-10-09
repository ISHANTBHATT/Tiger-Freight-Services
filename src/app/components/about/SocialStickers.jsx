import { socials } from "@/lib/siteData";

const pill = {
  VIMEO:     { pos: "left-[8%] top-[2%]",   rot: "-rotate-[10deg]", dark: false },
  PINTEREST: { pos: "left-[19%] top-[64%]", rot: "-rotate-[10deg]", dark: false },
  FACEBOOK:  { pos: "left-[39%] top-[22%]", rot: "-rotate-[20deg]", dark: true },
  TWITTER:   { pos: "left-[38%] top-[68%]", rot: "-rotate-[5deg]",  dark: false },
  INSTAGRAM: { pos: "left-[52%] top-[36%]", rot: "rotate-[4deg]",   dark: false },
  YOUTUBE:   { pos: "left-[61%] top-[66%]", rot: "rotate-0",        dark: true },
  LINKEDIN:  { pos: "left-[68%] top-[6%]",  rot: "-rotate-[30deg]", dark: true },
};

function Lamp({ dark }) {
  const c = dark ? "#fff" : "#2E2E2E";
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      <rect x="13" y="4" width="14" height="18" rx="6" fill={c} />
      <rect x="18" y="22" width="4" height="8" fill={c} />
      <rect x="12" y="30" width="16" height="5" rx="2" fill={c} />
    </svg>
  );
}

function Badge({ id, dark, className }) {
  const text = "Consult With Us • Consult With Us • ";
  return (
    <div className={`absolute aspect-square ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_30s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id={id} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle
          cx="100" cy="100" r="98" strokeWidth="1.5"
          className={dark ? "fill-charcoal stroke-charcoal" : "fill-white stroke-charcoal"}
        />
        <text fontSize="17" fontWeight="500" className={dark ? "fill-white" : "fill-charcoal"}>
          <textPath href={`#${id}`} textLength="440" lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`flex h-[42%] w-[42%] items-center justify-center rounded-full border ${dark ? "border-white/40" : "border-charcoal/40"}`}>
          <Lamp dark={dark} />
        </div>
      </div>
    </div>
  );
}

export default function SocialStickers() {
  return (
    <section className="mx-auto mt-32 max-w-page overflow-hidden px-5 md:mt-44 xl:px-0">
      <div className="relative h-[260px] md:h-[250px]">
        <Badge id="badge-a" dark className="left-0 top-[38%] w-[110px] md:w-[158px]" />
        <Badge id="badge-b" className="left-[17%] top-[0%] w-[85px] md:w-[125px]" />
        <Badge id="badge-c" dark className="right-0 top-[24%] w-[110px] md:w-[158px]" />

        {socials.map((s) => {
          const p = pill[s.label];
          return (
            <a
              key={s.label}
              href={s.href}
              className={`absolute ${p.pos} ${p.rot} wide rounded-full border border-charcoal px-5 py-2 font-display text-base font-medium transition hover:scale-105 md:px-8 md:py-3 md:text-2xl ${
                p.dark ? "bg-charcoal text-white" : "bg-white text-charcoal"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
