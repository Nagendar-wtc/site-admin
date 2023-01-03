import React, { useEffect, useState } from "react";
import { InputSwitch } from 'primereact/inputswitch';
import { useDispatch, useSelector } from "react-redux";

import TableGrid from "../../ui/TableGrid";
import "../style.scss";
import { ReactComponent as DownloadIcon } from "../.././../assets/images/Download-icon.svg";
import { ReactComponent as WingsIcon } from ".././../../assets/images/turbine-wings.svg";
import { getAssetConfiguration, updateAssetConfiguration } from "../../../actions";
import ButtonComponent from "../../ui/ButtonComponent";
import Modal from "../../ui/Modal";

const AssetConfiguration = (props) => {
  let dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);
  const [showRowBanner, setShowRowBanner] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showCommandsModal, setShowCommandsModal] = useState({
    visable: false,
    action: "",
    rowData: [],
  });

  const assetConfiguration = useSelector((state) => {
    let { assetConfiguration } = state.configReducer;
    return assetConfiguration;
  });
//   const assetConfiguration = [
//     {  
//       assetname: "WTG001",
//       enabled: true
//     },
//     {  
//       assetname: "WTG002",
//       enabled: false
//     },
//     {  
//       assetname: "WTG123",
//       enabled: false
//     },
//     {  
//       assetname: "WTG775",
//       enabled: true
//     },
// ]

  useEffect(() => {
    dispatch(getAssetConfiguration());
  }, [dispatch]);

  useEffect(() => {
    setTableData(assetConfiguration);
  }, [assetConfiguration]);

  const handleSelectedRows = (rows) => {
    console.log(rows);
    setShowRowBanner(!!rows?.length);
    setSelectedAssets(rows);
  };

  const onClickBannerCancel = () => {
    setSelectedAssets([]);
    setShowRowBanner(false);
  };

  const rowBannerAction = (action) => {
    console.log(selectedAssets,"Clicked");
    setShowCommandsModal({
      visable: true,
      action: action,
      rowData: selectedAssets,
    });
  };

  const rowBannerActionForSingleRow = (enabled, rowData) => {
    // const list = [...tableData];
    // const index = list.findIndex(item => item.assetname === rowData.assetname)
    // if(index > -1) {
    //   list[index].enabled = enabled;
    // }
    const action = enabled ? "Block" : "Unblock";
    console.log(enabled, rowData, action);
    setShowCommandsModal({
      visable: true,
      action: action,
      rowData: [rowData],
    });
    setSelectedAssets([rowData]);
  }

  
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="toggle-button">
        <InputSwitch
          checked={rowData.enabled}
          onChange={(e) => rowBannerActionForSingleRow(e.value, rowData)}
        />
      </div>
    );
  };

  const actionBodyTemplateForModal = (rowData) => {
    return (
      <span>{rowData.enabled === true ? "Block" : "Unblock"}</span>
    );
  };

  const RowBanner = () => {
    return (
      <div className="RowSelectionBanner" id="RowSelectionBanner">
        <div className="row-select">
          <div className="selected-value">{selectedAssets.length} SELECTED</div>
          <span className="vertical-divider"></span>
          <ButtonComponent buttonText={"Block"} onClick={() => rowBannerAction("Block")} />
          <ButtonComponent buttonText={"Unblock"} onClick={() => rowBannerAction("Unblock")} />
        </div>
        <span className="closeSelectionBanner" onClick={() => onClickBannerCancel()}>
          <i className="pi pi-times"></i>
        </span>
      </div>
    );
  };

  const handleBlockOrUnblockCommad = (action, data) => {
    const list = [...tableData];
    console.log(action, data);
    data.map(item => {
      const index = list.findIndex(e => e.assetname === item.assetname);
      if(index > -1) {
        if(action === "Block") {
          list[index].enabled = true;
        }
        else {
          list[index].enabled = false;
        }
      }
    })
    setTableData(list);
    updateAssetConfiguration(list);
    setShowCommandsModal({
      visable: false,
      action: "",
      rowData: [],
    });
    setShowRowBanner(false);
  }

  let columnHeaders = [
    {
      headerName: "",
      colId: "Selection",
      field: "selectionBox",
      selectionMode: "multiple",
      style: {
        width: "0.5em",
        textAlign: "center"
      },
      selectionAriaLabel:"assetname"
    },
    {
      headerName: "Asset",
      colId: "assetname",
      field: "assetname",
      sortable: true,
      style: {
        width: "2em",
      },
    },
    {
      headerName: "Last Modified",
      colId: "receivedAt",
      field: "receivedAt",
      sortable: true,
      style: {
        width: "2em",
      },
    },
    {
      headerName: "Status",
      colId: "enabled",
      field: "enabled",
      style: {
        width: "2em",
      },
      component: actionBodyTemplate,
    }
  ];

  let modalColumnHeaders = [
    {
      headerName: "Asset",
      colId: "assetname",
      field: "assetname",
      style: {
        width: "10%",
      },
    },
    {
      headerName: "Last Modified",
      colId: "receivedAt",
      field: "receivedAt",
      style: {
        width: "10%",
      },
    },
    {
      headerName: "Status",
      colId: "enabled",
      field: "enabled",
      style: {
        width: "10%"
      },
      component: actionBodyTemplateForModal
    },
  ];
console.log(showRowBanner);
  return (
    <>
      <div className="configuration-header">
        <div className="sub-header">Asset Configuration</div>
        <div className="button-wrapper">
            <DownloadIcon className="download-icon"/>
        </div>
      </div>
      <div className="RowBannerWrapper">
        {showRowBanner && (
          <RowBanner />
        )}
      </div>
      <div className="configuration-table">
        <div>  
          <TableGrid
            tableData={tableData}
            columnHeaders={columnHeaders}
            stripedRows
            selection={true}
            selectedRows={handleSelectedRows}
            autoLayout
            dataKey="assetname"
          />
        </div>
    </div>
    <Modal
        className="command-request-modal"
        header="CHANGE ASSET STATUS"
        visible={showCommandsModal.visable}
        closable={false}
        onHide={() =>
          setShowCommandsModal({ visable: false, action: "", rowData: [] })
        }
        style={{width: "30vw"}}
        footer={
          <div className="footer-wrapper">
            <ButtonComponent
              className="cancel-btn"
              buttonText="Cancel"
              onClick={() =>
                setShowCommandsModal({
                  visable: false,
                  action: "",
                  rowData: [],
                })
              }
            />
            <ButtonComponent
              className="action-btn"
              buttonText={"Confirm"}
              onClick={() => 
                handleBlockOrUnblockCommad(
                  showCommandsModal.action,
                  showCommandsModal.rowData,
                )}
            />
          </div>
        }
      >
        {
          <>
            <div className="attempting-lable">
              You are changing asset status to:{" "}
              <span className="attempting-value">
                {showCommandsModal.action}
              </span>
            </div>
            <div className="assets-count">
              {" "}
              <WingsIcon />
              {showCommandsModal.rowData.length} Assets
            </div>
            <div className="divider" />
            <TableGrid
              tableData={showCommandsModal.rowData}
              columnHeaders={modalColumnHeaders}
              selection={false}
            />
          </>
        }
      </Modal>
    </>
  );
}

export default AssetConfiguration;
