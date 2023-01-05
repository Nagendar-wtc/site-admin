import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import PropTypes from 'prop-types';

const Inputswitch = (props) => {
  const { checked, onChange , label } = props;

  return (
    <>
    <div style={{color:"white" , marginBottom:"15px",fontSize:"12px"}}>{label}</div>
      <InputSwitch 
      checked={checked} 
      onChange={() => onChange()} {...props} />
</>
  );
};
  Inputswitch.propTypes={
  label:PropTypes.string,
  checked:PropTypes.bool,
  onChange:PropTypes.func,
 
 }

export default Inputswitch;
