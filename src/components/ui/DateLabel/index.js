import moment from "moment";
import React from "react";
import { APP_DATE_FORMAT } from "../../../utils/constants";
import "./style.scss";

export default function DateLabel(props) {
  let { title, className, format= APP_DATE_FORMAT, date } = props;
  return (
    <span data-testid="DateLabel-test" className={className} title={`${title}`}>
      {date ? moment(date).format(format) : moment().format(format)}
    </span>
  );
}
