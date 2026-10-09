"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

// Theme: white + #F38F04
const services = [
  {
    tag: "01 / FREIGHT",
    title: "Air Freight Transportation",
    text: "Safe and timely air cargo solutions for businesses across multiple industries.",
    chips: ["Express", "Standard", "Charter", "Consolidated"],
    image: "/images/hero.jpg",
  },
  {
    tag: "02 / STORAGE",
    title: "Warehousing & Storage",
    text: "Secure cargo terminal facilities designed for inventory management and product safety.",
    chips: ["Inventory", "Cold Chain", "Distribution"],
    image: "/images/hero2.jpg",
  },
  {
    tag: "03 / CUSTOMS",
    title: "Customs Clearance",
    text: "End-to-end documentation and duty handling at origin and destination airports.",
    chips: ["Documentation", "Duties", "Compliance"],
    image: "/images/hero3.jpg",
  },
  {
    tag: "04 / DELIVERY",
    title: "Door-to-Door Delivery",
    text: "Last-mile pickup and delivery with live tracking from airport to your doorstep.",
    chips: ["Pickup", "Last Mile", "Tracking"],
    image: "/images/hero4.jpg",
  },
];

const thumbFallbacks = [
  "linear-gradient(135deg, #FED7AA, #F38F04)",
  "linear-gradient(135deg, #E5E7EB, #9CA3AF)",
  "linear-gradient(135deg, #FFEDD5, #FDBA74)",
  "linear-gradient(135deg, #F3F4F6, #F38F04)",
];

/* ---------------- Framer Motion variants (play once, when in view) ---------------- */
const ease = [0.22, 1, 0.36, 1];
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const rowV = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
      delay: Math.min(i, 3) * 0.08,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  }),
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const thumbV = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};
const descV = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, staggerChildren: 0.05, delayChildren: 0.15 },
  },
};
const chipV = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease } },
};

export default function LogisticsServices() {
  const sectionRef = useRef(null);
  const barRef = useRef(null);
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  /* ---------------- GSAP scroll animations ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1) Orange progress line fills while the list scrolls through
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      // 2) Thumbnail parallax inside each row
      sectionRef.current.querySelectorAll("[data-thumb]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-white px-5 pt-40 pb-20">
      {/* Header */}
      <div className="w-full text-center">
        <motion.p
          variants={fadeUp}
          {...inView}
          className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-600"
        >
          <span className="text-[#F38F04]">//</span> What we offer{" "}
          <span className="text-[#F38F04]">//</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          {...inView}
          className="mt-4 text-3xl font-medium uppercase text-neutral-900 sm:text-4xl"
        >
          Our <span className="text-[#F38F04]">Logistics</span> Services
        </motion.h2>
      </div>

      {/* Scroll progress line */}
      {/* <div className="mx-auto mt-8 h-[2px] w-full bg-neutral-200">
        <div ref={barRef} className="h-full origin-left bg-[#F38F04]" />
      </div> */}

      {/* Rows */}
      <ul ref={listRef} className="mx-auto mt-8 w-full space-y-4">
        {services.map((s, i) => {
          const isActive = active === i;
          return (
            <motion.li
              key={s.tag}
              custom={i}
              variants={rowV}
              {...inView}
              onMouseEnter={() => setActive(i)}
              className={`grid h-80 items-center gap-4 rounded-2xl border bg-neutral-50 p-4 transition-colors md:grid-cols-[100px_400px_190px_1fr_auto] md:gap-6 md:px-6 ${
                isActive ? "border-[#F38F04]/50" : "border-neutral-200"
              }`}
            >
              <motion.span
                variants={itemV}
                className="text-[11px] font-medium uppercase tracking-wide text-[#F38F04]"
              >
                {s.tag}
              </motion.span>

              <motion.div
                variants={thumbV}
                className="relative h-80 w-full overflow-hidden rounded-xl md:h-60"
              >
                <div
                  data-thumb
                  className="absolute inset-x-0 top-[-14%] h-[128%] w-full"
                  style={{
                    background: `url(${s.image}) center / cover no-repeat, ${
                      thumbFallbacks[i % thumbFallbacks.length]
                    }`,
                  }}
                />
              </motion.div>

              <motion.h3
                variants={itemV}
                className="text-lg font-semibold uppercase leading-tight text-neutral-900"
              >
                {s.title}
              </motion.h3>

              <motion.div variants={descV}>
                <p className="text-sm leading-relaxed text-neutral-500">{s.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <motion.span
                      key={c}
                      variants={chipV}
                      className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] text-neutral-600"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* <motion.a
                variants={itemV}
                href="#quote"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[#F38F04] bg-[#F38F04] text-white"
                    : "border-neutral-300 bg-white text-neutral-800 hover:border-[#F38F04]"
                }`}
              >
                Request a Quote
              </motion.a> */}
              <motion.a
  variants={itemV}
  href="#quote"
  className="group inline-flex items-center gap-2 "
>
  <span
    className={`rounded-full px-6 py-3 text-sm font-medium transition-colors border border-[#F38F04] ${
      isActive
        ? "bg-[#F38F04] text-white"
        : "bg-white text-neutral-900 group-hover:bg-[#F38F04] group-hover:text-white"
    }`}
  >
    Request a Quote
  </span>

  <span
    className={`flex h-11 w-11 items-center justify-center rounded-full transition border border-[#F38F04] ${
      isActive
        ? "rotate-45 bg-[#F38F04] text-white"
        : "bg-white text-neutral-900 group-hover:rotate-45 group-hover:bg-[#F38F04] group-hover:text-white"
    }`}
  >
    <ArrowUpRight />
  </span>
</motion.a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}