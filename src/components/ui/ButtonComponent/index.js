import React from "react";
import { Button } from 'primereact/button';
import "./style.scss";
// import { useSelector } from "react-redux";

export default function ButtonComponent(props) {
  let { buttonText, onClick } = props;
  return (
    <span className="template">
      <Button label={buttonText} className="p-button-sm" aria-label={buttonText} data-testid="Button-test" onClick={()=>onClick()}  {...props}/>
    </span>
  );
}
