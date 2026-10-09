// import { images, stats } from "@/lib/siteData";

// export default function About() {
//   return (
//     <section id="about" className="mx-auto mt-24 max-w-page px-5 text-center">
//       <p className="section-label text-xl">About us</p>
//       <h2 className="mx-auto max-w-3xl font-display text-4xl font-medium leading-snug sm:text-5xl">
//         Transvia powered by experience
//         <br />
//         Driven by technology.
//       </h2>

//       <div className="mt-12 grid items-center gap-10 text-left md:grid-cols-2 md:px-16">
//         <div>
//           <p className="text-xl leading-relaxed text-neutral-500">
//             <span className="font-semibold text-black">
//               At Transvia, we simplify air cargo movement through smart
//               processes,
//             </span>{" "}
//             trusted airline partners, and real-time visibility, helping
//             businesses{" "}
//             <span className="font-semibold text-black">
//               ship confidently across borders and cities by air.
//             </span>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
//           </p>

//           {/* <div className="mt-10 flex flex-wrap gap-8">
//             {stats.map((s) => (
//               <div key={s.label}>
//                 <p className="text-3xl font-semibold">
//                   {s.value}{" "}
//                   <span className="text-sm font-normal text-neutral-500">
//                     {s.label}
//                   </span>
//                 </p>
//                 <p className="mt-1 text-xs text-neutral-500">{s.caption}</p>
//               </div>
//             ))}
//           </div> */}
//         </div>

//         <div
//           className="h-72 w-full rounded-3xl md:ml-auto md:max-w-sm"
//           style={{
//             backgroundImage: `url(${images.about}), linear-gradient(160deg, #7DC3EC 0%, #1E6FA8 60%, #0B3B66 100%)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           role="img"
//           aria-label="Air cargo aircraft being loaded at an airport"
//         />
//       </div>
//     </section>
//   );
// }

//2
// import { images } from "@/lib/siteData";

// // Drop a photo at public/images/about-detail.jpg (falls back to a gradient).
// const detailImage = "/images/about-detail.jpg";

// const bannerGradient =
//   "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 45%, #FB923C 100%)";
// const detailGradient =
//   "linear-gradient(120deg, #FFEDD5 0%, #FDBA74 60%, #F97316 100%)";

// function QuoteIcon({ className = "h-9 w-9" }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
//       <path d="M4 13.5C4 9.4 6.4 6.3 10 5.3l.7 1.6C8.6 7.8 7.6 9.2 7.5 11H10v7H4v-4.5zm9 0c0-4.1 2.4-7.2 6-8.2l.7 1.6c-2.1.9-3.1 2.3-3.2 4.1H19v7h-6v-4.5z" />
//     </svg>
//   );
// }

// function SunburstIcon({ className = "h-8 w-8" }) {
//   return (
//     <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
//       {Array.from({ length: 12 }).map((_, i) => (
//         <ellipse
//           key={i}
//           cx="16"
//           cy="6.5"
//           rx="2.6"
//           ry="5"
//           fill="currentColor"
//           transform={`rotate(${i * 30} 16 16)`}
//         />
//       ))}
//       <circle cx="16" cy="16" r="3" className="fill-brand" />
//     </svg>
//   );
// }

// function ArrowDown({ className = "h-7 w-7" }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
//       <path d="M12 3v18M5 14l7 7 7-7" />
//     </svg>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="mx-auto mt-24 max-w-page px-5 lg:px-20">
//       {/* ---------- Banner row ---------- */}
//       <div className="relative md:pt-[70px]">
//         <p className="mb-4 max-w-sm text-sm leading-relaxed text-neutral-600 md:absolute md:right-0 md:top-0 md:mb-0">
//           Learn about our commitment to excellence, innovation, and the
//           principles that guide our air cargo operations every day.
//         </p>

//         <div className="relative h-[300px] md:h-[400px]">
//           {/* Image */}
//           <div
//             className="absolute inset-0 rounded-3xl"
//             style={{
//               backgroundImage: `url(${images.about}), ${bannerGradient}`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             role="img"
//             aria-label="Air cargo aircraft on an airport apron"
//           />

//           {/* Title notch (top-left) */}
//           <div className="absolute left-0 top-0 z-10 hidden bg-white pb-3 pr-8 md:-top-[70px] md:block md:rounded-br-3xl">
//             <h2 className="font-display text-5xl font-normal leading-[1.25] tracking-tight">
//             <span className="text-[#F38F04]">//</span>  Our Story, Vision,
//               <br />
//               and Values{" "}
//               <span className="text-[#F38F04]">//</span>
//             </h2>
//             {/* inverse corner where notch meets image top */}
//             <span className="absolute -right-6 top-[70px] h-6 w-6 rounded-tl-3xl shadow-[-12px_-12px_0_12px_white]" />
//             <span className="absolute  -bottom-6 h-6 w-6 rounded-tl-3xl shadow-[-12px_-12px_0_12px_white]" />
//           </div>

