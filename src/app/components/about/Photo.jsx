// Background-image box with a fallback layer, so layouts look right before
// real photos are added. `fallback` is a CSS background layer list.
export default function Photo({
  src,
  fallback = "",
  label,
  className = "",
  children,
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={className}
      style={{ background: `url(${src}) center / cover no-repeat` }}
    >
      {children}
    </div>
  );
}
