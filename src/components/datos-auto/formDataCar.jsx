import React, { useState } from 'react'
import InputPicker from '../../globalcomponents/inputPicker'
import InputRadio from '../../globalcomponents/inputRadio'

const FormDataCar = () => {

    const [isGas, setIsGas] = useState("yes")

    return (
        <div className="mt-6 formDataCar">
            <h1 className="right2-h1">¡Hola,<span> Juan!</span></h1>
            <p className="right2-text1 mt-2">Completa los datos de tu auto</p>
            <form className="mt-6">
                <InputPicker classContainer="" inputValue={() => null} list={dataYears} label="Año" />
                <InputPicker classContainer="mt-4" inputValue={() => null} list={dataBrands} label="Marca" />

                <div className="flex flex-row justify-around items-center mt-6">
                    <p className="right2-text2">¿Tu auto es a gas?</p>
                    <InputRadio text="Sí" name="gas" value="yes"
                    defaultChecked={isGas === "yes"} onChange={(e) => setIsGas(e)}
                    />
                    <InputRadio text="No" name="gas" value="no"
                    defaultChecked={isGas === "no"} onChange={(e) => setIsGas(e)}
                    />
                </div>

            </form>
        </div>
    )
}

const dataYears = [
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' },
]

const dataBrands = [
    { value: '1', label: 'Volkswagen' },
    { value: '2', label: 'BMW' },
    { value: '3', label: 'Toyota' },
    { value: '4', label: 'Kia' },
    { value: '5', label: 'Honda' },
    { value: '6', label: 'Hyundai' },
    { value: '7', label: 'Volvo' },
    { value: '8', label: 'Tesla' },
    { value: '9', label: 'Chevrolet' },
]

export default FormDataCar
