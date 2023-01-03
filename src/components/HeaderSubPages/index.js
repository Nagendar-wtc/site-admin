import React from "react";
import "./style.scss";
import {SubPagesJson} from "../../utils/constants"


const HeaderSubPages = (props) => {
  let { page,id  } = props;
  let items = [];

  return (
    <div className="ProfilePage" data-testid="header-subpages">
        <div className="PageTitle" data-testid="PageTitle">{page}</div>
        
      {
        Object.keys(SubPagesJson.Profile).map((key, i) => (
          id=="Profile" &&
        <div className="info-wrapper" key={i}>
          <div className="info-title">{key}</div>
          <div className="info-details">{SubPagesJson.Profile[key]}</div>
          <br></br>
        </div>
        
        ))
      }
      {
        Object.keys(SubPagesJson.AboutUs).map((key, i) => (
          
          id=="AboutUs" &&
        <div className="info-wrapper" key={i}>
          <div className="info-title">{key}</div>
          <div className="info-details">{SubPagesJson.AboutUs[key]}</div>
          <br></br>
        </div>
        
        ))
      }
      {
        Object.keys(SubPagesJson.Help).map((key, i) => (
          id=="Help" &&
        <div className="info-wrapper" key={i}>
          <div className="info-title">{key}</div>
          <div className="info-details">{SubPagesJson.Help[key]}</div>
          <br></br>
        </div>
        
        ))


      }
       
    </div>
  );
};
export default HeaderSubPages;
