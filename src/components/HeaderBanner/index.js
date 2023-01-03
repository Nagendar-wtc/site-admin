import React, { useEffect } from "react";
import Label from "../ui/Label";
import { ReactComponent as ReactLogo } from ".././../assets/images/turbinesGroup.svg";
import "./style.scss";
import moment from "moment";
import { APP_DATE_FORMAT } from "../../utils/constants";

export default function HeaderBanner() {
  const [time, setTime] = React.useState('');
  useEffect(()=>{
    setInterval(()=>{ let nwDate = moment().format(APP_DATE_FORMAT); setTime(nwDate)}, 1000);
  },[])

  return (
    // <div className="header-banner" data-testid="header-banner">
      // <Label componentcls="app-name" label={"COMMAND APPROVER"} />
      <div>
      {/* <ReactLogo className="group-turbine-icon"/> */}
        {/* <Label label={"DOGGER BANK"} /> */}
        {/* <span className="vertical-divider" /> */}
        {/* <span data-testid="DateLabel-test">
      {time}
    </span> */}
      {/* </div> */}
    </div>
  );
}
