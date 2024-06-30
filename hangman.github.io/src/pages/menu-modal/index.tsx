import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import "./index.scss";
import Logo from "@assets/images/Paused.svg";

ReactModal.setAppElement("#modal");

function MenuModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Minimal Modal Example"
      className="modal"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      <div className="content">
        <img className="title" src={Logo} />

        <button role="link" className="button" onClick={() => setIsOpen(false)}>
          <div className="hOWTOPLAY">Continue</div>
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

export default MenuModal;
