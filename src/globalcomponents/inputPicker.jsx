import React from 'react'
import PropTypes from 'prop-types';
import useInput from '../utils/customHooks/useInput'

const InputPicker = ({ inputValue, classContainer, list, label }) => {
    const { setValue, inputRef } = useInput(inputValue)

    return (
        <div
            className={"input_height w-full flex flex-col justify-center border border-gray-400 px-4 rounded hover:border-indigo-400 text-gray-600 focus:border-indigo-600 my-2 " + classContainer}>
            {!!label && <p className="text-sm" style={{color:"#A3ABCC"}}>{label}</p>}
            <select
                className="text-normal focus:outline-none text-gray-700 w-full"
                ref={inputRef}
                onChange={(ev) => setValue(ev.target.value)}
            >
                {
                    list.map((e, i) => <option key={i} value={e?.value} >{e?.label}</option>)
                }

            </select>
        </div>
    )
}

InputPicker.prototype = {
    inputValue: PropTypes.func,
    classContainer: PropTypes.string,
    list: PropTypes.PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
    label: PropTypes.string,
}

InputPicker.defaultProps = {
    list: [],
    classContainer: ""
}

export default InputPicker
