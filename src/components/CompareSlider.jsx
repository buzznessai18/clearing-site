import { useCallback, useId, useRef, useState } from "react";

export default function CompareSlider({
  src,
  alt,
  width,
  height,
  title,
  before,
  large = false,
  hint = false,
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef(null);
  const sliderId = useId();

  const clamp = (value) => Math.min(100, Math.max(0, value));

  const setFromClientX = useCallback((clientX) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect?.width) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(next));
  }, []);

  function onPointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    setDragging(true);
    frameRef.current?.setPointerCapture?.(event.pointerId);
    setFromClientX(event.clientX);
  }

  function onPointerMove(event) {
    if (!dragging) return;
    setFromClientX(event.clientX);
  }

  function endDrag(event) {
    if (!dragging) return;
    setDragging(false);
    if (frameRef.current?.hasPointerCapture?.(event.pointerId)) {
      frameRef.current.releasePointerCapture(event.pointerId);
    }
  }

  function onKeyDown(event) {
    const step = event.shiftKey ? 10 : 5;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPos((value) => clamp(value - step));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPos((value) => clamp(value + step));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPos(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPos(100);
    }
  }

  const rounded = Math.round(pos);

  return (
    <figure className={`compare ${large ? "compare--large" : ""}`}>
      <div
        className={`compare__frame ${dragging ? "is-dragging" : ""}`}
        ref={frameRef}
        style={{ "--pos": `${pos}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <img
          className="compare__img"
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable="false"
          loading={large ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="grime" aria-hidden="true">
          <img
            className="grime__photo"
            src={before}
            alt=""
            width={width}
            height={height}
            draggable="false"
            loading={large ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
        <span className="compare__tag compare__tag--before" style={{ opacity: pos > 14 ? 1 : 0 }}>
          Before
        </span>
        <span className="compare__tag compare__tag--after" style={{ opacity: pos < 86 ? 1 : 0 }}>
          After
        </span>
        <div
          id={sliderId}
          className="compare__handle"
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={rounded}
          aria-orientation="horizontal"
          aria-label={`${title}. Before and after comparison.`}
          aria-valuetext={`${rounded} percent of the before side is visible.`}
          onKeyDown={onKeyDown}
        >
          <span className="compare__knob" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M9 6 L4 12 L9 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 6 L20 12 L15 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <figcaption className="compare__caption">
        <p className="compare__title">{title}</p>
        <p className="compare__note">Demo comparison — replace with real project photos.</p>
        <p className="compare__note">
          Illustrative grime on one photograph so the angle and light match. Not a ClearEdge customer project.
        </p>
        {hint ? (
          <p className="compare__hint">Drag the divider, or focus it and use the arrow keys. Shift moves in larger steps.</p>
        ) : null}
        <div className="compare__controls">
          <button type="button" onClick={() => setPos((value) => clamp(value - 10))}>
            Show more after
          </button>
          <button type="button" onClick={() => setPos(50)}>
            Center
          </button>
          <button type="button" onClick={() => setPos((value) => clamp(value + 10))}>
            Show more before
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
