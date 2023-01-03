import React, { useRef} from "react";
import { ReactComponent as ToastLogo } from "../assets/images/toast-logo.svg";
import Label from "../components/ui/Label";
import { ReactComponent as WingsIcon } from "../assets/images/turbine-wings.svg";
import { Toast } from 'primereact/toast';
import { Link } from "react-router-dom";
import DateLabel from "../components/ui/DateLabel";


export const ShowConfirm = () => {
    
    console.log("Triggered");
    
    
     return (
      <div class="customToast">
        <div className="flex flex-column">
            <ToastLogo className="group-turbine-icon"/>
            <Label componentcls="text-label" label={" Dogger Bank"} />
            <span className="vertical-divider" > </span>
            <WingsIcon className="turbine-wing-icon"/>
            <span className="text-label"> 17 Assets</span>
        </div>
        <div class="toastresponse">Requests Approved</div>
        <div class="wrappertoast"><Link className="redirecthistory" to="../history-page">Show History</Link><span className="vertical-divider" /><DateLabel className="text-datalabel"/></div>
        </div>
    );
}