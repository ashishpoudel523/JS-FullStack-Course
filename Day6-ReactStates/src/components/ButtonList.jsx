import { useState } from "react";
import Button from "./Button";
import { convertDate } from "../utils/date";

// Smart component
// ✔ Owns state
// ✔ Owns event handlers
// ✔ Coordinates child components
function ButtonList() {
  // State triggers re-render when updated
  const [title, setTitle] = useState("Old Title");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString());

  // Event handler: updates state → causes re-render
  const handlePrimaryClick = () => {
    setTitle("New Title");
  };

  // Uses utility function (logic separated from UI)
  const handleDangerClick = () => {
    setDate(convertDate(new Date().toISOString()));
  };

  // Another independent state update
  const handleSecondaryClick = () => {
    setDescription("New Description");
  };

  return (
    <div>
      {/* UI reflects current state */}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>

      {/* Events flow UP, UI flows DOWN */}
      <Button
        title="Primary"
        variant="primary"
        size="sm"
        onClick={handlePrimaryClick}
      />

      <Button
        title="Danger"
        variant="danger"
        size="md"
        onClick={handleDangerClick}
      />

      <Button
        title="Secondary"
        variant="secondary"
        size="lg"
        onClick={handleSecondaryClick}
      />
    </div>
  );
}

export default ButtonList;

/* Revision notes (very important):

State lives where it changes

Buttons don’t change state — handlers do

Parent controls behavior, child just triggers events

*/
