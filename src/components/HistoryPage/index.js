import React, { useEffect, useState } from "react";
import "./style.scss";
import TableGrid from "../ui/TableGrid";
import OverLay from "../OverLay";
import ButtonComponent from "../ui/ButtonComponent";
import { ReactComponent as Rightarrow } from ".././../assets/images/right-arrow.svg";
// import { ReactComponent as CrossIcon } from ".././../assets/images/cross-icon.svg";
// import { ReactComponent as TimeoutIcon } from ".././../assets/images/timeout-icon.svg";
// import { ReactComponent as StartIcon } from ".././../assets/images/start-icon.svg";
// import { ReactComponent as StopIcon } from ".././../assets/images/stop-icon.svg";
// import { ReactComponent as ShutdownIcon } from ".././../assets/images/shutdown-icon.svg";
// import { ReactComponent as ManualIcon } from ".././../assets/images/manual-icon.svg";
// import { ReactComponent as ResetIcon } from ".././../assets/images/reset-icon.svg";
// import { Calendar } from "primereact/calendar";
// import { Dropdown } from "primereact/dropdown";
import { getHistoryList } from "../../actions";
// import { useDispatch } from "react-redux";
// import moment from "moment";
import { PAGE_SIZE } from "../../utils/constants";

//----------------------------------------------------
import tableJsonData from "../../utils/dummyData/commandAuditTrail.json";

