import React, { useState } from 'react'
import "./GenderButton.css"

export const GenderButton = ({ onClick, type, id, value, onChange, title, htmlFor, name }) => {

    return (
        <div className="form flex-center" onClick={onClick}>
            <div className="form-row flex-center" >
                <input type={type} name={name} id={id} value={value} onChange={onChange} className="form-input" />
                <label htmlFor={htmlFor} className="form-label">{title}</label>
            </div>
        </div>
    )
}
