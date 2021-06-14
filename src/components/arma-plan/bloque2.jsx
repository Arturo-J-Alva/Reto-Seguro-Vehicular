import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Coverage from './coverage'

const Bloque2 = ({ className }) => {

    const [selectOpt, setSelectOpt] = useState(1)

    return (
        <div className={" " + className} >

            <h2 className="right3-text1 mb-8">Agrega o quita coberturas</h2>

            <div className="flex right3-block2">
                <div className={"w-32 select-none cursor-pointer " + (selectOpt === 1 ? "right3-activeOpt" : "")}
                    onClick={() => setSelectOpt(1)}>
                    <p className="w-32 h-8 right3-text2 text-center mb-6">Protege a<br />tu auto</p>
                </div>
                <div className={"w-32 select-none cursor-pointer " + (selectOpt === 2 ? "right3-activeOpt" : "")}
                    onClick={() => setSelectOpt(2)}>
                    <p className="w-32 h-8 right3-text2 text-center mb-6">Protege a los<br />que te rodeaN</p>
                </div>
                <div className={"w-32 select-none cursor-pointer " + (selectOpt === 3 ? "right3-activeOpt" : "")}
                    onClick={() => setSelectOpt(3)}>
                    <p className="w-32 h-8 right3-text2 text-center mb-6">Mejora<br />tu plan</p>
                </div>
            </div>

            <Coverage title="Llanta robada" src="./images/icon_theft.png" initialStateShow={true} initialStateAdd={true} />
            <Coverage title="Choque y/o pasarte la luz roja " src="./images/icon_damage.png" />
            <Coverage title="Atropello en la vía Evitamiento" src="./images/icon_perdidatotal.png" />

        </div>
    )
}

Bloque2.prototype = {
    className: PropTypes.string,
}

Bloque2.defaultProps = {
    className: ""
}

export default Bloque2
