import { cloneElement, useId, useRef, useState } from "react";
import { propertyTypes, serviceOptions } from "../data/content";

const empty = {
  name: "",
  email: "",
  phone: "",
  property: "",
  service: "",
  zip: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone number, including the area code.";
  }
  if (!values.property) errors.property = "Choose a property type.";
  if (!values.service) errors.service = "Choose a service.";
  if (!/^\d{5}$/.test(values.zip.trim())) errors.zip = "Enter a 5-digit ZIP code.";
  return errors;
}

export default function QuoteForm() {
  const baseId = useId();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const headingRef = useRef(null);

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setDone(true);
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  if (done) {
    return (
      <div className="confirm" role="status">
        <p className="demo-badge">Demo form</p>
        <h3 ref={headingRef} tabIndex={-1}>
          Nothing was sent.
        </h3>
        <p>
          This demonstration did not submit, store, or deliver your note. ClearEdge is not an operating business, so there is no one to receive it.
        </p>
        <button
          className="btn btn--line"
          type="button"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setDone(false);
          }}
        >
          Start the form again
        </button>
      </div>
    );
  }

  const errorList = Object.values(errors);

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      <p className="demo-badge">Demo form</p>
      <p className="form-lead">Nothing on this form is sent or saved.</p>
      {errorList.length > 0 ? (
        <div className="form-alert" role="alert">
          <p>Check the highlighted fields before trying again.</p>
        </div>
      ) : null}
      <div className="form-grid">
        <Field id={`${baseId}-name`} label="Name" error={errors.name}>
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field id={`${baseId}-email`} label="Email" error={errors.email}>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field id={`${baseId}-phone`} label="Phone" error={errors.phone}>
          <input
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field id={`${baseId}-zip`} label="ZIP code" error={errors.zip}>
          <input
            id={`${baseId}-zip`}
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="32801"
            value={values.zip}
            onChange={update}
            aria-invalid={Boolean(errors.zip)}
          />
        </Field>
        <Field id={`${baseId}-property`} label="Property type" error={errors.property}>
          <select
            id={`${baseId}-property`}
            name="property"
            value={values.property}
            onChange={update}
            aria-invalid={Boolean(errors.property)}
          >
            <option value="">Select a property type</option>
            {propertyTypes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id={`${baseId}-service`} label="Service needed" error={errors.service}>
          <select
            id={`${baseId}-service`}
            name="service"
            value={values.service}
            onChange={update}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id={`${baseId}-message`} label="Message" className="field--full" hint="Optional">
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={update}
          />
        </Field>
      </div>
      <button className="btn btn--lime btn--forest-text" type="submit">
        Get My Free Quote
      </button>
    </form>
  );
}

function Field({ id, label, error, hint, className = "", children }) {
  const errorId = `${id}-error`;
  const control = error
    ? cloneElement(children, { "aria-invalid": true, "aria-describedby": errorId })
    : children;
  return (
    <div className={`field ${className} ${error ? "field--error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {hint ? <span className="field__hint"> {hint}</span> : null}
      </label>
      {control}
      {error ? (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
