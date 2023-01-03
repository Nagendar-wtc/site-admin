import React, {useState} from "react";
import { RadioButton } from 'primereact/radiobutton';

import "../style.scss";
import ButtonComponent from "../../ui/ButtonComponent";

const ExportOverlay = (props) => {
  let {showOverlay, onDownloadClick, onCancelClick} = props;
  const [exportOption, setExportOption] = useState(null);

  if (showOverlay) {
    return (
      <>
        <div className="export-overlay">
          <div className="export-header">
            <span className="header-text">EXPORT</span>
          </div>
          <div className="export-options">
            <span className="export-options-text">SELECT FORMAT</span>
            <div className="export-options-list">
              <div className="field-radiobutton">
                <RadioButton inputId="csv" name="exportOption" value="csv" onChange={(e) => setExportOption(e.value)} checked={exportOption === 'csv'} />
                <label htmlFor="csv" className="export-label">CSV</label>
              </div>
              <div className="field-radiobutton">
                <RadioButton inputId="pdf" name="exportOption" value="pdf" onChange={(e) => setExportOption(e.value)} checked={exportOption === 'pdf'} />
                <label htmlFor="pdf" className="export-label">PDF</label>
              </div>
            </div>
          </div>
          <div className="export-footer">
            <ButtonComponent
              className="download-btn"
              buttonText={"Download"}
              onClick={() => onDownloadClick()}
            />
            <ButtonComponent
              className="cancel-btn"
              buttonText={"Cancel"}
              onClick={() => onCancelClick()}
            />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ExportOverlay;
