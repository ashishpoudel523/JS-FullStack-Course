import "./MyButton.css";

function MyButton(props) {
  const { title, varient, size, ...rest } = props;
  return (
    <div>
      <button className={`btn-${varient} btnn-${size}`} {...rest}>
        {title}
      </button>
    </div>
  );
}

export { MyButton };
