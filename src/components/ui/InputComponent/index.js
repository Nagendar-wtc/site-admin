import React from 'react';
import { InputText } from "primereact/inputtext";
import PropsTypes from "prop-types";

const InputData = (props) => {
  let {id,label, value, onchange,options,name,disabled}= props
   
  return (
      <>
          <div style={{ color: 'white', marginBottom:'15px', fontSize: '12px' }}>{label}</div>
          <InputText
            name={name}
            options={options}
            autoComplete='off'
            value={value}
            onChange={()=>onchange()}
            disabled={disabled}
            id={id}
            {...props}
          />
      </>   
  )
}
InputData.propsTypes={
  id: PropsTypes.string.isRequired,
  label:PropsTypes.string,
  value:PropsTypes.string,
  name: PropsTypes.string,
  options: PropsTypes.array,
  onChange: PropsTypes.func.isRequired,
  disabled:PropsTypes.bool
}

export default InputData