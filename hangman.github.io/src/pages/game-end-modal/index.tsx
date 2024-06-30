import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import "./index.scss";
import LostLogo from "@assets/images/You_Lose.svg";
import WonLogo from "@assets/images/You_Win.svg";

ReactModal.setAppElement("#modal");

function EndGameModal({
  isEndOpen,
  setIsEndOpen,
  hasWon,
}: {
  isEndOpen: boolean;
  setIsEndOpen: (isOpen: boolean) => void;
  hasWon: boolean;
}) {
  return (
    <ReactModal
      isOpen={isEndOpen}
      contentLabel="game end Modal Example"
      className="modal"
      onRequestClose={() => setIsEndOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      <div className="content">
        <img className="title" src={hasWon ? WonLogo : LostLogo} />

        <button onClick={() => window.location.reload()} className="button">
          <div className="hOWTOPLAY">Play again</div>
        </button>

        <button role="link" className="button">
          <Link to="/game" className="hOWTOPLAY">
            New Category
          </Link>
        </button>

        <button role="link" className="button">
          <Link to="/" className="hOWTOPLAY">
            Quit Game
          </Link>
        </button>
      </div>
    </ReactModal>
  );
}

export default EndGameModal;
