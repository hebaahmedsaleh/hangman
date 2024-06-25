import "./App.scss";
import Logo from "./assets/images/logo.svg";
import PlayLogo from "./assets/images/icon-play.svg";

function App() {
  return (
    <main>
      <div className="content">
        <img className="title" src={Logo} />
        <div className="play__btn__container">
          <img src={PlayLogo} alt="icon-play" />
        </div>

        <button role="link" className="button">
          <div className="hOWTOPLAY">How to play </div>
        </button>
      </div>
    </main>
  );
}

export default App;
