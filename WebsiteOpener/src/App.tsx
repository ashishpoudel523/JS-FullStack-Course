import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <h1>Useful Websites</h1>
      <h3>Which website do you want to open? </h3>
      <Buttons name="Google" link="https://google.com" />
      <Buttons name="Facebook" link="https://fb.com" />
      <Buttons name="YouTube" link="https://youtube.com" />
      <Buttons name="Instagram" link="https://instagram.com" />
      <Buttons name="GitHub" link="https://github.com" />
      <Buttons name="LinkedIn" link="https://linkedin.com" />
      <Buttons name="Twitter" link="x.com" />
      <Buttons name="WhatsApp" link="web.whatsapp.com" />
    </>
  );
}

export default App;