//           {/* Mobile title (no notch) */}
//           <h2 className="absolute left-5 top-5 z-10 font-display text-3xl font-medium leading-tight text-white drop-shadow md:hidden">
//             Our Story, Vision,
//             <br />
//             and Values
//           </h2>

//           {/* Scroll button notch (bottom-right) */}
//           <div className="absolute bottom-0 right-0 z-10 rounded-tl-3xl bg-white p-2.5 pr-0 pb-0 md:p-3 md:pb-0 md:pr-0">
//             <a
//               href="#story"
//               aria-label="Scroll to story"
//               className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-main text-white transition hover:bg-brand-dark md:mb-0"
//             >
//               <ArrowDown />
//             </a>
//             <span className="absolute -top-6 right-0 h-6 w-6 rounded-br-3xl shadow-[12px_12px_0_5px_white]" />
//             <span className="absolute -left-6 bottom-0 h-6 w-6 rounded-br-3xl shadow-[12px_12px_0_5px_white]" />
//           </div>
//         </div>
//       </div>

//       {/* ---------- Story row ---------- */}
//       <div id="story" className="mt-16 grid scroll-mt-24 gap-8 md:grid-cols-2">
//         <div className="flex flex-col justify-between gap-8">
//           <div>
//             <QuoteIcon className="h-9 w-9 text-neutral-300" />
//             <p className="mt-5 text-2xl leading-[1.45] text-ink md:text-[26px]">
//               Our team of air cargo experts works tirelessly to move your
//               freight on time, every time, ensuring every shipment we handle
//               not only meets but exceeds expectations. We are dedicated to
//               turning complex airline schedules, customs rules and tight
//               deadlines into smooth, transparent deliveries you can rely on.
//             </p>
//           </div>

//           {/* <div
//             className="h-36 w-full rounded-3xl md:h-[125px]"
//             style={{
//               backgroundImage: `url(${images.heroThumbA}), ${detailGradient}`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             role="img"
//             aria-label="Air cargo containers being loaded onto an aircraft"
//           /> */}
//         </div>

//         <div className="rounded-3xl bg-brand p-8 text-white md:p-10 bg-main">
//           <div className="flex items-center justify-end gap-3">
//             <span className="text-sm font-semibold uppercase tracking-wide">
//               About us
//             </span>
//             <SunburstIcon className="h-8 w-8 text-white" />
//           </div>

//           <div className="mt-12 space-y-6 text-sm leading-relaxed text-white/90">
//             <p>
//               We believe in the power of partnership and precision. By working
//               closely with our clients and airline partners, we gain a deep
//               understanding of their unique shipping needs and deadlines,
//               allowing us to deliver customized air freight solutions that
//               truly make a difference. Our holistic approach brings together
//               routing, documentation and real-time tracking to create seamless
//               door-to-door deliveries.
//             </p>
//             <p>
//               By staying ahead of the curve and embracing the latest logistics
//               technology, we provide cutting-edge solutions that not only
//               address today&apos;s challenges but anticipate tomorrow&apos;s
//               opportunities. Let us help you move your cargo across borders
//               and continents with confidence and flair.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/lib/siteData";

gsap.registerPlugin(ScrollTrigger);

const bannerGradient =
  "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 45%, #FB923C 100%)";

const STORY =
  "Our team of air cargo experts works tirelessly to move your freight on time, every time, ensuring every shipment we handle not only meets but exceeds expectations. We are dedicated to turning complex airline schedules, customs rules and tight deadlines into smooth, transparent deliveries you can rely on.";

/* ---------------- Framer Motion (play once, when in view) ---------------- */
const ease = [0.22, 1, 0.36, 1];
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

