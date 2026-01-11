import { useState } from "react";
import { MyButton } from "./MyButton";
import { convertDate } from "../utils/date";

function ButtonList() {
  console.log("re-render vayo");

  const [title, setTitle] = useState("old title");
  const [descript, setDescript] = useState();
  const [date, setDate] = useState(new Date().toISOString());

  const currentDate = new Date().toISOString();

  function primaryFunction() {
    setTitle("New Title");
    console.log("PrimaryButton clicked");
  }

  function dangerFunction() {
    console.log(convertDate(currentDate));
    setDate(convertDate(currentDate));
    console.log("DangerButton clicked");
  }

  function secondaryFunction() {
    setDescript("New Description");
    console.log("SecondaryButton clicked");
  }

  return (
    <>
      {/* To write js espressions inside jsx, use { } */}
      <h1>{title}</h1>
      <div>{descript}</div>
      <p>{date}</p>
      <MyButton
        title="click me"
        varient="primary"
        size="sm"
        onClick={primaryFunction}
      />
      <MyButton
        title="click me 2"
        varient="danger"
        size="md"
        onClick={dangerFunction}
      />
      <MyButton
        title="click me 3"
        varient="secondary"
        size="lrg"
        onClick={secondaryFunction}
      />
    </>
  );
}

export { ButtonList };
