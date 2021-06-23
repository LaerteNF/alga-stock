import React from 'react'
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    appendIcon: JSX.Element
}

const Button: React.FC<ButtonProps> = ( props ) => {
    return <button 
        className="AppButton"
        onClick={props.onClick}
    >
        { props.appendIcon || 'Nameless button' }
    </button>
}

export default Button