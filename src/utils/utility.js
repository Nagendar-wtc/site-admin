import React from "react";
import { connect } from "react-redux";

class SubscriptionUtility extends React.Component {
  static statProps = {};

  constructor(props) {
    super(props);
  }

  static utility = SubscriptionUtility.utility == null ? new SubscriptionUtility() : SubscriptionUtility.utility;

  UNSAFE_componentWillReceiveProps(nextProps) {
    SubscriptionUtility.statProps = nextProps;
  }

  getHMILanguageLabel(str = "", description = false) {
    if (str !== undefined && (typeof str === "string" || str instanceof String)) {
      let { langaugeLabelsForNames = {} } = SubscriptionUtility.statProps;
      let obj = langaugeLabelsForNames[str.toUpperCase()] || {};
      let desc = description ? obj.description : "";
      return desc || obj.name || str;
    } else {
      return str;
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = ({
  staticReducer: {
    language_code = "ENG",
  }
}) => ({
  language_code
});

export default connect(mapStateToProps)(SubscriptionUtility);

export const getDateString = (_timestamp) => {
  return _timestamp ? (new Date(parseInt(_timestamp))).toLocaleString() : "";
};