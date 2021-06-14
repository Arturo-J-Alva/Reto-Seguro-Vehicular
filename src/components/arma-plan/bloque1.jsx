import React from 'react'
import PropTypes from 'prop-types';

const Bloque1 = ({ className }) => {
    return (
        <div className={className}>
            <div className={"formDataCar "} >
                <h1 className="right2-h1">Mira las coberturas</h1>
                <p className="right2-text1 mt-2">Conoce las coberturas para tu plan</p>

                <div className="flex relative mt-10 card1" >
                    <div className="w-48">
                        <p className="card1-text1">Placa: C2U-114</p>
                        <p className="card1-text2">Wolkswagen 2019 Golf</p>
                        <a href="#" className="card1-text3">editar</a>
                    </div>
                    <img src="./images/man1.png" alt="hombre-1" className="image-man1" />
                </div>

            </div>
        </div>
    )
}

Bloque1.prototype = {
    className: PropTypes.string,
}

Bloque1.defaultProps = {
    className: ""
}

export default Bloque1
