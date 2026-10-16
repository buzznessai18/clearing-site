import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { images } from "../data/content";

const ideas = [
  {
    title: "Humidity is the brief",
    text: "Central Florida keeps algae, mildew, and irrigation stains in regular rotation. A brand built here would talk about climate plainly, without inventing a track record.",
  },
  {
    title: "Materials decide the method",
    text: "Concrete, stucco, tile, pavers, and wood are not the same surface. The concept refuses a one-pressure visit and says so before a price exists.",
  },
  {
    title: "The price comes first",
    text: "The imagined customer would see the surfaces and the number before anyone unrolls a hose. This website cannot give that number. The form is a stand-in.",
  },
];

export default function About() {
  usePageMeta(
    "About | ClearEdge Exterior Cleaning",
    "The fictional brand story behind ClearEdge Exterior Cleaning, a demonstration website set in Orlando. No fabricated team, credentials, or client results."
  );

  return (
    <>
      <header className="page-intro">
        <div className="wrap">
          <h1>A brand drawn around the first glance.</h1>
          <p className="lede">
            ClearEdge Exterior Cleaning is a fictional illustration of how a careful exterior-cleaning company in Orlando could present itself. It is not an operating business. It has no crews, no customers, and no past projects.
          </p>
        </div>
      </header>

      <section className="section about-section">
        <div className="wrap about-lead">
          <figure className="about-lead__media">
            <img
              src={images.drivewayTall}
              alt="Illustrative photograph of a clean driveway beside a modern Florida home and palms"
              width="864"
              height="1152"
              loading="lazy"
              decoding="async"
            />
            <span className="illus">Illustrative</span>
            <figcaption>Demonstration photograph. Not a ClearEdge project.</figcaption>
          </figure>
          <div className="about-copy">
            <p>
              The idea is simple. The outside of a property speaks before anyone opens the door: the driveway, the walls, the walk to the entrance. In a humid city, that outside collects a film. ClearEdge is a name and a point of view for taking that film seriously, surface by surface.
            </p>
            <p>
              This page does not invent a founding year, a crew, or a stack of testimonials. There is no license number to publish and no client result to quote, because none of those things exist for this concept.
            </p>
            <p>
              What the brand would insist on is narrower. Name the material. Choose the pressure, or choose not to use much pressure at all. Say what is included before the truck is on the way. Leave the property as carefully as it was cleaned.
            </p>
            <p>
              Orlando is the setting because the light, the rain, and the algae make the work visible. A real company in that city would publish a true service area, a way to call, and photographs of work it had actually done. This site declines to fake those.
            </p>
            <p className="about-disclaimer">
              Independent concept website — not an operating business.
            </p>
            <Link className="btn btn--forest" to="/contact">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section--faq" aria-labelledby="ideas-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="ideas-title">The point of view, and nothing beyond it.</h2>
          </div>
          <div className="idea-grid">
            {ideas.map((idea) => (
              <article key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
