import React from "react";
import { useNavigate } from "react-router-dom";

//@custom components
import OverLay from "../OverLay";
import DropdownMenu from "../ui/DropdownMenu";
import TabMenuComponent from "../ui/TabMenuComponent";

//@custom styles
import "./style.scss";

//@assets
import { ReactComponent as GELogo } from ".././../assets/images/GE-logo.svg";

//@functional component
const MenuHeader = (props) => {
  let items = [];
  let navigate = useNavigate();
  let activeTabIndex = (location.pathname == "/history-page") ? 1 : 0;

  let {
    handleChange,
    tabOptions = [],
    setConfigurationOverlay,
    showConfigurationOverlay
  } = props;

  tabOptions.forEach((item) => {
    items.push({ label: item });
  });

  const handleTabChange = (event) => {
    handleChange(event);
  };

  let DropdownList = [{
    label: 'Profile',
    command: () => { navigate("/Profile"); }
  }, {
    label: 'About Us',
    command: () => { navigate("/AboutUs"); }
  }, {
    label: 'Help',
    command: () => { navigate("/Help"); }
  }, {
    label: 'Logout',
    icon: 'pi pi-sign-in'
  }];

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
          <span className="blocked-list" onClick={() => setConfigurationOverlay(true)} style={{ cursor: "pointer" }}>
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
