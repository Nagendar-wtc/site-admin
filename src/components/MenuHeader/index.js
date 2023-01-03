import React from "react";
import "./style.scss";
import TabMenuComponent from "../ui/TabMenuComponent";
import { ReactComponent as TurbinWings } from ".././../assets/images/turbine-wings.svg";
import { ReactComponent as GELogo } from ".././../assets/images/GE-logo.svg";
import { ReactComponent as Blocked } from ".././../assets/images/Blocked.svg";
import { ReactComponent as RightArrow } from ".././../assets/images/right-arrow.svg";
import DropdownMenu from "../ui/DropdownMenu";
import { useNavigate } from "react-router-dom";
import OverLay from "../OverLay";


const MenuHeader = (props) => {
  let navigate=useNavigate();
  let activeTabIndex = 0;
  let {
    tabOptions = [],
    handleChange,
    setConfigurationOverlay,
    showConfigurationOverlay
  } = props;
  let items = [];
  tabOptions.forEach((item) => {
    items.push({ label: item });
  });

  if(window.location.pathname=="/landing-page")
    {
      activeTabIndex=0;
    }else if(window.location.pathname=="/history-page")
    {
      activeTabIndex=1;
    }

  const handleTabChange = (event) => {
    handleChange(event);
  };

  let DropdownList = [
    {
        label: 'Profile',
        command:()=>{ navigate("/Profile");}
    },
    {
        label: 'About Us',
        command:()=>{navigate("/AboutUs");}
    },
    {
        label: 'Help',
        command:()=>{navigate("/Help");}
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-in'
    }
];
  return (
    <>
    <div className="menu-header" data-testid="menu-header">
      <div className="menu-tab">
        <div className="ge-logo-wrapper">
          <GELogo className="ge-logo" />
         </div>
         <span className='logo-divider'></span>
        <TabMenuComponent
          tabOptions={items}
          onChange={handleTabChange}
          activeIndex={activeTabIndex}
        />
      </div>
      <div className="menu-profile">
        <span className="blocked-list" onClick={() => setConfigurationOverlay(true)} style={{cursor:"pointer"}}>
          {/* <TurbinWings className="turbine-wing-icon"/> */}
          {/* 200 <Blocked className="blocked-icon"/> */}
          {/* 4Blocked <RightArrow className="right-icon" /> */}
        </span>
        <span className="vertical-divider" />
        <div>
          <DropdownMenu DropdownName={"Simon Saez"} lists={DropdownList} />
        </div>
      </div>
    </div>
    <OverLay
      showConfigurationOverlay={showConfigurationOverlay}
      setConfigurationOverlay={setConfigurationOverlay}
    />
  </>
  );
};
export default MenuHeader;
