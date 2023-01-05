import React from 'react';
import { Dropdown } from "primereact/dropdown";
import PropTypes from "prop-types";

const CustomDropdown = (props) => {
    const { label, options, value, optionLabel, className, placeholder, appendTo, onChange, showOnFocus } = props;
  return (
    <>
        <div style={{color: 'white', marginBottom: '7px', fontSize: '12px'}}>{label}</div>
        <Dropdown
            options={options}
            value={value}
            optionLabel={optionLabel}
            className={className}
            placeholder={placeholder}
            appendTo={appendTo}
            onChange={onChange}
            showOnFocus={showOnFocus}
        ></Dropdown>
    </>
  )
}

CustomDropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.object,
  value: PropTypes.string,
  optionLabel: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  appendTo: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomDropdown

