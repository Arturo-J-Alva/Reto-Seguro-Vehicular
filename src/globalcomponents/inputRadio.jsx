import React from 'react'
import PropTypes from 'prop-types';

const InputRadio = ({ text, name, defaultChecked = false, onChange, value, className }) => {
    return (
        <div className={"flex flex-row items-center my-2 " + className}>
            <input type="radio" id={text} name={name} color="red" value={value}
                onChange={(ev) => onChange && onChange(ev.target.value)}
                defaultChecked={defaultChecked}
            //defaultValue={}
            />
            <label htmlFor={text} className="ml-2">{text}</label>
        </div>
    )
}

InputRadio.prototype = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string
}

InputRadio.defaultProps = {
    className: ""
}

export default InputRadio
