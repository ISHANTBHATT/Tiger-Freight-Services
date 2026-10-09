// "use client";

// import { useState } from "react";
// import { brand, navLinks } from "@/lib/siteData";
// import { PlaneIcon, UserIcon } from "./Icons";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("Home");

//   return (
//     <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white backdrop-blur">
//       <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5">
//         <a href="#home" className="flex items-center gap-2">
//           {/* <PlaneIcon className="h-6 w-6 text-brand" />
//           <span className="font-display text-xl font-semibold text-brand">
//             {brand.name}
//           </span> */}
//           <Image src="/images/Tiger-logo2.png" alt="Logo" width={100} height={100} />
//         </a>

//         <nav className="hidden rounded-full bg-neutral-100 p-1 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setActive(link.label)}
//               className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
//                 active === link.label
//                   ? "bg-black text-white shadow-sm"
//                   : "text-neutral-600 hover:text-ink"
//               }`}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-3">
//           <a
//             href="#register"
//             className="hidden items-center gap-2 rounded-full border-2 border-navy bg-navy px-4 py-2 text-xs font-medium text-black transition hover:bg-navy-dark sm:inline-flex"
//           >
//             {/* <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70">
//               <UserIcon className="h-3.5 w-3.5" />
//             </span> */}
//             Contact Us
//           </a>
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             onClick={() => setOpen((v) => !v)}
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 md:hidden"
//           >
//             <span className="space-y-1">
//               <span className="block h-0.5 w-5 bg-ink" />
//               <span className="block h-0.5 w-5 bg-ink" />
//               <span className="block h-0.5 w-5 bg-ink" />
//             </span>
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="border-t border-neutral-200 bg-white px-5 py-3 md:hidden">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => {
//                 setActive(link.label);
//                 setOpen(false);
//               }}
//               className="block py-2.5 text-sm font-medium text-neutral-700"
//             >
//               {link.label}
//             </a>
//           ))}
//           <a href="#register" className="btn-primary mt-2 w-full">
//             Register
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { navLinks } from "@/lib/siteData";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].label);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef(null);
  const { scrollY } = useScroll();

  /* ---------------- Framer: hide on scroll down, show on scroll up ---------------- */
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 10);
    setHidden(y > prev && y > 160 && !open);
  });

  /* ---------------- GSAP: scroll progress bar + scroll-spy ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        }
      );
    });

    const spies = navLinks
      .map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActive(link.label),
        });
      })
      .filter(Boolean);

    return () => {
      mm.revert();
      spies.forEach((s) => s.kill());
    };
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease }}
      className={`sticky top-0 z-50 border-b border-neutral-200 bg-white backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-14px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2"
        >
          <Image src="/images/Tiger-logo2.png" alt="Logo" width={100} height={100} />
        </motion.a>

        <nav className="relative hidden rounded-full bg-neutral-100 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === link.label
                  ? "text-white"
                  : "text-neutral-600 hover:text-ink"
              }`}
            >
              {active === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-black shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full border-2 border-navy bg-navy px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-navy-dark sm:inline-flex"
          >
            Contact Us
          </motion.a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 block h-0.5 w-5 bg-ink"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="absolute left-0 top-[6px] block h-0.5 w-5 bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-[12px] block h-0.5 w-5 bg-ink"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden border-t border-neutral-200 bg-white px-5 md:hidden"
          >
            <div className="py-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.05 + i * 0.06 }}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className="block py-2.5 text-sm font-medium text-neutral-700"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#register" className="btn-primary mt-2 w-full">
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress (GSAP) */}
      <span
        ref={barRef}
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full bg-main"
        style={{ transform: "scaleX(0)", transformOrigin: "left" }}
      />
    </motion.header>
  );
}
