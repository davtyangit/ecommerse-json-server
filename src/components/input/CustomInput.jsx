import React from 'react'
import "./CustomInput.css"

export const CustomInput = ({ type, value, onChange, placeholder }) => {
    return (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="custom_input" />
    )
}
