// "use client";

// import { useState } from "react";
// import { faqs } from "@/lib/siteData";
// import { ChevronDown, PlaneIcon } from "./Icons";

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section id="faq" className="mx-auto mt-24 max-w-page px-5">
//       <p className="section-label text-center">FAQ</p>
//       <h2 className="mt-2 text-center font-display text-5xl font-semibold">
//         Frequently Asked Questions
//       </h2>

//       <div className="mt-12 grid gap-10 md:grid-cols-2 md:px-16">
//         <div>
//           <p className="text-2xl leading-snug max-w-sm">
//             Find answers to common questions about our services
//           </p>
//           <PlaneIcon className="mt-10 hidden h-28 w-28 text-neutral-200 md:block" />
//         </div>

//         <div>
//           {faqs.map((item, i) => {
//             const isOpen = openIndex === i;
//             return (
//               <div key={item.q} className="border-b border-neutral-200 py-4 first:pt-0">
//                 <button
//                   type="button"
//                   aria-expanded={isOpen}
//                   onClick={() => setOpenIndex(isOpen ? -1 : i)}
//                   className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium hover:text-main"
//                 >
//                   {item.q}
//                   <ChevronDown
//                     className={`h-4 w-4 shrink-0 transition-transform ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`grid transition-all duration-300 ${
//                     isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <p className="overflow-hidden text-sm leading-relaxed text-brand">
//                     {item.a}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/lib/siteData";
import { ChevronDown, PlaneIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

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
const listV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemV = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const planeRef = useRef(null);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Divider lines draw in once
      sectionRef.current.querySelectorAll("[data-line]").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: line, start: "top 92%", once: true },
          }
        );
      });

      // Plane drifts up and tilts while scrolling
      gsap.fromTo(
        planeRef.current,
        { y: 30, rotate: -8 },
        {
          y: -70,
          rotate: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="mx-auto py-24 my-auto h-screen max-w-page px-5">
      <motion.p variants={fadeUp} {...inView} className="section-label text-center">
        FAQ
      </motion.p>
      {/* Observe the h2 itself; words are clipped until they slide up */}
      <motion.h2
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        {...inView}
        className="mt-2 text-center font-display text-5xl font-semibold"
      >
        {"Frequently Asked Questions".split(" ").map((word, i) => (
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

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:px-16">
        <div>
          <motion.p variants={fadeUp} {...inView} className="text-2xl leading-snug max-w-sm">
            Find answers to common questions about our services
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="mt-10 hidden w-fit md:block"
          >
            <span ref={planeRef} className="block">
              <PlaneIcon className="h-28 w-28 text-neutral-200" />
            </span>
          </motion.div> */}
        </div>

        <motion.div variants={listV} {...inView} viewport={{ once: true, amount: 0.15 }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                variants={itemV}
                className="relative py-4 first:pt-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium transition-colors hover:text-main"
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="flex shrink-0"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm leading-relaxed text-brand">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* divider (drawn by GSAP) */}
                <span
                  data-line
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-neutral-200"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
