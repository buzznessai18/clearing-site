import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconMenu, LogoMark } from "./Icons";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const home = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const first = panelRef.current?.querySelector("a");
    first?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !home || scrolled || open;

  return (
    <header className={`nav ${solid ? "nav--solid" : "nav--overlay"}`}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="nav__bar">
        <Link className="logo" to="/" aria-label="ClearEdge Exterior Cleaning, home">
          <LogoMark />
          <span className="logo__word">
            <span className="logo__name">ClearEdge</span>
            <span className="logo__sub">Exterior Cleaning</span>
          </span>
        </Link>

        <nav className={`nav__panel ${open ? "is-open" : ""}`} id="site-menu" ref={panelRef} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn--lime nav__cta-desktop" to="/contact">
            Get a Free Quote
          </Link>
        </nav>

        <Link className="btn btn--lime nav__cta-mobile" to="/contact">
          Free Quote
        </Link>
        <button
          ref={toggleRef}
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <IconMenu open={open} />
        </button>
      </div>
    </header>
  );
}
