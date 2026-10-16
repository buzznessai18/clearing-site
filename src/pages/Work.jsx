import ComparisonBlock from "../components/ComparisonBlock";
import Gallery from "../components/Gallery";
import QuoteBand from "../components/QuoteBand";
import usePageMeta from "../hooks/usePageMeta";

export default function Work() {
  usePageMeta(
    "Our Work | ClearEdge Exterior Cleaning",
    "Illustrative before-and-after comparisons and exterior photographs for the fictional ClearEdge Exterior Cleaning website. Not customer projects."
  );

  return (
    <>
      <header className="page-intro">
        <div className="wrap">
          <h1>The difference, shown as a demonstration.</h1>
          <p className="lede">
            Each slider uses one photograph. Dirt and algae on the before side are a visual treatment, so the framing never changes. Demo comparison — replace with real project photos. Nothing here is a ClearEdge customer project.
          </p>
        </div>
      </header>

      <section className="section section--compare" aria-labelledby="work-compare-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-compare-title">The Difference Is Clear.</h2>
            <p>Focus the divider and use the arrow keys, or drag it. Buttons under each frame move the comparison in steps.</p>
          </div>
        </div>
        <ComparisonBlock cta="contact" />
      </section>

      <section className="section" aria-labelledby="gallery-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="gallery-title">Surfaces, after a clean.</h2>
            <p>Filter the illustrations by driveway, home, patio, or commercial exterior. Every image is marked illustrative.</p>
          </div>
          <Gallery id="work-gallery" />
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
