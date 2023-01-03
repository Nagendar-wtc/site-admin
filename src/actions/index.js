import {
  API_BASE_URL,
  GET_COMMAND,
  GET_COMMAND_HISTORY,
  UPDATE_COMMANDS,
  GET_COMMANDS_STATE,
  GET_ASSETS,
  GET_CONFIG_AUDITTRAIL
} from "../utils/API";
import request from "../utils/request";

export const getCommandsData = () => async (dispatch) => {
  await request(`${API_BASE_URL}${GET_COMMAND}`, {
   headers: {
     "Content-Type": "application/json",
   },
 })
 .then((res) => {
   dispatch({
       type: "REQUEST_QUEUE",
       payload: res,
   });
 })
 .catch((e) => {
   console.log("error");
 });
};

export async function getHistoryList({startDate,lastDate,pagesize,page}) {
    let data = await request(`${API_BASE_URL}${GET_COMMAND_HISTORY}?tss=${startDate}&tse=${lastDate}&pagesize=${pagesize}&page=${page}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
}

export const updateCommands = async (action,rowsSelected,reason) => {
  let updatedCommands = [];

  rowsSelected.forEach((item) => {
      updatedCommands.push({
          id: item.id,
          state: action==="Accept"?"Approved":"Rejected",
          reason: reason
      });
  });


  await request(`${API_BASE_URL}${UPDATE_COMMANDS}`, {
    method: 'PUT',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(updatedCommands)
 })
 .then((res) => {
  getCommandsData();
 })
 .catch((e) => {
   console.log("error");
 });
};

export const getCommandConfiguration = () => async (dispatch) => {
  await request(`${API_BASE_URL}${GET_COMMANDS_STATE}`, {
   headers: {
     "Content-Type": "application/json",
   },
 })
 .then((res) => {
   dispatch({
       type: "COMMAND_CONFIGURATION",
       payload: res,
   });
 })
 .catch((e) => {
   console.log("error");
 });
};

export const updateCommandConfiguration = (data) => {
  console.log(data, "apiCommmanddata");
   request(`${API_BASE_URL}${GET_COMMANDS_STATE}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    getCommandConfiguration();
  })
  .catch((e) => {
   console.log("error");
 });
};

export const getAssetConfiguration = () => async (dispatch) => {
  await request(`${API_BASE_URL}${GET_ASSETS}`, {
   headers: {
     "Content-Type": "application/json",
   },
 })
 .then((res) => {
   dispatch({
       type: "ASSET_CONFIGURATION",
       payload: res,
   });
 })
 .catch((e) => {
   console.log("error");
 });
};

export const updateAssetConfiguration = (data) => {
  console.log(data, "apiAssetdata");
   request(`${API_BASE_URL}${GET_ASSETS}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    getAssetConfiguration();
  })
  .catch((e) => {
   console.log("error");
 });
};

export const getAuditConfiguration = () => async (dispatch) => {
  await request(`${API_BASE_URL}${GET_CONFIG_AUDITTRAIL}`, {
   headers: {
     "Content-Type": "application/json",
   },
 })
 .then((res) => {
   dispatch({
       type: "AUDIT_CONFIGURATION",
       payload: res,
   });
 })
 .catch((e) => {
   console.log("error");
 });
};
