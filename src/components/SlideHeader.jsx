// src/components/SlideHeader.jsx
// Per-slide editorial header bar: name/label (left) · section (center) · year (right)

function SlideHeader({ left = "", center = "", right = "", className = "" }) {
  return (
    <div className={`slide-header ${className}`}>
      <span className="font-light">{left}</span>
      <span className="tracking-widest uppercase text-[11px]">{center}</span>
      <span className="font-light">{right}</span>
    </div>
  );
}

export default SlideHeader;
