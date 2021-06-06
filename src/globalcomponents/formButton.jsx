import React from 'react'
import PropTypes from 'prop-types';

const FormButton = ({ text, onClick, className, disabled, type }) => {

    return (
        <button
            className={"rounded-md focus:outline-none " + (className) + (disabled ? " bg-indigo-100" : " bg-red-600  hover:bg-red-700")}
            onClick={onClick && onClick}
            type={type || "button"} disabled={disabled}>
            <p
                className={"text-center px-4 my-3 text-gray-100 " + (disabled && "text-gray-500")} >
                {text}
            </p>
        </button>
    )
}

FormButton.prototype = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit'])
}

FormButton.defaultProps = {
    className: "",
    type: 'button'
}


export default FormButton
