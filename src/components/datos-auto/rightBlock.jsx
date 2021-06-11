import React from 'react'
import FormDataCar from './formDataCar'

const RightBlock = () => {
    return (
        <div className="mt-12 ml-24">
            <div className="flex">
                <div className="arrow-left"><i /></div>
                <p className="backText ml-4">VOLVER</p>
            </div>
            <div className="flex items-center">
                <FormDataCar />
               <p>HOLAAAA</p>
            </div>
        </div>
    )
}

export default RightBlock
