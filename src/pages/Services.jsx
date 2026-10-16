import { Link } from "react-router-dom";
import QuoteBand from "../components/QuoteBand";
import usePageMeta from "../hooks/usePageMeta";
import { services } from "../data/content";

export default function Services() {
  usePageMeta(
    "Services | ClearEdge Exterior Cleaning",
    "Six fictional exterior cleaning services from ClearEdge: driveways, house soft washing, roofs, patios, commercial exteriors, and fences. Demonstration website, not an operating business."
  );

  return (
    <>
      <header className="page-intro">
        <div className="wrap">
          <h1>Cleaning matched to the surface.</h1>
          <p className="lede">
            Driveways, houses, roofs, patios, storefronts, and fences each ask for a different touch. These descriptions illustrate the fictional ClearEdge offering. They are not a bid or a warranty.
          </p>
        </div>
      </header>

      <div className="service-list">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="service-block wrap">
            <div className="service-block__media">
              <img
                src={service.image}
                alt={service.alt}
                width={service.width}
                height={service.height}
                loading="lazy"
                decoding="async"
              />
              <span className="illus">Illustrative</span>
            </div>
            <div className="service-block__copy">
              <h2>{service.title}</h2>
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="btn btn--forest" to="/contact">Get a Free Quote</Link>
            </div>
          </article>
        ))}
      </div>

      <QuoteBand />
    </>
  );
}
