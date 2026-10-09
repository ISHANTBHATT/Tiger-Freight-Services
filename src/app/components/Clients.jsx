import { clients } from "@/lib/siteData";

const avatars = [
  { emoji: "🧑‍✈️", bg: "bg-rose-200" },
  { emoji: "👨‍💼", bg: "bg-amber-200" },
  { emoji: "👩‍💼", bg: "bg-violet-200" },
  { emoji: "🧑‍🔧", bg: "bg-orange-200" },
];

export default function Clients() {
  return (
    <section className="mx-auto mt-16 max-w-page px-5">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:px-16">
        <div className="flex items-center gap-5">
          <div className="relative h-24 w-24">
            {avatars.map((a, i) => (
              <span
                key={i}
                className={`absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xl shadow ${a.bg}`}
                style={{
                  top: [0, 6, 38, 52][i],
                  left: [0, 40, 48, 12][i],
                }}
              >
                {a.emoji}
              </span>
            ))}
          </div>
          <div>
            <p className="text-3xl font-semibold">286+</p>
            <p className="text-neutral-500">Certified Clients</p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-14 gap-y-6">
          {clients.map((name) => (
            <li
              key={name}
              className="text-center font-display text-base font-semibold text-neutral-700"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
