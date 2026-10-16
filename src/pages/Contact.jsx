import QuoteForm from "../components/QuoteForm";
import usePageMeta from "../hooks/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact | ClearEdge Exterior Cleaning",
    "Demonstration quote form for the fictional ClearEdge Exterior Cleaning website. Submissions are not sent or stored. Example location: Orlando, Florida."
  );

  return (
    <>
      <header className="page-intro">
        <div className="wrap">
          <h1>Request a free quote.</h1>
          <p className="lede">
            Use the form to see how a request would be gathered. It is a front-end demonstration. Your details stay in the browser until you leave the page, and they are never delivered to a business.
          </p>
        </div>
      </header>

      <section className="section contact-page">
        <div className="wrap contact-grid">
          <QuoteForm />
          <aside className="contact-aside">
            <p className="contact-aside__kicker">Example service area</p>
            <p className="contact-aside__place">Orlando, Florida</p>
            <p>
              The example location is Orlando and the communities around it. A real company would list the cities it serves and the ones it does not. This concept does not draw that map.
            </p>
            <ul>
              <li>No street address</li>
              <li>No phone number</li>
              <li>No social accounts</li>
              <li>No appointments held</li>
            </ul>
            <p>
              Independent concept website — not an operating business. Fictional website concept created for demonstration purposes.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
