import {
  UPDATE_STATIC_KEY_VALUE
} from "../utils/constants";

const staticData = {
  languages: {},
};

const staticReducer = (state = staticData, action) => {
  switch (action.type) {

    case UPDATE_STATIC_KEY_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    default:
      return state;
  }
};

export default staticReducer;
