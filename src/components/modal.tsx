import { ReactNode, useEffect } from "react";
import Button from "./button";

type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: (close: boolean) => void;
};

const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
  useEffect(() => {}, [isOpen]);
  return (
    <>
      {isOpen && (
        <div>
          <div className="modal__overlay" onClick={() => onClose()}></div>
          <div className="modal">
            <div className="modal__header">
              <div className="modal__header__title"></div>
              <h5 className="modal__title">Modal title</h5>
              <Button text="Click me!" />
            </div>
            <div className="modal__body">
              <p>Text</p>
            </div>
            <div className="modal__footer"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
