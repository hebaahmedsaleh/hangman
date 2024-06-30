import { memo } from "react";
import type { FC, ReactNode } from "react";

import ReactModal from "react-modal";

interface Props {
  className?: string;
}

ReactModal.setAppElement("#modal");

export const MenuModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => ReactNode;
}) => {
  return (
    <ReactModal isOpen={isOpen} contentLabel="Minimal Modal Example">
      <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </ReactModal>
  );
};
