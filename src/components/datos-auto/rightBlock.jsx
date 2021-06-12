import React from 'react'
import FormDataCar from './formDataCar'

const RightBlock = () => {
    return (
        <div className="mt-12 ml-24">
            <div className="flex">
                <div className="arrow-left"><i /></div>
                <p className="backText ml-4">VOLVER</p>
            </div>
            <div className="flex">
                <FormDataCar />
                <div className="ml-16 hidden md:block" style={{marginTop:"115px"}}>
                    <h2 className="right2-text5 right2-text5_border">AYUDA</h2>
                    <div className="flex mt-4 items-center">
                        <p className="right2-text6" >¿No encuentras el modelo ?</p>
                        <img src="./images/icon_car.png" alt="icon-car" className="h-16 w-16 ml-8" />
                    </div>
                    <a href="#" className="right2-link">
                        clic aquí
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RightBlock
