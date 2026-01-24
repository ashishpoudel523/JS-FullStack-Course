import "./Button.css";

// Reusable UI component
// ✔ Controlled via props
// ✔ No internal state
// ✔ Predictable API
function Button({ title, variant, size, ...rest }) {
  return (
    <button
      type="button" // prevent accidental form submit
      className={`btn btn-${variant} btn-${size}`}
      {...rest} // event comes from parent
    >
      {title}
    </button>
  );
}

export default Button;
