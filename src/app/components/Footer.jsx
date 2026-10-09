// import { brand, contact, footerColumns } from "@/lib/siteData";
// import { ArrowUpRight, PlaneIcon, SocialIcon } from "./Icons";

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-[#111111] text-white">
//       <div className="mx-auto max-w-page px-5">
//         <div className="grid border-b border-white/10 md:grid-cols-2">
//           <div className="py-12 md:border-r md:border-white/10 md:pr-10">
//             <p className="font-display text-5xl font-medium tracking-tight">
//               {brand.name}
//             </p>
//             <p className="mt-10 text-2xl font-medium uppercase leading-snug">
//               Let&apos;s plan your next
//               <br />
//               air shipment
//             </p>
//           </div>

//           <div className="py-12 md:pl-10">
//             <a
//               href={`mailto:${contact.email}`}
//               className="flex items-center justify-between border-b border-white/20 pb-3 text-sm text-white/90"
//             >
//               Send email to us
//               <ArrowUpRight />
//             </a>

//             <div className="mt-8 grid grid-cols-2 gap-6 text-xs">
//               <Info label="Location" value={contact.location} />
//               <Info label="Calls us" value={contact.phone} />
//               <Info label="Email" value={contact.email} />
//               <Info label="Open time" value={contact.hours} />
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-10 py-10 sm:grid-cols-2 md:grid-cols-4">
//           {footerColumns.map((col) => (
//             <div key={col.title}>
//               <p className="text-sm font-medium">{col.title}</p>
//               <ul className="mt-4 space-y-2.5">
//                 {col.links.map((l) => (
//                   <li key={l}>
//                     <a href="#" className="text-xs text-white/60 transition hover:text-white">
//                       {l}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           <div className="flex flex-col items-start gap-6 md:items-end">
//             <PlaneIcon className="h-20 w-20 text-white/20" />
//             <div className="flex gap-3 text-white/80">
//               {["x", "linkedin", "facebook", "whatsapp"].map((n) => (
//                 <a key={n} href="#" aria-label={n} className="transition hover:text-brand">
//                   <SocialIcon name={n} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-5 text-[11px] text-white/40 sm:flex-row">
//           <a href="#">Terms &amp; Conditions</a>
//           <p>© {new Date().getFullYear()} {brand.name.toUpperCase()}. All right reserved</p>
//           <a href="#">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function Info({ label, value }) {
//   return (
//     <div>
//       <p className="uppercase tracking-wider text-white/40">{label} *</p>
//       <p className="mt-1.5 leading-relaxed text-white/90">{value}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand, contact, footerColumns } from "@/lib/siteData";
import { ArrowUpRight, PlaneIcon, SocialIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Framer Motion (play once, when in view) ---------------- */
const ease = [0.22, 1, 0.36, 1];
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Horizontal line that GSAP draws in (scaleX 0 -> 1)
function Line({ position = "bottom", className = "bg-white/10" }) {
  return (
    <span
      data-line
      aria-hidden="true"
      className={`absolute left-0 ${position === "top" ? "top-0" : "bottom-0"} h-px w-full origin-left ${className}`}
    />
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const brandRef = useRef(null);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      footerRef.current.querySelectorAll("[data-line]").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: line, start: "top 98%", once: true },
          }
        );
      });

      // Big brand name rises into place as the footer comes into view
      gsap.fromTo(
        brandRef.current,
        { yPercent: 40 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="bg-[#111111] text-white">
      <div className="mx-auto max-w-page px-5">
        <div className="relative grid md:grid-cols-2">
          <div className="py-12 md:border-r md:border-white/10 md:pr-10">
            <div ref={brandRef}>
              <motion.p
                variants={fadeUp}
                {...inView}
                className="font-display text-5xl font-medium tracking-tight"
              >
                {brand.name}
              </motion.p>
            </div>
            <motion.p
              variants={fadeUp}
              {...inView}
              transition={{ delay: 0.15 }}
              className="mt-10 text-2xl font-medium uppercase leading-snug"
            >
              Let&apos;s plan your next
              <br />
              air shipment
            </motion.p>
          </div>

          <motion.div variants={stagger} {...inView} className="py-12 md:pl-10">
            <motion.div variants={fadeUp} className="relative pb-3">
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ x: 6 }}
                className="flex items-center justify-between text-sm text-white/90"
              >
                Send email to us
                <ArrowUpRight />
              </motion.a>
              <Line className="bg-white/20" />
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-xs">
              <Info label="Location" value={contact.location} />
              <Info label="Calls us" value={contact.phone} />
              <Info label="Email" value={contact.email} />
              <Info label="Open time" value={contact.hours} />
            </div>
          </motion.div>

          <Line />
        </div>

        <motion.div
          variants={stagger}
          {...inView}
          className="grid gap-10 py-10 sm:grid-cols-2 md:grid-cols-4"
        >
          {footerColumns.map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block text-xs text-white/60 transition-colors hover:text-white"
                    >
                      {l}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-6 md:items-end"
          >
            {/* <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PlaneIcon className="h-20 w-20 text-white/20" />
            </motion.div> */}
            <div className="flex gap-3 text-white/80">
              {["x", "linkedin", "facebook", "whatsapp"].map((n) => (
                <motion.a
                  key={n}
                  href="#"
                  aria-label={n}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors hover:text-brand"
                >
                  <SocialIcon name={n} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative flex flex-col items-center justify-between gap-2 py-5 text-[11px] text-white/40 sm:flex-row">
          <Line position="top" />
          <a href="#">Terms &amp; Conditions</a>
          <p>
            © {new Date().getFullYear()} {brand.name.toUpperCase()}. All right
            reserved
          </p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

function Info({ label, value }) {
  return (
    <motion.div variants={fadeUp}>
      <p className="uppercase tracking-wider text-white/40">{label} *</p>
      <p className="mt-1.5 leading-relaxed text-white/90">{value}</p>
    </motion.div>
  );
}
