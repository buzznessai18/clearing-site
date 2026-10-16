import { Link } from "react-router-dom";
import { LogoMark } from "./Icons";
import { services } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <Link className="logo logo--footer" to="/" aria-label="ClearEdge Exterior Cleaning, home">
            <LogoMark />
            <span className="logo__word">
              <span className="logo__name">ClearEdge</span>
              <span className="logo__sub">Exterior Cleaning</span>
            </span>
          </Link>
          <p className="footer__blurb">
            A fictional exterior-cleaning brand set in Orlando, Florida. The photographs are illustrations. The quote form does not send or store anything.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Navigate</h2>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Our Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Services</h2>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Example location</h2>
          <p className="footer__place">Orlando, Florida</p>
          <p className="footer__blurb">
            Fictional example location. No street address, phone number, or social accounts are published, because this is not a place of business.
          </p>
          <Link className="btn btn--lime footer__cta" to="/contact">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="footer__legal">
        <div className="wrap">
          <p>Independent concept website — not an operating business.</p>
          <p>Fictional website concept created for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
