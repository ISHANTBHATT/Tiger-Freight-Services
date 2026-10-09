"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Stacked-section wrapper (lodisna.com style).
 *
 * - `stick`: the section stays pinned (CSS sticky) once its bottom edge reaches
 *   the bottom of the viewport (or its top edge, if it is shorter than the
 *   viewport), so the NEXT section slides up over it, as if it was already
 *   sitting right below.
 * - While the next section covers it, GSAP scales the pinned one down slightly
 *   and darkens it for depth.
 *
 * IMPORTANT: no ancestor of this component may have overflow hidden/auto,
 * otherwise `position: sticky` stops working.
 */
export default function StackSection({
  children,
  index = 0,
  stick = true,
  bg = "bg-white",
  className = "",
}) {
  const rootRef = useRef(null);
  const innerRef = useRef(null);
  const shadeRef = useRef(null);

  // Sticky offset: tall sections stick by their bottom edge, short ones by the top.
  useIsoLayoutEffect(() => {
    if (!stick) return;
    const el = rootRef.current;
    let timer;
    const update = () =>
      el.style.setProperty(
        "--stack-top",
        `${Math.min(0, window.innerHeight - el.offsetHeight)}px`
      );
    update();
    const ro = new ResizeObserver(() => {
      update();
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 120);
    });
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      clearTimeout(timer);
    };
  }, [stick]);

  // Depth effect while the next section slides over this one.
  useEffect(() => {
    if (!stick) return;
    const el = rootRef.current;
    const next = el.nextElementSibling;
    if (!next) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tall = el.offsetHeight > window.innerHeight;
      const scrollTrigger = {
        trigger: next,
        start: () => `top ${Math.min(window.innerHeight, el.offsetHeight)}px`,
        end: "top top",
        scrub: true,
        invalidateOnRefresh: true,
      };
      gsap.fromTo(
        innerRef.current,
        { scale: 1, transformOrigin: tall ? "50% 100%" : "50% 0%" },
        { scale: 0.94, ease: "none", scrollTrigger }
      );
      gsap.fromTo(
        shadeRef.current,
        { opacity: 0 },
        { opacity: 0.4, ease: "none", scrollTrigger }
      );
    });

    return () => mm.revert();
  }, [stick]);

  return (
    <div
      ref={rootRef}
      style={{ zIndex: index + 1 }}
      className={`${
        stick ? "sticky top-[var(--stack-top,0px)]" : "relative"
      } overflow-hidden ${bg} ${
        index > 0
          ? "rounded-t-[28px] shadow-[0_-24px_48px_-16px_rgba(0,0,0,0.15)] md:rounded-t-[40px]"
          : ""
      } ${className}`}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
      <div
        ref={shadeRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] bg-black opacity-0"
      />
    </div>
  );
}
