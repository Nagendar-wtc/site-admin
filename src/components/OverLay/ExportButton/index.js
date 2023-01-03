import React, { useState } from "react";
import "../style.scss";

import ExportOverlay from "./exportOverlay";
import { ReactComponent as DownloadIcon } from "../.././../assets/images/Download-icon.svg";

const ExportButton = (props) => {
  const [show, setShow] = useState(false);

  const onCancelClick = () => {
    setShow(false);
    props.updateExportPopupFlag(false);
  };

  const onDownloadClick = () => {
    setShow(false);
    props.updateExportPopupFlag(false);
  };

  return (
    <>
      <div className="export-button">
        <div className="export-btn-wrapper">
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            <DownloadIcon className="download-icon"/>
          </span>
        </div>
          <ExportOverlay
            showOverlay={show}
            onDownloadClick={onDownloadClick}
            onCancelClick={onCancelClick}
          />
      </div>
    </>
  );
};

export default ExportButton;
