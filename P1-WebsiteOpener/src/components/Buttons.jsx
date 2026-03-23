function Buttons({ name, link }) {
  return (
    <div>
      <a href={link} target="_blank">
        <button className="btn">{name}</button>{" "}
      </a>
    </div>
  );
}

export default Buttons;
