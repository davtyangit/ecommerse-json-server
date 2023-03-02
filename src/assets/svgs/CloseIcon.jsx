import React from 'react'

export const CloseIcon = ({ color }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.55">
                <path d="M17 1L1 17" stroke={color} strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1L17 17" stroke={color} strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
}
