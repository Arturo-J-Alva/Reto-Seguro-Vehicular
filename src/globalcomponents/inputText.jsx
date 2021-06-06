import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import useInput from '../utils/customHooks/useInput';

const InputText = ({ label, inputValue, classContainer, required = false, defaultValue }) => {
    const { setFocus, setValue, inputRef, value, focus } = useInput(inputValue, defaultValue)

    return (
        <div
            onClick={() => setFocus(true)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className={"input_height w-full flex flex-col justify-center border border-gray-400 px-4 rounded hover:border-indigo-400 text-gray-600 focus:border-indigo-600 my-2 " + classContainer}>
            {value ? <p className="text-sm">{label}</p> : focus && <p className="text-sm">{label}</p>}
            <input type="text"
                className={value ? " text-xl focus:outline-none text-gray-700 w-full" : focus ? " text-xl focus:outline-none text-gray-700 w-full" : " text-lg w-full"}
                placeholder={value ? "" : focus ? "" : label}
                ref={inputRef}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                required={required}
            />
        </div>
    )
}

InputText.prototype = {
    label: PropTypes.string.isRequired,
    inputValue: PropTypes.func,
    classContainer: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.func
}

InputText.defaultProps = {
    classContainer: ""
}

export default InputText
