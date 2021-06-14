import React from 'react'
import PropTypes from 'prop-types';
import FormButton from '../../globalcomponents/formButton'

const Bloque3 = ({ className }) => {

    return (
        <div className={"flex justify-between " + className}>
            <div>
                <p className="right3-text7">$35.00</p>
                <p className="right3-text2">MENSUAL</p>
            </div>
            <FormButton text="LO QUIERO" className="w-40" icon={false} />
        </div>
    )
}

Bloque3.prototype = {
    className: PropTypes.string,
}

Bloque3.defaultProps = {
    className: ""
}

export default Bloque3
