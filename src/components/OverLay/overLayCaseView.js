import React from 'react'
import { ReactComponent as AcceptIcon } from ".././../assets/images/accept-icon.svg";


const overLayCaseView = () => {
  return (
     <div>
    <div className="Site_MainHeadingView">Case Type</div>
    <div className="Site_MainHeadingView">Included Sites</div>

    {/* <div className="actionss"> */}
      <AcceptIcon onClick={''}>Edit</AcceptIcon>
    </div>
  )
}

export default overLayCaseView