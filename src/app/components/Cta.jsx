// import { images } from "@/lib/siteData";
// import { ArrowUpRight } from "./Icons";

// export default function Cta() {
//   return (
//     <section id="quote" className="mx-auto mt-24 max-w-page px-5 pb-24 md:px-16">
//       <div
//         className="relative overflow-hidden rounded-3xl"
//         style={{
//           backgroundImage: `url(${images.cta}), linear-gradient(120deg, #0B3B66 0%, #1E6FA8 70%, #7DC3EC 100%)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy/60 to-transparent" />
//         <div className="relative px-8 py-16 sm:px-12 sm:py-20">
//           <h2 className="font-display text-4xl font-medium text-neutral-900">
//             Ready to ship smarter?
//           </h2>
//           <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-700">
//             From planning to delivery, Transvia helps you move air cargo
//             faster, safer, and with complete visibility.
//           </p>
//           <a
//             href="#contact"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-main py-1.5 pl-5 pr-1.5 text-xs font-semibold text-white transition hover:bg-orange-500"
//           >
//             Let&apos;s Get Started
//             <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand">
//               <ArrowUpRight className="h-3.5 w-3.5 text-main" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


//2
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/lib/siteData";
import { ArrowUpRight } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const HEADING = "Ready to ship smarter?";
const ease = [0.22, 1, 0.36, 1];

export default function Cta() {
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const btnRef = useRef(null);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Magnetic button (mouse devices only)
    mm.add("(hover: hover) and (pointer: fine)", () => {
      const el = btnRef.current;
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
      const move = (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="quote" className="mx-auto mt-24 max-w-page px-5 pb-24 md:px-16">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* Parallax background */}
        <div
          ref={bgRef}
          aria-hidden="true"
          className="absolute left-0 top-[-10%] h-[120%] w-full"
          style={{
            backgroundImage: `url(${images.cta}), linear-gradient(120deg, #0B3B66 0%, #1E6FA8 70%, #7DC3EC 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy/60 to-transparent" />

        <div className="relative px-8 py-16 sm:px-12 sm:py-20">
          {/* Observe the h2 itself; words are clipped until they slide up */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
            className="font-display text-4xl font-medium text-neutral-900"
          >
            {HEADING.split(" ").map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: 0, transition: { duration: 0.8, ease } },
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-700"
          >
            From planning to delivery, Transvia helps you move air cargo
            faster, safer, and with complete visibility.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.8 }}
            className="mt-8 w-fit"
          >
            <a
              ref={btnRef}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-main py-1.5 pl-5 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Let&apos;s Get Started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5 text-main" />
              </span>
            </a>
          </motion.div> */}
          <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease, delay: 0.8 }}
    className="mt-8 w-fit"
            >
              <a  ref={btnRef}
              href="#contact" className="group inline-flex items-center gap-2">
                <span className="rounded-full text-white border border-main bg-main px-6 py-3 text-sm font-medium  transition group-hover:bg-orange-400 group-hover:text-white">
                Let&apos;s Get Started
                </span>
                <span className="flex h-11 w-11 text-white border border-main items-center justify-center rounded-full bg-main  transition group-hover:rotate-45 group-hover:bg-orange-400 group-hover:text-white">
                  <ArrowUpRight />
                </span>
              </a>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
