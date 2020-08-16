import React from 'react'
import { Field, ErrorMessage } from 'formik';
const SelectField = (props) => {
    
    return (
        <div className="form-group">
        <label htmlFor={props.htmlfor}>{props.label}</label>
        <Field as="select" name={props.name} className={props.clsName}>
        <option>-------</option>
        {props.selected.map((value) => (
                 <option key={value.id} value={value.id}>{value.libbele}</option>
              ))}
    
    </Field>
        <ErrorMessage name={props.name} component="div" className="invalid-feedback" />
       
        {props.button && <button onClick={props.onClick} className="btn btn-primary add-btn" >{props.button}</button>}
    </div>
    )
}

export default SelectField
