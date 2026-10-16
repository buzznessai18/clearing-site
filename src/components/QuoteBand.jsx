import { Link } from "react-router-dom";

export default function QuoteBand() {
  return (
    <section className="quote-band" aria-labelledby="quote-band-title">
      <div className="wrap quote-band__inner">
        <div>
          <h2 id="quote-band-title">Ready to Love the Look of Your Property Again?</h2>
          <p>
            Describe the exterior and the ZIP code. This demonstration collects nothing and contacts nobody.
          </p>
        </div>
        <Link className="btn btn--lime" to="/contact">
          Get My Free Quote
        </Link>
      </div>
    </section>
  );
}
