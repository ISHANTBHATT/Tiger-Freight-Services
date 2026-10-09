// import { brand, images } from "@/lib/siteData";
// import { ArrowUpRight, PlaneIcon, StarIcon } from "./Icons";
// import { BiSolidPlaneAlt } from "react-icons/bi";

// // Missing image files fall back to the gradient automatically.
// const bg = (src, gradient) => ({
//   backgroundImage: `url(${src}), ${gradient}`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// });

// const skyGradient =
//   "linear-gradient(135deg, #0B3B66 0%, #1E6FA8 45%, #7DC3EC 100%)";

// export default function Hero() {
//   return (
//     <section id="home" className="mx-auto max-w-page px-5 pt-8 text-center">
//       <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-base font-medium text-neutral-700">
//         <BiSolidPlaneAlt className="h-4 w-4 text-brand text-main" />
//         {brand.tagline}
//       </span>

//       <h1 className="text-neutral-900 mx-auto mt-5 max-w-5xl font-display text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-7xl">
//         Fast Reliable Cargo &amp; Freight Delivery Worldwide
//       </h1>

//       <div
//         className="relative mt-10 h-[420px] overflow-hidden rounded-3xl text-left sm:h-[460px] "
//         style={bg(images.hero, skyGradient)}
//       >
//         {/* Notch with CTA buttons */}
//         <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-6 rounded-b-3xl bg-white px-10 pb-4 pt-3">
//           <a href="#quote" className="btn-primary whitespace-nowrap text-base bg-main text-white py-2 px-4 rounded-full">
//             Get Instant Quote
//           </a>
//           <a
//             href="#track"
//             className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-neutral-100 px-4 py-2 text-base font-medium text-main transition hover:bg-neutral-200"
//           >
//             Track Shipment
//             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand">
//               <ArrowUpRight className="h-3 w-3" />
//             </span>
//           </a>
//         </div>

//         {/* Decorative plane for the gradient fallback */}
//         {/* <PlaneIcon className="absolute right-[18%] top-[22%] hidden h-40 w-40 rotate-45 text-white/20 sm:block" /> */}

//         {/* Thumbnails */}
//         {/* <div className="absolute left-5 top-16 flex gap-2 sm:left-8">
//           <div
//             className="h-16 w-20 rounded-xl border-2 border-white/80 shadow-lg sm:h-[62px] sm:w-[70px]"
//             style={bg(images.heroThumbA, "linear-gradient(135deg,#0B3B66,#38BDF8)")}
//           />
//           <div
//             className="h-16 w-12 rounded-xl border-2 border-white/80 shadow-lg sm:h-[62px] sm:w-[28px]"
//             style={bg(images.heroThumbB, "linear-gradient(135deg,#071F36,#1E6FA8)")}
//           />
//         </div> */}

//         {/* Rating */}
//         <div className="absolute bottom-6 left-5 text-white sm:left-8">
//           <p className="text-2xl font-semibold">4.9/5</p>
//           <div className="mt-1 flex gap-0.5 text-amber-400">
//             {[1, 2, 3, 4].map((i) => (
//               <StarIcon key={i} className="h-4 w-4" />
//             ))}
//             <StarIcon className="h-4 w-4" filled={false} />
//           </div>
//         </div>

//         <p className="absolute bottom-6 right-5 max-w-[240px] text-right text-xs leading-relaxed text-white/90 sm:right-8 sm:text-sm">
//           Ship documents, parcels, and heavy cargo by air with real-time
//           tracking and full transparency.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand, images } from "@/lib/siteData";
import { ArrowUpRight, StarIcon } from "./Icons";
import { BiSolidPlaneAlt } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

// Missing image files fall back to the gradient automatically.
const skyGradient =
  "linear-gradient(135deg, #0B3B66 0%, #1E6FA8 45%, #7DC3EC 100%)";

const HEADING = "Fast Reliable Cargo & Freight Delivery Worldwide";
const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const ratingRef = useRef(null);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };

      // Image parallax + heading drift while scrolling away
      gsap.fromTo(bgRef.current, { yPercent: 0 }, { yPercent: 9, ease: "none", scrollTrigger });
      gsap.to(headingRef.current, { yPercent: -12, opacity: 0.35, ease: "none", scrollTrigger });

      // Rating count-up
      const counter = { v: 0 };
      gsap.to(counter, {
        v: 4.9,
        duration: 1.8,
        delay: 1,
        ease: "power2.out",
        onUpdate: () => {
          if (ratingRef.current) ratingRef.current.textContent = `${counter.v.toFixed(1)}/5`;
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="mx-auto max-w-page px-5 pt-8 text-center pb-20"
    >
      <motion.span
        initial={{ opacity: 0, y: -16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease }}
        className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-base font-medium text-neutral-700"
      >
        <BiSolidPlaneAlt className="h-4 w-4 text-brand text-main" />
        {brand.tagline}
      </motion.span>

      <h1
        ref={headingRef}
        className="text-neutral-900 mx-auto mt-5 max-w-5xl font-display text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-7xl"
      >
        {HEADING.split(" ").map((word, i) => (
          <span
            key={i}
            className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-bottom"
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.07 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease, delay: 0.5 }}
        className="relative mt-10 h-[420px] overflow-hidden rounded-3xl text-left sm:h-[460px]"
      >
        {/* Parallax image layer */}
        <div
          ref={bgRef}
          aria-hidden="true"
          className="absolute left-0 top-[-12%] h-[124%] w-full"
          style={{
            background: `url(${images.hero}) center / cover no-repeat, ${skyGradient}`,
          }}
        />

        {/* Notch with CTA buttons (outer div positions, inner div animates) */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.1 }}
            className="flex items-center gap-6 rounded-b-3xl bg-white px-10 pb-4 pt-3"
          >
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-6 py-3 whitespace-nowrap text-base bg-main text-white text-sm rounded-full"
            >
              Get Instant Quote
            </motion.a>
            {/* <motion.a
              href="#track"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-neutral-100 px-4 py-2 text-base font-medium text-main transition-colors hover:bg-neutral-200"
            >
              Track Shipment
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand">
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </motion.a> */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className=""
            >
              <a href="#quote" className="group inline-flex items-center gap-2">
                <span className="rounded-full text-main border border-main bg-white px-6 py-3 text-sm font-medium  transition group-hover:bg-main group-hover:text-white">
                Track Shipment
                </span>
                <span className="flex h-11 w-11 text-main border border-main items-center justify-center rounded-full bg-white  transition group-hover:rotate-45 group-hover:bg-main group-hover:text-white">
                  <ArrowUpRight />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.9 }}
          className="absolute bottom-6 left-5 text-white sm:left-8"
        >
          <p ref={ratingRef} className="text-2xl font-semibold">
            4.9/5
          </p>
          <div className="mt-1 flex gap-0.5 text-amber-400">
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 14, delay: 1.2 + i * 0.1 }}
              >
                <StarIcon className="h-4 w-4" />
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 1.7 }}
            >
              <StarIcon className="h-4 w-4" filled={false} />
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 1 }}
          className="absolute bottom-6 right-5 max-w-[240px] text-right text-xs leading-relaxed text-white/90 sm:right-8 sm:text-sm"
        >
          Ship documents, parcels, and heavy cargo by air with real-time
          tracking and full transparency.
        </motion.p>
      </motion.div>
    </section>
  );
}
