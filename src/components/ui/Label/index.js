import React from "react";
import Localization from "../Localization";
import "./style.scss";
// import { useSelector } from "react-redux";

export default function Label(props) {
  let { label, componentcls } = props;
  return (
    <span data-testid="Label-test" className={componentcls} title={`${label}`}>
      <Localization>{label}</Localization>
    </span>
  );
}
