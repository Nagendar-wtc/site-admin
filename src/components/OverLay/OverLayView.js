
/* eslint-disable */
import React, { useState, useEffect } from "react";
import OverLayHeader from "./OverLayHeader";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import dropdownJsonData from "../../utils/dummyData/commandAuditTrail.json";
import "./style.scss";
import { InputText } from "primereact/inputtext";
import ButtonComponent from "../ui/ButtonComponent";

import OverLayEdit from "./OverLayEdit";

import { ReactComponent as EditIcon } from ".././../assets/images/Edit-icon.svg";

const overLayView = (props) => {
  let { selectedData } = props;

  const [country, setCountry] = useState();
  const [readMore, setReadMore] = useState(false);
  const [formvalues, setFormValues] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleCountry = (e) => {
    setCountry(e.value);
    handleState(e.value.id);
  };

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setIsEdit((current) => !current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
  };
     const handleSubmitReadmore = (e) => {
         e.preventDefault();
     setReadMore((state) => !state);
              // setFormErrors(validate(formvalues));
              // setIsSubmit(true);
  };

  const showmore = () => {
    setItemsToShow(selectedData.timer.length);
  };

  const showless = () => {
    setItemsToShow(3);
  };


  console.log();

  return (
    <React.Fragment>
      <div>
        {!isEdit ? (
          <form onSubmit={handleSubmit}>
            <OverLayHeader type ={"View"}/>
            <div className="Main_Heading">
              <div>
                <div className="actionss">
                  <EditIcon onClick={handleClick}>Edit</EditIcon>
                </div>

                <div className="Site_MainHeading">Site Details</div>
              </div>
              <div className="Site_Heading_wrapper">
                <div>
                  <p className="Title_Heading_wrapper">Site Name</p>
                  <p style={{ color: "darkgrey" }}>{selectedData.sitename}</p>
                </div>
                <div className="">
                  <p className="Title_Heading_wrapper">Site Id </p>
                  <p style={{ color: "darkgrey" }}>{selectedData.id}</p>
                </div>
                <div className="heading">
                  <p className="Title_Heading_wrapper">Src Id</p>
                  <p style={{ color: "darkgrey" }}>{selectedData.src_Id}</p>
                </div>
                <div>
                  <p className="Title_Heading_wrapper">Source ID</p>
                  <p style={{ color: "darkgrey" }}> {selectedData.source_Id}</p>
                </div>

                <div className="">
                  <p className="Title_Heading_wrapper">WebHMIURL</p>
                  <p style={{ color: "darkgrey" }}>{selectedData.sentBy}</p>
                </div>

                <div>
                  <p
                    className="Title_Heading_wrapper"
                    style={{ color: "white" }}
                  >
                    cmdAdapterId
                  </p>
                  <p style={{ color: "darkgrey" }}>{selectedData.action}</p>
                </div>
              </div>

              <hr />
              <div className="Application" style={{ color: "white" }}>
                Application Configuration
              </div>
              <div className="Application_title">
                <div className="toggle">
                  <p className="ExcludeAssests" style={{ color: "white" }}>
                    {" "}
                    Automation
                  </p>
                  <p style={{ color: "darkgrey" }}>{selectedData.receivedAt}</p>
                </div>
                <div className="Exclude_headingg">
                  <p className="ExcludeAssests" style={{ color: "white" }}>
                    Exclude Assets
                  </p>
                  {/* <p style={{ color: "darkgrey" }}>{selectedData.timer}</p> */}
                       {readMore ? <p className="showwrapper">{selectedData.timer}</p> : `${selectedData.timer.slice(0, 8)}...`}
                       {selectedData.timer.length > 8 ? (
                      <button className="btn-show-less" onClick={handleSubmitReadmore}>
                        {readMore ? "show less" : "read more"}
                      </button>
                      ) : (" ") } 
                </div>
              </div>

              <div>
                <hr className="hr"></hr>
                <h4 className=" Source_Protocol">
                  Source Protocol Configuration
                </h4>
                <div className="DropSource">
                  <div>
                    <p className="Proto" style={{ color: "white" }}>
                      Protocol
                    </p>
                    <p style={{ color: "darkgrey" }}>{selectedData.protocol}</p>
                  </div>

                  <div className="WebService_title">
                    <p className="Proto" style={{ color: "white" }}>
                      WebService Type
                    </p>
                    <p style={{ color: "darkgrey" }}>
                      {selectedData.webService}
                    </p>
                  </div>
                </div>
                <div className="Crdentiall">
                  <div className="Creden">
                    <p className="" style={{ color: "white" }}>
                      Credentials
                    </p>
                    <p style={{ color: "darkgrey" }}>
                      {selectedData.credential}
                    </p>
                  </div>
                  <div className="Enable_heading">
                    <p className="Proto" style={{ color: "white" }}>
                      Enable/Disable
                    </p>
                    <p style={{ color: "darkgrey" }}>{selectedData.Enable}</p>
                  </div>
                </div>
              </div>
              <div>
                <hr className="hr"></hr>
                <div className="Audit">Audit</div>
                <div className="Audit_Heading">
                  <div className="LastUPdate">
                  <div>
                    <p className="Update_By" style={{ color: "white" }}>
                      Last Updated By
                    </p>

                    <p style={{ color: "darkgrey" }}>
                      {selectedData.Lastupdateby}
                    </p>
                    </div>

                
                    <div>
                    <p className="Update_By" style={{ color: "white" }}>
                      {" "}
                      Last Updated Date
                    </p>

                    <p style={{ color: "darkgrey" }}>
                      {selectedData.lastupdatedate}
                    </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" Btnn">
              <ButtonComponent className="cancel-btnn" buttonText={"Cancel"} />
            </div>
          </form>
        ) : (
          <OverLayEdit edittableItem={selectedData} />
        )}
      </div>
    </React.Fragment>
  );
};

export default React.memo(overLayView);