export default function HistoryPage(props) {
  let today = new Date();
  const [tableData, setTableData] = useState([]);
  const [selectedDate, setSelectedDate] = useState([
    new Date(new Date().setDate(today.getDate() - 30)),
    today,
  ]);
  

  useEffect(() => {
    setTableData(tableJsonData.data);
  }, []);
  
  const [selectTime, setSelectTime] = useState({
    name: "Last 30 days",
    code: 30,
  });

  const getHistory = async (startDate, lastDate, pagesize, page) => {
    let data = await getHistoryList({ startDate, lastDate, pagesize, page });
    if (page !== 1) {
      tableData.splice(PAGE_SIZE * (page - 1), tableData.length, ...data);
      setTableData(tableData);
    } else {
      setTableData(data);
    }
  };

  useEffect(() => {
    let startDate = Math.floor(new Date(selectedDate[0]).getTime() / 1000);
    let lastDate = Math.floor(new Date(selectedDate[1]).getTime() / 1000);
    let pagesize = PAGE_SIZE;
    let page = 1;
    getHistory(startDate, lastDate, pagesize, page);
  }, []);
  
  const [showConfigurationOverlay, setConfigurationOverlay] = useState(false);
  const [isOverlayCase, setIsOverlay] = useState(false);

  const overLaySomething = () => {
    setConfigurationOverlay(true);
    setIsOverlay(true);
  };


  const actionBodyTemplate1 = () => {
    return (
      <div className="action-wrapper">
        <Rightarrow onClick={overLaySomething} />
      </div>
    );
  };

  // //Adding icons based on API Response for state column.
  // const actionBodyTemplate = (rowData) => {
  //   return (
  //     <div className="action-wrapper">
  //       {rowData.state === "Timeout" ? (
  //         <TimeoutIcon
  //           onClick={() => {
  //             console.log("clicked_timeout", rowData.id);
  //           }}
  //         />
  //       ) : (
  //         [
  //           rowData.state === "Rejected" ? (
  //             <CrossIcon
  //               onClick={() => {
  //                 console.log("clicked_Rejected", rowData.id);
  //               }}
  //             />
  //           ) : (
  //             [
  //               rowData.state === "Approved" ? (
  //                 <AcceptIcon
  //                   onClick={() => {
  //                     console.log("clicked_Approved", rowData.id);
  //                   }}
  //                 />
  //               ) : (
  //                 console.log("Last")
  //               ),
  //             ]
  //           ),
  //         ]
  //       )}
  //     </div>
  //   );
  // };

  // //Adding icons based on API Response for command column.
  // const commandBodyTemplate = (rowData) => {
  //   return (
  //     <div className="command-wrapper">
  //       {rowData.command === "START" ? (
  //         <StartIcon />
  //       ) : (
  //         [
  //           rowData.command === "STOP" ? (
  //             <StopIcon />
  //           ) : (
  //             [
  //               rowData.command === "RESET" ? (
  //                 <ResetIcon />
  //               ) : (
  //                 [
  //                   rowData.command === "MANUAL BATTERY TEST" ? (
  //                     <ManualIcon />
  //                   ) : (
  //                     [
  //                       rowData.command === "LOAD SHUTDOWN" ? (
  //                         <ShutdownIcon />
  //                       ) : (
  //                         console.log("Last")
  //                       ),
  //                     ]
  //                   ),
  //                 ]
  //               ),
  //             ]
  //           ),
  //         ]
  //       )}
  //       <span class="command-data"> {rowData.command} </span>
  //     </div>
  //   );
  // };

  let columnHeaders = [
    {
      headerName: "Case Type",
      colId: "ID",
      field: "id",
      sortable: true,
      style: {
        width: "2em",
        textAlign: "center !important"
      },
    },
    {
      headerName: "Included Site",
      colId: "asset",
      field: "asset",
      sortable: true,
      style: {
        width: "2em",
        textAlign: "center"
      },
    },
    {
      headerName: "Excluded Site",
      colId: "commandName",
      field: "command",
      sortable: true,
      style: {
        width: "2em",
        textAlign: "center"
      },
      // component: commandBodyTemplate,
    },
    {
      headerName: "Action",
      colId: "Action",
      field: "action",
      style: {
        width: "2em",
        textAlign: "center"
      },
      component: actionBodyTemplate1,
    },
  //   {
  //     headerName: "Sent By",
  //     colId: "sentBy",
  //     field: "user",
  //     sortable: true,
  //     style: {
  //       width: "2em",
  //     },
  //   },
  //   {
  //     headerName: `Received At (${new Date()
  //       .toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "long" })
  //       .substring(4)
  //       .match(/\b(\w)/g)
  //       .join("")})`,
  //     colId: "receivedAt",
  //     field: "receivedTimestamp",
  //     sortable: true,
  //     style: {
  //       width: "2em",
  //     },
  //     component: (rowData) => (
  //       <span>
  //         {moment.unix(rowData.receivedTimestamp).format("DD MMM YY  h:mm:ss")}
  //       </span>
  //     ),
  //   },
  //   {
  //     headerName: `Action Time (${new Date()
  //       .toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "long" })
  //       .substring(4)
  //       .match(/\b(\w)/g)
  //       .join("")})`,
  //     colId: "actionTime",
  //     field: "decisionTimestamp",
  //     sortable: true,
  //     style: {
  //       width: "2em",
  //     },
  //     component: (rowData) => (
  //       <span>
  //         {moment.unix(rowData.decisionTimestamp).format("DD MMM YY  h:mm:ss")}
  //       </span>
  //     ),
  //   },
  //   {
  //     headerName: "Approved/Rejected By",
  //     colId: "user",
  //     field: "decisionMaker",
  //     sortable: true,
  //     style: {
  //       width: "2em",
  //     },
  //   },
  //   {
  //     headerName: "Status",
  //     colId: "state",
  //     field: "state",
  //     style: {
  //       width: "2em",
  //     },
  //     component: actionBodyTemplate,
  //   },
  //   {
  //     headerName: "Notes",
  //     colId: "notes",
  //     field: "reason",
  //     style: {
  //       width: "3rem",
  //       whiteSpace: "nowrap",
  //       maxWidth: "14rem",
  //       overflow: "hidden",
  //       textOverflow: "ellipsis",
  //     },
  //   },
    ];

  // const timeSelectionOptions = [
  //   { name: "Today", code: 0 },
  //   { name: "Last 7 days", code: 7 },
  //   { name: "Last 30 days", code: 30 },
  //   { name: "custom", code: "custom" },
  // ];

  const onDateChange = (value) => {
    setSelectedDate(value);
    let startDate = Math.floor(new Date(value[0]).getTime() / 1000);
    let lastDate = Math.floor(new Date(value[1]).getTime() / 1000);
    let pagesize = PAGE_SIZE;
    let page = 1;
    if (value[0] && value[1]) {
      getHistory(startDate, lastDate, pagesize, page);
    }
  };

  const onDropDownChange = (value) => {
    setSelectTime(value);
    if (value.code !== "custom") {
      let start = new Date(new Date().setDate(today.getDate() - value.code));
      setSelectedDate([start, today]);
      let startDate = Math.floor(new Date(start).getTime() / 1000);
      let lastDate = Math.floor(new Date(today).getTime() / 1000);
      let pagesize = PAGE_SIZE;
      let page = 1;
      console.log(startDate, lastDate);
      getHistory(startDate, lastDate, pagesize, page);
    }
  };

  const loadDataLazy = (event) => {
    console.log(event);
    if (tableData.length && event.last === tableData.length) {
      let startDate = Math.floor(new Date(selectedDate[0]).getTime() / 1000);
      let lastDate = Math.floor(new Date(selectedDate[1]).getTime() / 1000);
      let pagesize = PAGE_SIZE;
      let page = Math.round(tableData.length / PAGE_SIZE) + 1;
      getHistory(startDate, lastDate, pagesize, page);
    }
  };

  return (
    <div className="request-queue-wrapper" data-testid="history-wrapper">
      <div className="title">CASE ADMIN</div>
      <div className="request-history-wrapper">
        <div className="data-filters-container">
          {/* <Dropdown
            className="time-selection-dropdown"
            value={selectTime}
            options={timeSelectionOptions}
            onChange={(e) => onDropDownChange(e.value)}
            optionLabel="name"
          /> */}

          {/* <Calendar
            id="range"
            dateFormat="dd M yy"
            className="date-range-picker"
            value={selectedDate}
            onChange={(e) => onDateChange(e.value)}
            showOtherMonths
            selectionMode="range"
            showIcon
            readOnlyInput
            disabled={selectTime.code !== "custom"}
          /> */}
        </div>
        <div style={{ textAign: "right", float: "right" }}>
          <ButtonComponent
            className="Add-btn"
            buttonText="+ ADD NEW SITE"
            // onClick={overLayCreateButton}
          ></ButtonComponent>
        </div>
        <div style={{ clear: "both" }}></div>
        <div>
          <div className="divider" />
        

        <OverLay
          showConfigurationOverlay={showConfigurationOverlay}
          setConfigurationOverlay={setConfigurationOverlay}
          isOverlayCase={isOverlayCase}
        />

          <TableGrid
            tableData={tableData}
            columnHeaders={columnHeaders}
            stripedRows
            scrollable
            scrollHeight="500px"
            virtualScrollerOptions={{
              lazy: true,
              onLazyLoad: loadDataLazy,
              itemSize: 46,
              delay: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}
