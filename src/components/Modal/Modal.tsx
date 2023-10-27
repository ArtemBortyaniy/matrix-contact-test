import React, { Component, ReactNode } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export class Modal extends Component<ModalProps> {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e: any) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    if (!modalRoot) {
      return null;
    }

    return createPortal(
      <div className={css.modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal__content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
