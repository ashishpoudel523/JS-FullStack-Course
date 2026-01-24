// Presentational component
// ✔ Receives data via props
// ❌ No state
// ❌ No side effects

//Revision note: If a component only displays data → keep it dumb.
function Car({ brand, model }) {
  return (
    <p>
      I am a {brand} car and {model} model.
    </p>
  );
}

export default Car;
