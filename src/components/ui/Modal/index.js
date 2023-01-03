import React from "react";
import "./style.scss";
import { Dialog } from "primereact/dialog";

export default function Modal(props) {
  let { className, footer, visible=true, onHide, header="header", closable=true, style } = props;
  return (
    <Dialog
      className={className}
      header={header}
      visible={visible}
      style={style}
      footer={footer}
      onHide={() => onHide()}
      closable={closable}
      data-testid="modal-test"
    >
        {props.children}
    </Dialog>
  );
}
