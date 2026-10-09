function Sparkle({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" />
    </svg>
  );
}

export default function ContactFooter() {
  return (
    <footer  className="bg-charcoal text-white">
      <div className="mx-auto max-w-page px-5 pb-10 pt-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 text-xs font-medium sm:grid-cols-3">
          <p className="wide max-w-[200px] leading-snug">
            We Invite You To Contact Our Team For More Information.
          </p>
          <p className="wide sm:text-center">Let&apos;s Stay Connected</p>
          <p className="wide max-w-[140px] leading-snug sm:ml-auto sm:text-right">
            ©2010 All Right Reserved
          </p>
        </div>

        <a
          href="mailto:hello@maisonstudio.com"
          className="wide mt-16 flex items-center justify-between font-display text-[10.5vw] font-medium leading-none md:mt-24 md:text-[118px]"
        >
          <span>CONTACTS</span>
          <Sparkle className="h-[0.22em] w-[0.22em] text-white" />
          <span>US</span>
        </a>
      </div>
    </footer>
  );
}
