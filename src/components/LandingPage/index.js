import React, { useEffect, useRef, useState } from "react";
import TableGrid from "../ui/TableGrid";

import RowSelectionBanner from "../RowSelectionBanner";
import TextAreaComponent from "../ui/TextAreaComponent";
import "./style.scss";
import { Column } from "primereact/column";
import {
  ACCEPTING_REQUEST_TEXTAREA_TITLE,
  REJECTING_REQUEST_TEXTAREA_TITLE,
} from "../../utils/constants";
import { ReactComponent as Rightarrow } from ".././../assets/images/right-arrow.svg";

import ProgressBarComponent from "../ui/ProgressBar";
import ButtonComponent from "../ui/ButtonComponent";
import Modal from "../ui/Modal";
import { CustomFilter } from "./customFilter";
import { getCommandsData, updateCommands } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { ShowConfirm } from "../../utils/toast.js";
import moment from "moment";

import { Badge } from "primereact/badge";

import { DataTable } from "primereact/datatable";

import OverLay from "../OverLay";

import { Menu } from "primereact/menu";


export default function LandingPage(props) {
  let dispatch = useDispatch();
  const [showConfigurationOverlay, setConfigurationOverlay] = useState(false);

  const [isOverlay, setIsOverlay] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [showRowBanner, setShowRowBanner] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedData ,setSelectedData] = useState([]);
  const [showCommandsModal, setShowCommandsModal] = useState({
    visable: false,
    action: "",
    rowData: [],
  });
  const [reason, setReason] = useState("");

  const commandsData = useSelector((state) => {
    let { commandsData } = state.configReducer;
    return commandsData;
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTableData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const actionBodyTemplate1 = (data) => {
    // console.log(data,'68')
    return (
      <div className="action-wrapper">
        <Rightarrow onClick={(e)=>overLaySomething(e,data)} />
      </div>
    );
  };
  const menu = useRef(null);
  const toast = useRef(null);
  const enableDisableTemplate = (rowData) => {
    let data = [];

    // rowData.timer
    //   .split(",")
    //   .splice(1)
    //   .forEach((item) => {
    //     data.push({ label: item });
    //   });
    // console.log(rowData.timer.split(",").length, "11111111111", rowData.timer);
    return (
      <>
        {/* <div className="Pop_menu-wrapper">
          <Menu model={products} popup ref={menu} id="popup_menu" />
          {rowData.timer.split("").splice(0, 10)}
          {rowData.timer.split(",").length > 1 ? (
            <Badge
              value={`+ ${rowData.timer.split(",").length - 1}`}
              severity="success"
              onMouseEnter={(event) => {
                setProducts(data);
                menu.current.toggle(event);
              }}
              // onMouseLeave={(event) => menu.current.toggle(!event) }
            ></Badge>
          ) : (
            " "
          )}
        </div> */}
      </>
    );
  };

  let headerGroup = (
    <DataTable
      resizableColumns="true"
      columnResizeMode="expand"
      onColumnResize
      showGridlines
      responsiveLayout="scroll"
    >
      <Column header="Site Details" colSpan={5} />
      <Column header="Application Configuration" colSpan={2} />
      <Column header="Source Protocol Configuration" colSpan={5} />
      <Column header="Audit" colSpan={2} />
      <Column header="Details" colSpan={1} />
    </DataTable>
  );

  let columnHeaders = [
    {
      headerName: "Site ID",
      colId: "cva",
      field: "id",
      sortable: true,
      style: {
        textAlign: "center",
        width: "20px",
      },
    },
    {
      headerName: "Site Name",
      colId: "cva",
      field: "sitename",
      sortable: true,
      filter: true,
      style: {
        textAlign: "center",
      },
      filterTemplate: (options) => (
        <CustomFilter
          options={options}
          optionsList={()=>[
            ...new Set(tableData?.map((item) => item[options.field]))].map((a) => {
            return { name: a, value: a };
          })}
        />
      ),
    },
    {
      headerName: "Src ID",
      colId: "Src Id",
      field: "src_Id",
      sortable: true,
      filter: true,
      style: {
        textAlign: "center",
      },
      filterTemplate: (options) => (
        <CustomFilter
          options={options}
          optionsList={() =>
            [...new Set(tableData?.map((item) => item[options.field]))].map((a) => {
                return { name: a, value: a };
              }
            )
          }
        />
      ),
    },
    {
      headerName: "Source Id",
      colId: "commandName",
      field: "source_Id",
      sortable: true,
      filter: true,
      style: {
        textAlign: "center",
      },

      filterTemplate: (options) => (
        <CustomFilter
          options={options}
          optionsList={() =>
            [...new Set(tableData?.map((item) => item[options.field]))].map(
              (a) => {
                return { name: a, value: a };
              }
            )
          }
        />
      ),
    },
    {
      headerName: "Web HMI URL",
      colId: "sentBy",
      field: "sentBy",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Enable/ Disable Automation",
      colId: "receivedAt",
      field: "receivedAt",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Exclude Assets",
      colId: "receivedAt",
      field: "timer",
      // filter:true,
      style: {
        textAlign: "center",
      },

      component: enableDisableTemplate,
      filterTemplate: (options) => (
        <CustomFilter
          options={options}
          optionsList={() =>
            [
              ...new Set(
                tableData.map((item) => item[options.field])
              ),
            ].map((a) => {
              return { name: a, value: a };
            })
          }
        />
      ),
    },
    {
      headerName: "Cmd Adapter Id",
      colId: "timer",
      field: "action",
      style: {
        textAlign: "center",
        width: "2rem",
        padding: "0px 30px",
      },
    },

    {
      headerName: "Protocol",
      colId: "action",
      field: "protocol",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Webservice Type",
      colId: "action",
      field: "webService",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Credentials",
      colId: "action",
      field: "credential",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Enable/Disable",
      colId: "action",
      field: "Enable",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "LastUpdatedBy/Created by",
      colId: "action",
      field: "Lastupdateby",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "LastUpdatedDate/CreatedDate",
      colId: "action",
      field: "lastupdatedate",
      style: {
        textAlign: "center",
      },
    },
    {
      headerName: "Action",
      colId: "Action",
      field: "action",
      style: {
        width: "2em",
      },
      component:(data)=>actionBodyTemplate1(data),
    },
  ];

  const overLaySomething = (e,data) => {
    console.log(data,"313saqib")
    setSelectedData(data);
    setConfigurationOverlay(true);
    setIsOverlay(true);
    
  };

  const overLayCreateButton = () => {
    setConfigurationOverlay(true);

    setIsOverlay(false);
  };

  const rowBannerAction = (action) => {
    setShowCommandsModal({
      visable: true,
      action: action,
      rowData: selectedAssets,
    });
  };
  return (
    <div className="request-queue-wrapper" data-testid="request-queue-wrapper">
      <div className="title">SITE ADMIN</div>

      <div>
        <div>
          {showRowBanner && (
            <RowSelectionBanner
              selectionCount={selectedAssets.length}
              onHide={() => setShowRowBanner(false)}
              handleClick={rowBannerAction}
            />
          )}
        </div>
        <div style={{ textAign: "right", float: "right" }}>
          <p
            className="Add-btn"
            onClick={overLayCreateButton}
          >+ ADD NEW SITE</p>
        </div>
        <div style={{ clear: "both" }}></div>

        <OverLay
          showConfigurationOverlay={showConfigurationOverlay}
          setConfigurationOverlay={setConfigurationOverlay}
          isOverlay={isOverlay}
          selectedData={selectedData}
        />

        <div className="divider" />
        <TableGrid
          tableData={tableData}
          tableTopHeader={headerGroup}
          columnHeaders={columnHeaders}
          stripedRows
          selection
          autoLayout
          dataKey="id"
        />
      </div>
      <Modal
        className="command-request-modal"
        header="COMMAND REQUEST"
        visible={showCommandsModal.visable}
        closable={false}
        onHide={() => {
          setShowCommandsModal({ visable: false, action: "", rowData: [] });
          setReason("");
        }}
        footer={
          <div className="footer-wrapper">
            <ButtonComponent
              className="cancel-btn"
              buttonText="Cancel"
              onClick={() => {
                setShowCommandsModal({
                  visable: false,
                  action: "",
                  rowData: [],
                });
                setReason("");
              }}
            />
            <ButtonComponent
              className="action-btn"
              buttonText={showCommandsModal.action}
              onClick={() => {
                updateCommands(
                  showCommandsModal.action,
                  showCommandsModal.rowData,
                  reason
                );
                setShowCommandsModal({
                  visable: false,
                  action: "",
                  rowData: [],
                });
                toast(ShowConfirm(), {
                  position: toast.POSITION.BOTTOM_CENTER,
                  className: "foo-bar",
                  autoClose: false,
                  hideProgressBar: false,
                });
              }}
            />
          </div>
        }
      >
        {
          <>
            <div className="attempting-lable">
              You are attempting to:{" "}
              <span className="attempting-value">
                {showCommandsModal.action}
              </span>
            </div>
            <div className="divider" />
            <TextAreaComponent
              row_count={5}
              column_count={80}
              title={
                showCommandsModal.action === "Accept"
                  ? ACCEPTING_REQUEST_TEXTAREA_TITLE
                  : REJECTING_REQUEST_TEXTAREA_TITLE
              }
              onValueChange={(value) => setReason(value)}
            />
          </>
        }
      </Modal>
    </div>
  );
}
