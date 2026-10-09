import { brand } from "@/lib/siteData";

export default function Navbar() {
  return (
    <header className="mx-auto grid max-w-page grid-cols-3 items-center px-5 py-6 text-xs xl:px-0">
      <nav className="flex gap-6 font-medium">
        <a href="#about" className="transition hover:opacity-60">About</a>
        <a href="#services" className="transition hover:opacity-60">Projects</a>
      </nav>

      <a href="#" className="mx-auto flex items-center gap-2 text-sm font-medium">
        <span className="h-5 w-5 rounded-full border border-neutral-400 bg-gradient-to-br from-amber-50 to-stone-400" />
        {brand.name}
      </a>

      <a
        href="#contact"
        className="ml-auto rounded-full bg-black px-5 py-2 font-medium text-white transition hover:bg-charcoal"
      >
        Contact Us
      </a>
    </header>
  );
}
