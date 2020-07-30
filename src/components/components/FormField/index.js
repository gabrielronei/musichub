import React from 'react';


function FormField({ value, onChange, type, name, label }) {

    return (
            <div>
                <label>
                {label}:
                <input name={name} type={type} value={value} onChange={ onChange }/>
                </label>
            </div>
    )
}


export default FormField;