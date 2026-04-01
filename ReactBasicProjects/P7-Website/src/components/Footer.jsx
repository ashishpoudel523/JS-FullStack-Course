import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="social-icons mt-4">
          <a href="https://www.facebook.com/ashishpoudel523" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/ashishpoudel_" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.x.com/ashishpoudel908" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
