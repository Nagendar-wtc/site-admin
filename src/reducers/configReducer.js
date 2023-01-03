import { UPDATE_KEY_VALUE } from "../utils/constants";

const initialState = {
  auditHistory: [],
  commandConfiguration: [],
  assetConfiguration: [],
  auditConfiguration: [],
};

function config(state = initialState, action) {
  switch (action.type) {
    case UPDATE_KEY_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case "AUDIT_HISTORY":
      return {
        ...state,
        auditHistory: action.payload,
      };

    case "REQUEST_QUEUE":
      return {
        ...state,
        commandsData: action.payload,
      };
    
    case "COMMAND_CONFIGURATION":
      return {
          ...state,
          commandConfiguration: action.payload
      };

    case "ASSET_CONFIGURATION":
      return {
          ...state,
          assetConfiguration: action.payload
      };

    case "AUDIT_CONFIGURATION":
      return {
          ...state,
          auditConfiguration: action.payload
      };

    default:
      return state;
  }
}

export default config;
