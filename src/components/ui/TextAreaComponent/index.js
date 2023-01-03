import { Fragment,useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import "./style.scss";

const TextAreaComponent=(props)=>{
    const {rows_count,column_count,title, onValueChange}=props;
    const [value,setValue]=useState('')

    return <Fragment>
        <div className='text_area_wrapper'>
        <div className="title">{title}</div>
        <InputTextarea className='text_area' rows={rows_count} cols={column_count} value={value} onChange={(e) => {setValue(e.target.value);onValueChange(e.target.value)}} autoResize={false} data-testid="TextArea-test" placeholder={"Enter reason here"}/>
        </div>
        
    </Fragment>
}

export default TextAreaComponent