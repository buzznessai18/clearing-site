import { Link } from "react-router-dom";
import { IconDriveway, IconHouse, IconPatio, IconRoof } from "../components/Icons";
import ComparisonBlock from "../components/ComparisonBlock";
import Gallery from "../components/Gallery";
import QuoteBand from "../components/QuoteBand";
import FaqList from "../components/FaqList";
import QuoteForm from "../components/QuoteForm";
import usePageMeta from "../hooks/usePageMeta";
import { images, reasons, services, steps } from "../data/content";

const panel = [
  { href: "/services#driveway", label: "Driveways", detail: "Concrete & aprons", icon: <IconDriveway /> },
  { href: "/services#house", label: "House washing", detail: "Stucco & siding", icon: <IconHouse /> },
  { href: "/services#roof", label: "Roofs", detail: "Tile & shingle", icon: <IconRoof /> },
  { href: "/services#patio", label: "Patios", detail: "Pavers & joints", icon: <IconPatio /> },
];

export default function Home() {
  usePageMeta(
    "ClearEdge Exterior Cleaning | Orlando Pressure Washing Concept",
    "Fictional demonstration website for ClearEdge Exterior Cleaning in Orlando. Pressure washing, house washing, and exterior surface cleaning — not an operating business."
  );

  return (
    <>
      <section className="hero">
        <img
          className="hero__img"
          src={images.hero}
          alt="Freshly washed concrete driveway in front of a modern Florida home with palms"
          width="1280"
          height="720"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="wrap hero__copy">
          <p className="eyebrow">ORLANDO&apos;S EXTERIOR CLEANING SPECIALISTS</p>
          <h1>Make Every First Impression Count.</h1>
          <p className="hero__lede">
            Professional pressure washing, house washing and exterior surface cleaning that brings out the best in your property.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--lime" to="/contact">Get a Free Quote</Link>
            <Link className="btn btn--ghost" to="/work">See Our Work</Link>
          </div>
        </div>
      </section>

      <div className="wrap float-wrap">
        <aside className="float-panel" aria-label="Surfaces at a glance">
          <p className="float-panel__intro">Exterior surfaces, chosen by the material.</p>
          <ul>
            {panel.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>
                  <span className="float-panel__icon">{item.icon}</span>
                  <span>
                    <span className="float-panel__label">{item.label}</span>
                    <span className="float-panel__detail">{item.detail}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="section reveal" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div>
              <h2 id="services-title">A Cleaner Exterior. A Better First Impression.</h2>
              <p>
                Six services for the outside of a property. Photographs are illustrations, not jobs this fictional company has completed.
              </p>
            </div>
            <Link className="text-link" to="/services">All services</Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.id} className={`shot shot--${service.id}`} to={`/services#${service.id}`}>
                <img
                  src={service.image}
                  alt=""
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="shot__shade" aria-hidden="true" />
                <span className="illus">Illustrative</span>
                <span className="shot__body">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <span className="shot__more">Learn more</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compare reveal" aria-labelledby="compare-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="compare-title">The Difference Is Clear.</h2>
            <p>
              Drag each divider. The before side is the same photograph with a grime treatment, so the property, angle, and light stay aligned. These are demonstrations, not customer projects.
            </p>
          </div>
        </div>
        <ComparisonBlock />
      </section>

      <section className="section reveal" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="why-title">Care You Can See. Service You Can Feel.</h2>
            <p>
              What this fictional company would be organized around. None of these are verified credentials or guarantees.
            </p>
          </div>
          <div className="why-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="why-card">
                <span className="why-card__rule" aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--process reveal" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title">From the first note to a cleaner exterior.</h2>
            <p>Three steps a working version of this business would follow. This website only performs the first one, and only as a demo.</p>
          </div>
          <div className="steps">
            <span className="steps__line" aria-hidden="true"><span /></span>
            <ol>
              {steps.map((step) => (
                <li key={step.num}>
                  <span className="steps__num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div>
              <h2 id="work-title">Exterior examples, for the eye.</h2>
              <p>
                A gallery of generated photographs. Each one is labeled illustrative. None of them are ClearEdge projects.
              </p>
            </div>
            <Link className="text-link" to="/work">Our work page</Link>
          </div>
          <Gallery />
        </div>
      </section>

      <QuoteBand />

      <section className="section section--faq reveal" aria-labelledby="faq-title">
        <div className="wrap faq-layout">
          <div className="section-head">
            <h2 id="faq-title">Questions people ask before a first clean.</h2>
            <p>Answers describe this fictional service. They are not a quote, a warranty, or a promise of results.</p>
          </div>
          <FaqList />
        </div>
      </section>

      <section className="section reveal" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div>
            <div className="section-head">
              <h2 id="contact-title">Tell us about the exterior.</h2>
              <p>
                Name, property, and ZIP code are enough for a real company to start a quote. Here, the form stops on this page.
              </p>
            </div>
            <QuoteForm />
          </div>
          <aside className="contact-aside">
            <p className="contact-aside__kicker">Example area</p>
            <p className="contact-aside__place">Orlando, Florida</p>
            <p>
              A real company would name the cities it actually drives to. This concept uses Orlando only as a setting.
            </p>
            <p>
              No phone number or street address is listed. Independent concept website — not an operating business.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
