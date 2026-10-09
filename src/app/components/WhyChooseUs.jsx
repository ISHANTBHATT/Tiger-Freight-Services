"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Theme: white + #F38F04
const BG_IMAGE = "/images/hero2.jpg";
const BG_FALLBACK =
  "linear-gradient(135deg, #1F2937 0%, #4B5563 55%, #F38F04 150%)";

const HEADING = "WHY BUSINESSES CHOOSE US FOR THEIR AIR FREIGHT & LOGISTICS";

const features = [
  {
    icon: "truck",
    title: "Fast & Secure Delivery",
    text: "We prioritize speed and safety, making sure your goods arrive on time and in perfect condition.",
  },
  {
    icon: "package",
    title: "Custom Shipping Plans",
    text: "Every business is different. We tailor logistics strategies that fit your timeline, budget, and requirements.",
  },
  {
    icon: "headset",
    title: "24/7 Tracking & Support",
    text: "Stay informed with real-time shipment tracking and a support team that is always available.",
  },
  {
    icon: "shield",
    title: "Insured & Compliant",
    text: "Every consignment is covered by cargo insurance and cleared with full customs compliance.",
  },
];

/* ---------------- Framer Motion variants (play once, when in view) ---------------- */
const ease = [0.22, 1, 0.36, 1];
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const headingV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const wordV = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.6, ease } },
};
const cardV = {
  hidden: { opacity: 0, x: 50 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease,
      delay: Math.min(i, 2) * 0.1,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  }),
};
const popV = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease } },
};

