import "./App.css";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <div>
      <h1>Useful Websites</h1>
      <h3>Which website do you want to open? </h3>
      <Buttons name="Google" link="https://google.com" />
      <Buttons name="Facebook" link="https://fb.com" />
      <Buttons name="YouTube" link="https://youtube.com" />
      <Buttons name="Instagram" link="https://instagram.com" />
      <Buttons name="GitHub" link="https://github.com" />
      <Buttons name="LinkedIn" link="https://linkedin.com" />
      <Buttons name="Twitter" link="https://x.com" />
      <Buttons name="WhatsApp" link="https://web.whatsapp.com" />
    </div>
  );
};

export default App;
