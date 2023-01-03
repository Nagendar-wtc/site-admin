import React from "react";
import "./style.scss";
import ButtonComponent from "../ui/ButtonComponent";
import Modal from "../ui/Modal";
import Label from "../ui/Label";
import DateLabel from "../ui/DateLabel";

import { ReactComponent as TurbineGroup } from ".././../assets/images/turbinesGroup.svg";


const ToggleModal = (props) => {
let {toggleChecked, settoggleChecked} = props;
  return (
      <Modal
        className="command-request-modal"
        header="CHANGE SITE STATUS"
        visible={toggleChecked}
        style={{width: "25vw"}}
        closable={false}
        footer={
          <div className="footer-wrapper">
            <ButtonComponent
              className="cancel-btn"
              buttonText="Cancel"
              onClick={() => settoggleChecked(false)}
            />
            <ButtonComponent
              className="action-btn"
              buttonText={"Confirm"}
              onClick={() => settoggleChecked(false)}
            />
          </div>
        }
      >
        {
          <>
            <div className="attempting-lable">
              You are changing asset status to:{" "}
              <span className="attempting-value">
                {toggleChecked ? "Block" : "Unblock"}
              </span>
            </div>
            <div className="main-label">
              <TurbineGroup className="Turbine-wings-icon" />
              <Label label={"DOGGER BANK"} componentcls="doggerBankLabel" />
            </div>
            <div className="modified-lable">
              Last Modified:{" "}
              <span className="modified-value">
                <DateLabel className="date-label" />
              </span>
            </div>
            <div className="note-className">
              <span>*All the commands in request queue will rejected</span>
            </div>
          </>
        }
      </Modal>
  );
}

export default ToggleModal;
