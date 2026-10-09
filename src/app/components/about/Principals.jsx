// import { brand, images, principals } from "@/lib/siteData";
// import Photo from "./Photo";

// // Neutral silhouette shown until a real portrait is added.
// // const silhouette = `url("data:image/svg+xml,${encodeURIComponent(
// //   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><circle cx="100" cy="88" r="42" fill="#C4BEB6"/><path d="M18 260c0-62 36-98 82-98s82 36 82 98z" fill="#C4BEB6"/></svg>'
// // )}") center bottom / 85% no-repeat, #D9D4CD`;

// const stripFallbacks = [
//   "linear-gradient(135deg,#F2EEE8,#D8CFC2)",
//   "linear-gradient(135deg,#CFC6BA,#8C7F6E)",
//   "linear-gradient(135deg,#E7E2DB,#B7AB9A)",
//   "linear-gradient(135deg,#F2EEE8,#A89C8C)",
// ];

// export default function Principals() {
//   const [left, right] = principals;

//   return (
//     <section className="mx-auto mt-24 max-w-page px-5 md:mt-28 xl:px-0 bg-white">
//       <div className="relative overflow-hidden rounded-[32px] bg-black">
//         <div className="grid grid-cols-2 items-end md:grid-cols-[250px_1fr_250px]">
//           {/* Center card */}
//           <div className="col-span-2 flex justify-center md:col-span-1 md:col-start-2 md:row-start-1">
//             <div className="w-full max-w-[350px] rounded-b-[36px] bg-white px-6 pb-6 pt-8 text-center">
//               <h2 className="wide font-display text-[34px] font-extrabold leading-[1.15] md:text-[38px]">
//                 MEET THE
//                 <br />
//                 PRINCIPALS
//               </h2>

//               <div className="mt-5 grid grid-cols-4 gap-1">
//                 {images.strip.map((src, i) => (
//                   <Photo
//                     key={src}
//                     src={src}
//                     fallback={stripFallbacks[i]}
//                     className="h-11 rounded-2xl first:rounded-l-full last:rounded-r-full"
//                   />
//                 ))}
//               </div>

//               <p className="mt-5 text-[11px] leading-[1.45]">
//                 As principal and licensed designer, the founder oversees the
//                 day-to-day operations of {brand.name} and the design and
//                 manufacture of our firm&apos;s custom furniture and award-winning
//                 accessories.
//               </p>
//             </div>
//           </div>

//           {/* Left portrait */}
//           <Photo
//             src={left.image}
//             label={left.name}
//             className="mt-6 h-[300px] self-end rounded-br-[40px] md:col-start-1 md:row-start-1 md:mt-0"
//           />

//           {/* Right portrait */}
//           <Photo
//             src={right.image}
//             label={right.name}
//             className="mt-6 h-[300px] self-end rounded-bl-[40px] md:col-start-3 md:row-start-1 md:mt-0"
//           />
//         </div>
//       </div>

//       {/* Names */}
//       <div className="mt-6 flex justify-between gap-4">
//         <Person {...left} />
//         <Person {...right} align="right" />
//       </div>
//     </section>
//   );
// }

// function Person({ name, role, align = "left" }) {
//   return (
//     <div className={align === "right" ? "text-right" : ""}>
//       <p className="wide font-display text-xl font-bold md:text-[26px]">{name}</p>
//       <p className="mt-1 text-[13px] font-light uppercase">{role}</p>
//     </div>
//   );
// }


//2
import { brand, images, principals } from "@/lib/siteData";
import Photo from "./Photo";

const stripFallbacks = [
  "linear-gradient(135deg,#F7F4EF,#DDD5C8)",
  "linear-gradient(135deg,#E9E3DA,#B9AE9E)",
  "linear-gradient(135deg,#F2EEE8,#CFC6BA)",
  "linear-gradient(135deg,#F7F4EF,#A89C8C)",
];

