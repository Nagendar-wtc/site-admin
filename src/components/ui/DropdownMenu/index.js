import React, { useRef } from "react";
import { Menu } from 'primereact/menu';
import { ReactComponent as DownArrow } from "../../../assets/images/Down-arrow.svg";

import "./style.scss";
// import { useSelector } from "react-redux";

export default function DropdownMenu(props) {
  let { lists,DropdownName } = props;
  const menu = useRef(null);
  // const toast = useRef(null);
  return (
    <div className="MainDropdown">
    <Menu model={lists} data-testid="dropdownMenu-test" popup ref={menu} id="popup_menu" />
    <div id="dropdownName-div" onClick={(event) => menu.current.toggle(event)} className="dropdownName"><span >{DropdownName}</span><DownArrow className="down-arrow"/></div>
    </div>
  );
}
