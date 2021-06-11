import React from 'react'

const LeftBlock = () => {
    return (
        <div >
            <ul className="">
                <li className="flex ml-24 items-center mt-12">
                    <div className="left2-enableOpt">1</div>
                    <p className="left2-text1 ml-3">Datos del auto</p>
                </li>
                <li className="flex ml-24 items-center mt-12">
                    <div className="left2-disableOpt">2</div>
                    <p className="left2-text2 ml-3">Datos del auto</p>
                </li>
            </ul>
        </div>
    )
}

export default LeftBlock
