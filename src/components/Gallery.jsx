import { useState } from "react";
import { galleryFilters, galleryItems } from "../data/content";

export default function Gallery({ id = "project-gallery" }) {
  const [filter, setFilter] = useState("All");
  const visible = galleryItems.filter((item) => filter === "All" || item.category === filter);
  const browsingAll = filter === "All";

  return (
    <div>
      <div className="filters" role="toolbar" aria-label="Filter visual examples">
        {galleryFilters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} illustrative {visible.length === 1 ? "example" : "examples"} in {filter}.
      </p>
      <div className="masonry" id={id}>
        {visible.map((item) => (
          <figure
            key={item.src}
            className={`${browsingAll && item.wide ? "is-wide" : ""} ${browsingAll && item.tall ? "is-tall" : ""}`}
          >
            <div className="masonry__media">
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
              <span className="illus">Illustrative</span>
            </div>
            <figcaption>
              <span className="masonry__title">{item.title}</span>
              <span className="masonry__cat">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