/* ---------------- Icons ---------------- */
const iconPaths = {
  truck: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>
  ),
  package: (
    <>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  headset: (
    <>
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const viewportRef = useRef(null);
  const listRef = useRef(null);

  /* ---------------- GSAP scroll animations ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        motionOk: "(prefers-reduced-motion: no-preference)",
        desktop:
          "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { motionOk, desktop } = context.conditions;

        // 1) Background parallax
        if (motionOk) {
          gsap.fromTo(
            bgRef.current,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // 2) Feature cards drift upward as you scroll, revealing the clipped ones
        if (desktop) {
          gsap.to(listRef.current, {
            y: () =>
              -Math.max(
                0,
                listRef.current.scrollHeight - viewportRef.current.clientHeight
              ),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 55%",
              end: "bottom 45%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white h-screen my-auto px-5 py-20">
      <div className="relative w-full overflow-hidden rounded-[28px]">
        {/* Parallax background */}
        <div
          ref={bgRef}
          aria-hidden="true"
          className="absolute left-0 top-[-10%] h-[120%] w-full"
          style={{
            background: `url(${BG_IMAGE}) center / cover no-repeat, ${BG_FALLBACK}`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:h-[490px] lg:grid-cols-[1fr_352px] lg:gap-10 lg:pb-0 lg:pt-10">
          {/* ---------- Left ---------- */}
          <div className="flex flex-col">
            <motion.p
              variants={fadeUp}
              {...inView}
              className="text-sm font-light uppercase tracking-wide text-white/90"
            >
              <span className="text-[#F38F04]">//</span> Why choose us{" "}
              <span className="text-[#F38F04]">//</span>
            </motion.p>

            <motion.h2
              variants={headingV}
              {...inView}
              className="mt-5 max-w-[470px] text-[32px] font-medium uppercase leading-[1.1] text-white sm:text-4xl lg:text-[44px]"
            >
              {HEADING.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
                >
                  <motion.span variants={wordV} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              {...inView}
              className="mt-8 lg:mt-auto lg:pb-8"
            >
              <a href="#quote" className="group inline-flex items-center gap-2">
                <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition group-hover:bg-[#F38F04] group-hover:text-white">
                  Get a Quote
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition group-hover:rotate-45 group-hover:bg-[#F38F04] group-hover:text-white">
                  <ArrowUpRight />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ---------- Right: feature cards ---------- */}
          <div ref={viewportRef} className="lg:h-full lg:overflow-hidden">
            <div ref={listRef} className="flex flex-col gap-3">
              {features.map((f, i) => (
                <motion.article
                  key={f.title}
                  custom={i}
                  variants={cardV}
                  {...inView}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-transparent bg-white p-6 shadow-sm transition-colors hover:border-[#F38F04]/50"
                >
                  <motion.span
                    variants={popV}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F38F04]/10 text-[#F38F04]"
                  >
                    <Icon name={f.icon} />
                  </motion.span>
                  <motion.h3
                    variants={fadeUp}
                    className="mt-5 text-lg font-semibold text-neutral-900"
                  >
                    {f.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="mt-2 text-sm leading-relaxed text-neutral-500"
                  >
                    {f.text}
                  </motion.p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//2
// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Theme: white + #F38F04
// const BG_IMAGE = "/images/hero2.jpg";
// const BG_FALLBACK =
//   "linear-gradient(135deg, #1F2937 0%, #4B5563 55%, #F38F04 150%)";

// const HEADING = "WHY BUSINESSES CHOOSE US FOR THEIR AIR FREIGHT & LOGISTICS";

// const features = [
//   {
//     icon: "truck",
//     title: "Fast & Secure Delivery",
//     text: "We prioritize speed and safety, making sure your goods arrive on time and in perfect condition.",
//   },
//   {
//     icon: "package",
//     title: "Custom Shipping Plans",
//     text: "Every business is different. We tailor logistics strategies that fit your timeline, budget, and requirements.",
//   },
//   {
//     icon: "headset",
//     title: "24/7 Tracking & Support",
//     text: "Stay informed with real-time shipment tracking and a support team that is always available.",
//   },
//   {
//     icon: "shield",
//     title: "Insured & Compliant",
//     text: "Every consignment is covered by cargo insurance and cleared with full customs compliance.",
//   },
// ];

// /* ---------------- Framer Motion variants (play once, when in view) ---------------- */
// const ease = [0.22, 1, 0.36, 1];
// const inView = {
//   initial: "hidden",
//   whileInView: "show",
//   viewport: { once: true, amount: 0.25 },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
// };
// const headingV = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
// };
// const wordV = {
//   hidden: { y: "110%" },
//   show: { y: 0, transition: { duration: 0.6, ease } },
// };
// const cardV = {
//   hidden: { opacity: 0, x: 50 },
//   show: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease,
//       delay: Math.min(i, 2) * 0.1,
//       staggerChildren: 0.08,
//       delayChildren: 0.15,
//     },
//   }),
// };
// const popV = {
//   hidden: { opacity: 0, scale: 0.5 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease } },
// };

// /* ---------------- Icons ---------------- */
// const iconPaths = {
//   truck: (
//     <>
//       <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//       <path d="M15 18H9" />
//       <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
//       <circle cx="17" cy="18" r="2" />
//       <circle cx="7" cy="18" r="2" />
//     </>
//   ),
//   package: (
//     <>
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </>
//   ),
//   headset: (
//     <>
//       <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
//       <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
//     </>
//   ),
//   shield: (
//     <>
//       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
//       <path d="m9 12 2 2 4-4" />
//     </>
//   ),
// };

// function Icon({ name, className = "h-5 w-5" }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       {iconPaths[name]}
//     </svg>
//   );
// }

// function ArrowUpRight() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
//       <path d="M7 7h10v10M7 17 17 7" />
//     </svg>
//   );
// }

// export default function WhyChooseUs() {
//   const sectionRef = useRef(null);
//   const bgRef = useRef(null);
//   const viewportRef = useRef(null);
//   const listRef = useRef(null);

//   /* ---------------- GSAP scroll animations ---------------- */
//   useEffect(() => {
//     const mm = gsap.matchMedia();

//     mm.add(
//       {
//         desktop:
//           "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
//         mobile:
//           "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
//         desktopReduced:
//           "(min-width: 1024px) and (prefers-reduced-motion: reduce)",
//       },
//       (context) => {
//         const { desktop, mobile, desktopReduced } = context.conditions;

//         // Distance the cards need to travel to reveal the clipped ones
//         const getDistance = () =>
//           Math.max(
//             0,
//             listRef.current.scrollHeight - viewportRef.current.clientHeight
//           );

//         // DESKTOP: pin the section, page stops, cards scroll inside it
//         if (desktop) {
//           const tl = gsap.timeline({
//             defaults: { ease: "none" },
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top top",
//               end: () => "+=" + getDistance(),
//               pin: true,
//               scrub: 0.6,
//               anticipatePin: 1,
//               invalidateOnRefresh: true,
//             },
//           });

//           // Cards move up
//           tl.to(listRef.current, { y: () => -getDistance() }, 0);

//           // Background parallax during the pinned scroll
//           tl.fromTo(bgRef.current, { yPercent: -7 }, { yPercent: 7 }, 0);
//         }

//         // MOBILE: no pinning, cards stack naturally, just parallax
//         if (mobile) {
//           gsap.fromTo(
//             bgRef.current,
//             { yPercent: -7 },
//             {
//               yPercent: 7,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//               },
//             }
//           );
//         }

//         // REDUCED MOTION (desktop): no animation, let the card list scroll natively
//         if (desktopReduced) {
//           const el = viewportRef.current;
//           el.style.overflowY = "auto";
//           return () => {
//             el.style.overflowY = "";
//           };
//         }
//       }
//     );

//     return () => mm.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="flex min-h-screen items-center bg-white px-5 py-10 lg:h-screen lg:py-0"
//     >
//       <div className="relative w-full overflow-hidden rounded-[28px]">
//         {/* Parallax background */}
//         <div
//           ref={bgRef}
//           aria-hidden="true"
//           className="absolute left-0 top-[-10%] h-[120%] w-full"
//           style={{
//             background: `url(${BG_IMAGE}) center / cover no-repeat, ${BG_FALLBACK}`,
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

//         <div className="relative grid gap-8 p-6 sm:p-8 lg:h-[490px] lg:grid-cols-[1fr_352px] lg:gap-10 lg:pb-0 lg:pt-10">
//           {/* ---------- Left ---------- */}
//           <div className="flex flex-col">
//             <motion.p
//               variants={fadeUp}
//               {...inView}
//               className="text-sm font-light uppercase tracking-wide text-white/90"
//             >
//               <span className="text-[#F38F04]">//</span> Why choose us{" "}
//               <span className="text-[#F38F04]">//</span>
//             </motion.p>

//             <motion.h2
//               variants={headingV}
//               {...inView}
//               className="mt-5 max-w-[470px] text-[32px] font-medium uppercase leading-[1.1] text-white sm:text-4xl lg:text-[44px]"
//             >
//               {HEADING.split(" ").map((word, i) => (
//                 <span
//                   key={i}
//                   className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
//                 >
//                   <motion.span variants={wordV} className="inline-block">
//                     {word}
//                   </motion.span>
//                 </span>
//               ))}
//             </motion.h2>

//             <motion.div
//               variants={fadeUp}
//               {...inView}
//               className="mt-8 lg:mt-auto lg:pb-8"
//             >
//               <a href="#quote" className="group inline-flex items-center gap-2">
//                 <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition group-hover:bg-[#F38F04] group-hover:text-white">
//                   Get a Quote
//                 </span>
//                 <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition group-hover:rotate-45 group-hover:bg-[#F38F04] group-hover:text-white">
//                   <ArrowUpRight />
//                 </span>
//               </a>
//             </motion.div>
//           </div>

//           {/* ---------- Right: feature cards ---------- */}
//           <div ref={viewportRef} className="lg:h-full lg:overflow-hidden">
//             <div ref={listRef} className="flex flex-col gap-3">
//               {features.map((f, i) => (
//                 <motion.article
//                   key={f.title}
//                   custom={i}
//                   variants={cardV}
//                   {...inView}
//                   viewport={{ once: true, amount: 0.2 }}
//                   whileHover={{ y: -4 }}
//                   className="rounded-[28px] border border-transparent bg-white p-6 shadow-sm transition-colors hover:border-[#F38F04]/50"
//                 >
//                   <motion.span
//                     variants={popV}
//                     className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F38F04]/10 text-[#F38F04]"
//                   >
//                     <Icon name={f.icon} />
//                   </motion.span>
//                   <motion.h3
//                     variants={fadeUp}
//                     className="mt-5 text-lg font-semibold text-neutral-900"
//                   >
//                     {f.title}
//                   </motion.h3>
//                   <motion.p
//                     variants={fadeUp}
//                     className="mt-2 text-sm leading-relaxed text-neutral-500"
//                   >
//                     {f.text}
//                   </motion.p>
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }