import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from "react-redux";

import { getCommandConfiguration, updateCommandConfiguration } from "../../../actions";
import TableGrid from "../../ui/TableGrid";
import ButtonComponent from "../../ui/ButtonComponent";
import "../style.scss";
import { ReactComponent as EditIcon } from "../.././../assets/images/Edit-icon.svg";
import { ReactComponent as DownloadIcon } from "../.././../assets/images/Download-icon.svg";
import { ReactComponent as StartIcon } from "../.././../assets/images/start-icon.svg";
import { ReactComponent as StopIcon } from "../.././../assets/images/stop-icon.svg";
import { ReactComponent as ShutdownIcon } from "../.././../assets/images/shutdown-icon.svg";
import { ReactComponent as ManualIcon } from "../.././../assets/images/manual-icon.svg";
import { ReactComponent as ResetIcon } from "../.././../assets/images/reset-icon.svg";
import ExportButton from "../ExportButton";

const CommandConfiguration = (props) => {
  let dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);
  const [editClicked, setEditClicked] = useState(false);
  const [tableStateDropdownValue, setTableStateValue] = useState(null);
  const [editTableData, setEditTableData] = useState([]);

  const commandConfiguration = useSelector((state) => {
    let { commandConfiguration } = state.configReducer;
    return commandConfiguration;
  });
  // const commandConfiguration = [
  //   {  command: "START",
  //   action: "Disabled"
  //   },{  command: "STOP",
  //   action: "Pre-Approved"
  //   },{  command: "RESET",
  //   action: "Disabled"
  //   },{  command: "LOAD SHUTDOWN",
  //   action: "Disabled"
  //   },{  command: "MANUAL BATTERY TEST",
  //   action: "Pre-Approved"
  //   }
  //   ]

  useEffect(() => {
    dispatch(getCommandConfiguration());
  }, [dispatch]);

  useEffect(() => {
    setTableData(commandConfiguration);
  }, [commandConfiguration]);

  const dropdownChange = (e, rowData) => {
    const list = [...tableData];
    const index = list.findIndex(item => item.command === rowData.command)
    if(index > -1) {
      list[index].action = e.value;
    }
    setEditTableData(list);
};

const handleSubmit = (tableData) => {
  console.log(tableData);
  updateCommandConfiguration(tableData);
  setEditClicked(false);
};

  const actionBodyTemplate = (rowData) => {
    const statuses = [
      { label: 'Manual', value: 'Manual' },
      { label: 'Pre-Approved', value: 'Pre-Approved' },
      { label: 'Pre-Rejected', value: 'Pre-Rejected' },
      { label: 'Disabled', value: 'Disabled' }
    ];
    return (
      <div className="action-wrapper">
        {!editClicked ? 
          <span>{rowData.action}</span> 
          : 
          <div className="table-dropdown">
          <Dropdown 
            options={statuses}
            onChange={(e) => dropdownChange(e, rowData)}
            placeholder="Select an option"
            value={rowData.action}
            showOnFocus={true}
          />
          </div>
        }
      </div>
    );
  };

  //Adding icons based on API Response for command column.
  const commandBodyTemplate = (rowData) => {
    return ( <
        div className = "command-wrapper" >
        {
            rowData.command === "START" ? ( <
                StartIcon / >
            ) : [rowData.command === "STOP" ? ( <
                StopIcon / >
            ) : [rowData.command === "RESET" ? ( <
                ResetIcon / >
            ) : [rowData.command === "MANUAL BATTERY TEST" ? ( <
                ManualIcon / >
            ) : [rowData.command === "LOAD SHUTDOWN" ? ( <
                ShutdownIcon / >
            ) : console.log("Last")]]]]
        }
        <span class="command-data"> {rowData.command} </span> 
        </div>
    );
};

  let columnHeaders = [
    {
      headerName: "Command",
      colId: "commandName",
      field: "command",
      sortable: true,
      style: {
        width: "20em",
      },
      component: commandBodyTemplate,
    },
    {
      headerName: "Last Modified",
      colId: "receivedAt",
      field: "receivedAt",
      sortable: true,
      style: {
        width: "15em",
      },
    },
    {
      headerName: "Current State",
      colId: "action",
      field: "action",
      component: actionBodyTemplate,
    }
  ];

  const tableFooter = (
    <>
      {editClicked ?
        <div className="table-footer">
          <ButtonComponent
            className="cancel-btn"
            buttonText={"Cancel"}
            onClick={() => setEditClicked(false)}
          />
          <ButtonComponent
            className="save-btn"
            buttonText={"Save"}
            onClick={() => handleSubmit(editTableData)}
          />
        </div> : null
      }

    </>
  );

  return (
    <>
    <div className="configuration-header">
        <div className="sub-header">Command Configuration</div>
        <div className="button-wrapper">
          {!editClicked ?
          <>
          <EditIcon className="edit-icon" onClick={() => setEditClicked(true)}/>
            <span
              className="edit-text"
              onClick={() => setEditClicked(true)}
              disabled={tableData.length > 0 ? false : true}
            >
              Edit
            </span>
          </>: null}
          <ExportButton />
        </div>
    </div>
    <div className="configuration-table">
        <div>  
          <TableGrid
            tableData={tableData}
            columnHeaders={columnHeaders}
            footer= {tableFooter}
          />
        </div>
    </div>
    </>
  );
}

export default CommandConfiguration;
