import { Link } from "react-router-dom";

import "./index.scss";
import Logo from "../../assets/images/logo.svg";
import PlayLogo from "../../assets/images/icon-play.svg";

function HomePage() {
  return (
    <div className="content">
      <img className="title" src={Logo} />
      <Link className="play__btn__container" to="/game">
        <img src={PlayLogo} alt="icon-play" />
      </Link>

      <button role="link" className="button">
        <Link to="/how-to-play" className="hOWTOPLAY">
          How to play
        </Link>
      </button>
    </div>
  );
}

export default HomePage;
