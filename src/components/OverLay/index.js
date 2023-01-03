import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";

import OverLayView from "../OverLay/OverLayView";
import OverLayContent from "./OverLayContent.js";
import OverLayHeader from "./OverLayHeader.js";
import OverLayCaseView from "./overLayCaseView"
import ToggleModal from "./ToggleModal.js";
import { ReactComponent as Close } from ".././../assets/images/reject-icon.svg";
import { ReactComponent as Fullscreen} from ".././../assets/images/full-screen.svg";
import { ReactComponent as LeftArrow} from ".././../assets/images/left-arrow.svg";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const OverLay = (props) => {
  const [fullScreen, setFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [toggleChecked, settoggleChecked] = useState(false);
  const navigate = useNavigate();

  let { showConfigurationOverlay, setConfigurationOverlay , selectedData , View} = props;


  const handleTabChange = (event) => {
    setActiveTab(event.index);
  };
   const navigateHome =()=>{
    navigate('/');
   }

  const customIcons = (
    <>
      {/* <div
        className="p-sidebar-icon p-link mr-1"
        onClick={() => setFullscreen(!fullScreen)}
      >
        <Fullscreen />
      </div> */}

      <div
        className="LeftArrow"
        onClick={navigateHome}
      >
        <LeftArrow/>
      </div>
      <div
        className="p-sidebar-icon p-link mr-1"
        onClick={() => setConfigurationOverlay(false)}
      >
        <Close />
      </div>
    </>
  );

  console.log(props.isOverlay, "hello");
  return (
    <Sidebar
      visible={showConfigurationOverlay}
      className="p-sidebar-md"
      showCloseIcon={false}
      onHide={() => setConfigurationOverlay(false)}
      position="right"
      fullScreen={fullScreen}
      baseZIndex={9999999}
      icons={customIcons}
      style={{ background: "#1C252D" }}
    >
      {/* <OverLayHeader
        toggleChecked={toggleChecked}
        settoggleChecked={settoggleChecked}
        activeTab={activeTab}
        selectedData={selectedData}
      /> */}

      {props.isOverlay ? (
        <OverLayView
          activeTab={activeTab}
          setActiveTab={activeTab}
          handleTabChange={handleTabChange}
          selectedData={selectedData}
        />
      ) : (
        <OverLayContent
          activeTab={activeTab}
          setActiveTab={activeTab}
          handleTabChange={handleTabChange}
        />
      )}

     {/* {props.isOverlayCase ? (
        <OverLayCaseView
          // activeTab={activeTab}
          // setActiveTab={activeTab}
          // handleTabChange={handleTabChange}
        />
      ) : (
        <OverLayContent
          activeTab={activeTab}
          setActiveTab={activeTab}
          handleTabChange={handleTabChange}
        />
      )} */}

      <ToggleModal
        toggleChecked={toggleChecked}
        settoggleChecked={settoggleChecked}
      />
    </Sidebar>
  );
};

export default OverLay;