function Line({ children, delay = 0 }) {
  return (
    // Observe the (unclipped) wrapper; the inner span slides up from below it.
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="block overflow-hidden pb-1"
    >
      <motion.span
        className="block"
        variants={{
          hidden: { y: "110%" },
          show: { y: 0, transition: { duration: 0.8, ease, delay } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

function QuoteIcon({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 13.5C4 9.4 6.4 6.3 10 5.3l.7 1.6C8.6 7.8 7.6 9.2 7.5 11H10v7H4v-4.5zm9 0c0-4.1 2.4-7.2 6-8.2l.7 1.6c-2.1.9-3.1 2.3-3.2 4.1H19v7h-6v-4.5z" />
    </svg>
  );
}

function SunburstIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="16"
          cy="6.5"
          rx="2.6"
          ry="5"
          fill="currentColor"
          transform={`rotate(${i * 30} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="3" className="fill-brand" />
    </svg>
  );
}

function ArrowDown({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3v18M5 14l7 7 7-7" />
    </svg>
  );
}

export default function About() {
  const bannerRef = useRef(null);
  const parallaxRef = useRef(null);
  const storyRef = useRef(null);
  const cardRef = useRef(null);
  const sunRef = useRef(null);

  /* ---------------- GSAP scroll animations ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1) Banner image parallax
      gsap.fromTo(
        parallaxRef.current,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 2) Story paragraph: words light up as you scroll
      gsap.fromTo(
        storyRef.current.querySelectorAll("[data-word]"),
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );

      // 3) Sunburst rotates with scroll
      gsap.to(sunRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="about" className="mx-auto py-20 max-w-page px-5 lg:px-20">
      {/* ---------- Banner row ---------- */}
      <div className="relative md:pt-[70px]">
        <motion.p
          variants={fadeUp}
          {...inView}
          className="mb-4 max-w-sm text-sm leading-relaxed text-neutral-600 md:absolute md:right-0 md:top-0 md:mb-0"
        >
          Learn about our commitment to excellence, innovation, and the
          principles that guide our air cargo operations every day.
        </motion.p>

        <div ref={bannerRef} className="relative h-[300px] md:h-[400px]">
          {/* Image: clip reveal > parallax layer > slow zoom */}
          {/* The unclipped wrapper is what Framer observes: a fully clipped
              element would never count as "in view". */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="absolute inset-0"
          >
            <motion.div
              variants={{
                hidden: { clipPath: "inset(0 0 100% 0 round 24px)" },
                show: {
                  clipPath: "inset(0 0 0% 0 round 24px)",
                  transition: { duration: 1.2, ease },
                },
              }}
              className="absolute inset-0 overflow-hidden rounded-3xl"
              role="img"
              aria-label="Air cargo aircraft on an airport apron"
            >
              <div
                ref={parallaxRef}
                className="absolute left-0 top-[-6%] h-[112%] w-full"
              >
                <motion.div
                  variants={{
                    hidden: { scale: 1.2 },
                    show: { scale: 1, transition: { duration: 1.8, ease } },
                  }}
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${images.about}), ${bannerGradient}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Title notch (top-left) */}
          <div className="absolute left-0 top-0 z-10 hidden bg-white pb-3 pr-8 md:-top-[70px] md:block md:rounded-br-3xl">
            <h2 className="font-display text-5xl font-normal leading-[1.25] tracking-tight">
              <Line>
                <span className="text-[#F38F04]">//</span> Our Story, Vision,
              </Line>
              <Line delay={0.1}>
                and Values <span className="text-[#F38F04]">//</span>
              </Line>
            </h2>
            {/* inverse corner where notch meets image top */}
            <span className="absolute -right-6 top-[70px] h-6 w-6 rounded-tl-3xl shadow-[-12px_-12px_0_12px_white]" />
            <span className="absolute  -bottom-6 h-6 w-6 rounded-tl-3xl shadow-[-12px_-12px_0_12px_white]" />
          </div>

          {/* Mobile title (no notch) */}
          <h2 className="absolute left-5 top-5 z-10 font-display text-3xl font-medium leading-tight text-white drop-shadow md:hidden">
            Our Story, Vision,
            <br />
            and Values
          </h2>

          {/* Scroll button notch (bottom-right) */}
          <div className="absolute bottom-0 right-0 z-10 rounded-tl-3xl bg-white p-2.5 pr-0 pb-0 md:p-3 md:pb-0 md:pr-0">
            <motion.a
              href="#story"
              aria-label="Scroll to story"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-main text-white transition-colors hover:bg-brand-dark md:mb-0"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowDown />
              </motion.span>
            </motion.a>
            <span className="absolute -top-6 right-0 h-6 w-6 rounded-br-3xl shadow-[12px_12px_0_5px_white]" />
            <span className="absolute -left-6 bottom-0 h-6 w-6 rounded-br-3xl shadow-[12px_12px_0_5px_white]" />
          </div>
        </div>
      </div>

      {/* ---------- Story row ---------- */}
      <div id="story" className="mt-16 grid scroll-mt-24 gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="w-fit"
            >
              <QuoteIcon className="h-9 w-9 text-neutral-300" />
            </motion.div>
            <p
              ref={storyRef}
              className="mt-5 text-2xl leading-[1.45] text-ink md:text-[26px]"
            >
              {STORY.split(" ").map((word, i) => (
                <span key={i} data-word className="mr-[0.25em] inline-block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="rounded-3xl bg-brand p-8 text-white md:p-10 bg-main"
        >
          <div className="flex items-center justify-end gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide">
              About us
            </span>
            <span ref={sunRef} className="flex">
              <SunburstIcon className="h-8 w-8 text-white" />
            </span>
          </div>

          <motion.div
            variants={stagger}
            {...inView}
            className="mt-12 space-y-6 text-sm leading-relaxed text-white/90"
          >
            <motion.p variants={fadeUp}>
              We believe in the power of partnership and precision. By working
              closely with our clients and airline partners, we gain a deep
              understanding of their unique shipping needs and deadlines,
              allowing us to deliver customized air freight solutions that
              truly make a difference. Our holistic approach brings together
              routing, documentation and real-time tracking to create seamless
              door-to-door deliveries.
            </motion.p>
            <motion.p variants={fadeUp}>
              By staying ahead of the curve and embracing the latest logistics
              technology, we provide cutting-edge solutions that not only
              address today&apos;s challenges but anticipate tomorrow&apos;s
              opportunities. Let us help you move your cargo across borders
              and continents with confidence and flair.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
