export function PlaneIcon({ className = "h-6 w-6" }) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    );
  }
  
  export function ArrowUpRight({ className = "h-4 w-4" }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    );
  }
  
  export function ChevronDown({ className = "h-4 w-4" }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }
  
  export function UserIcon({ className = "h-4 w-4" }) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }
  
  export function StarIcon({ className = "h-4 w-4", filled = true }) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"
          fill={filled ? "currentColor" : "#D4D4D8"}
        />
      </svg>
    );
  }
  
  export function SocialIcon({ name, className = "h-5 w-5" }) {
    const paths = {
      x: "M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2.5 2h6.1l4.2 5.6zM17.1 20h1.6L7 3.9H5.3z",
      linkedin:
        "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.55-1 1.9-2 3.9-2 4.1 0 4.75 2.7 4.75 6.2V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z",
      facebook:
        "M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.2 2 10 3.7 10 6v2H7.5v3H10v11h4V11h2.6l.4-3z",
      whatsapp:
        "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.1.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z",
    };
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d={paths[name]} />
      </svg>
    );
  }
  