/*
  Desktop (lg+) geometry, tuned to the reference (container 1100px wide x 384px tall):
  - portraits: 29% wide each, pinned bottom-left / bottom-right
  - white card: 41% wide, pinned to the bottom, 279px tall  ("wide tier")
  - narrow tier: 85.5% of the card width, rises 74px above it, holds "MEET THE"
  - two 16px fillets round off the concave joins between the tiers
*/

export default function Principals() {
  const [left, right] = principals;

  return (
    <section className="mx-auto mt-24 max-w-page px-5 md:mt-28 xl:px-0">
      <div className="bg-main/50 relative flex flex-col overflow-hidden rounded-[32px] bg-sand lg:block lg:h-[384px] lg:rounded-[40px]">
        {/* ---------- White notched card ---------- */}
        <div className="relative order-first mx-3 mt-3 rounded-3xl bg-white px-6 py-8 text-center lg:absolute lg:bottom-0 lg:left-1/2 lg:z-10 lg:m-0 lg:flex lg:h-[279px] lg:w-[41%] lg:-translate-x-1/2 lg:flex-col lg:rounded-b-none lg:rounded-t-[16px] lg:px-8 lg:pb-7 lg:pt-5">
          {/* narrow top tier */}
          <span
            aria-hidden="true"
            className="absolute -top-[74px] left-1/2 hidden h-[100px] w-[85.5%] -translate-x-1/2 rounded-t-[32px] bg-white lg:block"
          />
          {/* concave fillets between the tiers */}
          <span
            aria-hidden="true"
            className="absolute -top-4 left-[calc(7.25%-16px)] hidden h-4 w-4 bg-[radial-gradient(circle_at_0_0,transparent_16px,#fff_16.5px)] lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute -top-4 right-[calc(7.25%-16px)] hidden h-4 w-4 bg-[radial-gradient(circle_at_100%_0,transparent_16px,#fff_16.5px)] lg:block"
          />

          <h2 className="wide relative font-display text-[32px] font-extrabold leading-[1.15] lg:text-[40px] xl:text-7xl">
            <span className="block lg:absolute lg:-top-[74px] lg:left-0 lg:right-0 lg:flex lg:h-[74px] lg:items-center lg:justify-center">
              MEET THE
            </span>
            <span className="block">FOUNDERS</span>
          </h2>

          <div className="mt-5 grid grid-cols-4 gap-[3px] lg:mt-7">
            {images.strip.map((src, i) => (
              <Photo
                key={src}
                src={src}
                fallback={stripFallbacks[i]}
                className="h-12 rounded-[30px] lg:h-[59px]"
              />
            ))}
          </div>

          <p className="mt-5 text-[11px] leading-[1.5] lg:mt-auto">
            As principal and licensed designer, the founder oversees the
            day-to-day operations of {brand.name} and the design and
            manufacture of our firm&apos;s custom furniture and award-winning
            accessories.
          </p>
        </div>

        {/* ---------- Portraits ---------- */}
        <div className="grid grid-cols-2 gap-3 px-3 pt-3 lg:contents">
          <Photo
            src={left.image}
            fallback="transparent"
            label={left.name}
            className="h-[240px] rounded-t-3xl lg:absolute lg:bottom-0 lg:left-0 lg:h-[327px] lg:w-[29%] lg:rounded-t-none lg:rounded-br-[30px]"
          />
          <Photo
            src={right.image}
            fallback="transparent"
            label={right.name}
            className="h-[240px] rounded-t-3xl lg:absolute lg:bottom-0 lg:right-0 lg:h-[327px] lg:w-[29%] lg:rounded-t-none lg:rounded-bl-[30px]"
          />
        </div>
      </div>

      {/* ---------- Names ---------- */}
      <div className="mt-6 flex justify-between gap-4">
        <Person {...left} />
        <Person {...right} align="right" />
      </div>
    </section>
  );
}

function Person({ name, role, align = "left" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <p className="wide font-display text-xl font-bold lg:text-[30px]">{name}</p>
      <p className="mt-1 text-[13px] font-light uppercase lg:text-base">{role}</p>
    </div>
  );
}