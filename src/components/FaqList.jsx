import { faqs } from "../data/content";

export default function FaqList() {
  return (
    <div className="faq">
      {faqs.map((item) => (
        <details key={item.q} className="faq__item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
