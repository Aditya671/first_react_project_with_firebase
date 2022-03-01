import React from "react";

const InputField = (props) => {
    const {fieldType,name,value,label,onChange,...rest} = props;
    return ( 
        <React.Fragment>
            <div className="form-group">
            <label className="form-control" htmlFor={name}>{label}:</label>
            {fieldType === 'input' && (
                <React.Fragment>
                    <input className="form-control" 
                    required  name={name}
                    value={value} onChange={onChange}
                    {...rest}/>
                 </React.Fragment>
            )}
            {fieldType === 'textarea' && (
                <React.Fragment>
                    <textarea className="form-control" required 
                    name={name} onChange={onChange} value={value}
                    {...rest}></textarea>
                </React.Fragment>
            )}
            </div>
        </React.Fragment>
     );
}
 
export default InputField;