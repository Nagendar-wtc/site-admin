import React from 'react'
import { MultiSelect } from 'primereact/multiselect'
import PropTypes from 'prop-types';

const MultiSelectDropdown = (props) => {
    let {options,onChange,value,appendTo,Exlude,label} = props
    
  return (
    <> 
    <div style={{ marginBottom:"15px",fontSize:"12px", color: "white" }}>{label}</div>
    <MultiSelect
     className={Exlude}
      options={options}
      value={value}
      appendTo={appendTo}
      onChange={onChange}
      filter
      maxSelectedLabels={3}
      {...props}
    />
     
   </>
  )
}
MultiSelectDropdown.propTypes={
 label:PropTypes.string,
 options:PropTypes.array,
 onChange:PropTypes.func,
 value:PropTypes.array,
}


export default MultiSelectDropdown