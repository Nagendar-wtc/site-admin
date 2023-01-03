import React, { useEffect, useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from "react-redux";

import { getAuditConfiguration } from "../../../actions";
import TableGrid from "../../ui/TableGrid";
import "../style.scss";
import { ReactComponent as DownloadIcon } from "../.././../assets/images/Download-icon.svg";
import { ReactComponent as WingsIcon } from "../.././../assets/images/turbine-wings.svg";
import { ReactComponent as StartIcon } from "../.././../assets/images/start-icon.svg";
import { ReactComponent as StopIcon } from "../.././../assets/images/stop-icon.svg";
import { ReactComponent as ShutdownIcon } from "../.././../assets/images/shutdown-icon.svg";
import { ReactComponent as ManualIcon } from "../.././../assets/images/manual-icon.svg";
import { ReactComponent as ResetIcon } from "../.././../assets/images/reset-icon.svg";

const HistoryConfiguration = (props) => {
  let dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);
  const [selectedDate, setSelectedDate] = useState([new Date(),new Date()]);
  const [selectTime, setSelectTime] = useState(null);

  const timeSelectionOptions = [
    { name: 'Today', code: 'today' },
    { name: 'Last 7 days', code: '7' },
    { name: 'Last 30 days', code: '30' },
    { name: 'custom', code: 'custom' },
  ];

  const auditConfiguration = useSelector((state) => {
    let { auditConfiguration } = state.configReducer;
    return auditConfiguration;
  });
  // const auditConfiguration = [
  //   {
  //       user: "212735828",
  //       changetype: "Command_Update",
  //       timestamp: 90234,
  //       id: "START",
  //       change: {
  //           oldValue: "'Disabled'",
  //           newValue: "'Pre-Approved'"
  //         },
  //   },{
  //       user: "212735828",
  //       changetype: "Asset_Update",
  //       timestamp: 90234,
  //       id: "WTG002",
  //       change: {
  //         oldValue: "'true'",
  //         newValue: "'false'"
  //       },
  //   }
  // ];

  useEffect(() => {
    dispatch(getAuditConfiguration());
  }, [dispatch]);
  
  useEffect(() => {
    setTableData(auditConfiguration);
  }, [auditConfiguration]);

  //Adding icons based on API Response for command column.
  const commandBodyTemplate = (rowData) => {
    return ( 
      <
        div className = "command-wrapper" >
        {
            rowData.id === "START" ? ( <
                StartIcon / >
            ) : [rowData.id === "STOP" ? ( <
                StopIcon / >
            ) : [rowData.id === "RESET" ? ( <
                ResetIcon / >
            ) : [rowData.id === "MANUAL BATTERY TEST" ? ( <
                ManualIcon / >
            ) : [rowData.id === "LOAD SHUTDOWN" ? ( <
                ShutdownIcon / >
            ) : [rowData.changetype === "Asset_Update" ? ( <
                WingsIcon / >
            ) : console.log("Last")]]]]]
        }
        <span class="command-data"> {rowData.id} </span> 
        </div>
    );
};

const modifiedToTemplate = (rowData) => {
  let modifiedTo = rowData && rowData.change && rowData.change.newValue.slice(1, -1);
  return (
    <span class="command-data"> {modifiedTo} </span> 
  );
}

const previousStateTemplate = (rowData) => {
  let previousState = rowData && rowData.change && rowData.change.oldValue.slice(1, -1);
  return (
    <span class="command-data"> {previousState} </span> 
  );
}

  let columnHeaders = [
    {
      headerName: "Name",
      colId: "name",
      field: "id",
      sortable: true,
      style: {
        width: "10em",
      },
      component: commandBodyTemplate,
    },
    {
      headerName: "Modified by",
      colId: "user",
      field: "user",
      sortable: true,
      style: {
        width: "1em",
      },
    },
    {
      headerName: "Previous State",
      colId: "receivedAt",
      field: "receivedAt",
      sortable: true,
      style: {
        width: "1em",
      },
      component: previousStateTemplate,
    },
    {
      headerName: "Modified to",
      colId: "receivedAt",
      field: "receivedAt",
      sortable: true,
      style: {
        width: "1em",
      },
      component: modifiedToTemplate,
    },
    {
      headerName: "Modified at",
      colId: "timestamp",
      field: "timestamp",
      style: {
        width: "1em",
      },
    }
  ];

  return (
    <>
    <div className="configuration-header">
        <div className="sub-header">Audit History</div>
        <div className="data-filters-container">
          <Dropdown className="time-selection-dropdown" value={selectTime} options={timeSelectionOptions} onChange={(e)=> setSelectTime(e.value)} optionLabel="name" placeholder="Select value" />
          <Calendar id="range" className="date-range-picker" value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showOtherMonths selectionMode="range" readOnlyInput />
        </div>
        <div className="button-wrapper">
            <DownloadIcon className="download-icon"/>
        </div>
    </div>
    <div className="configuration-table">
        <div>  
          <TableGrid
            tableData={tableData}
            columnHeaders={columnHeaders}
          />
        </div>
    </div>
    </>
  );
}

export default HistoryConfiguration;
