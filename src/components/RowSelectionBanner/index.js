import React from "react";
import ButtonComponent from "../ui/ButtonComponent";

import "./style.scss";
// import { useSelector } from "react-redux";

export default function RowSelectionBanner(props) {
  let { onHide,selectionCount=0, handleClick } = props;
  return (
    <div className="RowSelectionBanner" data-testid="row-selection" id="RowSelectionBanner">
      <div className="row-select">
        <div className="selected-value">REQUESTS / {selectionCount} SELECTED</div>
        <span className="vertical-divider"></span>
        <ButtonComponent buttonText={"Accept"} onClick={()=>handleClick("Accept")}/>
        <ButtonComponent buttonText={"Reject"} onClick={()=>handleClick("Reject")} />
      </div>
      <span className="closeSelectionBanner" data-testid="row-selection-close" onClick={() => onHide()}>
        <i className="pi pi-times"></i>
      </span>
    </div>
  );
}
