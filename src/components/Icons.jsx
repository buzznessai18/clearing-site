export function LogoMark() {
  return (
    <svg className="logo__mark" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#C6F17A" />
      <path d="M11 27 L20.2 8 h3.2 L14.2 27 Z" fill="#10282B" />
    </svg>
  );
}

function StrokeIcon({ children }) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      {children}
    </svg>
  );
}

export function IconDriveway() {
  return (
    <StrokeIcon>
      <path d="M5 23.5 V13.5 h22 v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 23.5 V15.5 M16 23.5 V15.5 M22 23.5 V15.5" stroke="currentColor" strokeWidth="1.6" />
    </StrokeIcon>
  );
}

export function IconHouse() {
  return (
    <StrokeIcon>
      <path d="M6 15.5 L16 7 L26 15.5 V25 H6 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 25 V18.5 h6 V25" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </StrokeIcon>
  );
}

export function IconRoof() {
  return (
    <StrokeIcon>
      <path d="M4 20 L16 8 L28 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 18.5 H24 M9.5 22 H22.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </StrokeIcon>
  );
}

export function IconPatio() {
  return (
    <StrokeIcon>
      <rect x="6" y="6" width="8.5" height="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="6" width="8.5" height="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6" y="17.5" width="8.5" height="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="17.5" width="8.5" height="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </StrokeIcon>
  );
}

export function IconMenu({ open }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <path d="M5 5 L17 17 M17 5 L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <path d="M3 6.5 H19 M3 11 H19 M3 15.5 H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
