import React from "react";
import { ReactComponent as TrashIcon } from ".././../assets/images/Trash-icons.svg"
import Label from "../ui/Label";
import "./style.scss";


const OverLayEditHeader = (props) => {
  return (
    <div style={{ padding: "10px", background: "#1C252D" }}>
      <div className="sidebarHeader">
        <div className="configaration-details">
          <div className="static-text">
            <div className="Label-Icon-wrapper">
              <Label label={"Edit Site"} componentcls="configarationLabel" />
              <TrashIcon className="trashicons" onClick={''}/>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default OverLayEditHeader;