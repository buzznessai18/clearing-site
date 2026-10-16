import { Link } from "react-router-dom";
import { comparisons } from "../data/content";
import CompareSlider from "./CompareSlider";

export default function ComparisonBlock({ cta = "work" }) {
  const [lead, ...rest] = comparisons;
  return (
    <div className="compare-stage">
      <CompareSlider {...lead} hint />
      <div className="compare-grid">
        {rest.map((item) => (
          <CompareSlider key={item.id} {...item} />
        ))}
      </div>
      {cta === "work" ? (
        <Link className="btn btn--line compare-stage__cta" to="/work">
          View More Transformations
        </Link>
      ) : (
        <Link className="btn btn--line compare-stage__cta" to="/contact">
          Get a Free Quote
        </Link>
      )}
    </div>
  );
}
