import React from "react";
import { Container } from "reactstrap";

import Label from "../ui/Label";

import "./style.scss";

const OverLayHeader = (props) => {
  let {selectedData, edittableItem} = props;
  return (
    <>
    <div style={{ padding: "10px", background: "#1C252D" }}>
      <div className="sidebarHeader">
        <div className="configaration-details">
          <div className="static-text">
            <div>
               {props.type == "View" ? 
              <Label label={"Site Details"} componentcls="configarationLabel" />
               :
              
                <Label label={"Add New Site"}  componentcls="configarationLabel" ></Label>

              } 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OverLayHeader;
