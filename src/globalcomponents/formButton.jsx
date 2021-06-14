import React from 'react'
import PropTypes from 'prop-types';

const FormButton = ({ text, onClick, className, disabled, type, classNameText, icon }) => {

    return (
        <button
            className={"rounded-md focus:outline-none select-none flex justify-between items-center " + (className) + (disabled ? " bg-indigo-100" : " bg-red-600  hover:bg-red-700")}
            onClick={onClick && onClick}
            type={type || "button"} disabled={disabled}>
            <p
                className={"text-center px-4 my-3 text-gray-100 flex-1 " + classNameText + " " + (disabled && "text-gray-500")} >
                {text}
            </p>
            {icon && <svg className="inline mr-5"
                width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.253179 0.238737C0.582269 -0.079579 1.11004 -0.079579 1.43913 0.238737L5.74682 4.4054C6.08439 4.73192 6.08439 5.26808 5.74682 5.5946L1.43913 9.76126C1.11004 10.0796 0.582268 10.0796 0.253179 9.76126C-0.0843929 9.43474 -0.0843929 8.89859 0.253179 8.57207L3.94615 5L0.253179 1.42793C-0.0843929 1.10141 -0.0843929 0.565257 0.253179 0.238737Z" fill="white" />
            </svg>}
        </button>
    )
}

FormButton.prototype = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    classNameText: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
    icon: PropTypes.bool
}

FormButton.defaultProps = {
    className: "",
    type: 'button',
    icon: true
}


export default FormButton
