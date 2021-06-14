import React, { useState } from 'react'
import InputPicker from '../../globalcomponents/inputPicker'
import InputRadio from '../../globalcomponents/inputRadio'
import FormButton from '../../globalcomponents/formButton'
import { useRouter } from 'next/router';

const FormDataCar = () => {

    const [isGas, setIsGas] = useState("yes")
    const [sumAssured, setSumAssured] = useState(14300)
    const router = useRouter()

    function formatNumber() {
        const mil = Math.floor(sumAssured / 1000)
        const hundred = sumAssured - mil * 1000
        return mil + "," + (hundred || "000")
    }

    function addSum() {
        setSumAssured(x => x < 16500 ? (x + 100) : x)
    }

    function subtract() {
        setSumAssured(x => x > 12500 ? (x - 100) : x)
    }

    function onSubmit(ev) {
        ev.preventDefault()
        router.push("arma-plan")

    }

    return (
        <div className="mt-6 formDataCar" >
            <h1 className="right2-h1">¡Hola,<span> Juan!</span></h1>
            <p className="right2-text1 mt-2">Completa los datos de tu auto</p>
            <form className="mt-6" onSubmit={onSubmit}>
                <InputPicker classContainer="" inputValue={() => null} list={dataYears} label="Año" />
                <InputPicker classContainer="mt-4" inputValue={() => null} list={dataBrands} label="Marca" />

                <div className="flex lg:hidden mt-6 p-4" style={{ background: "#F7F8FC", borderRadius: "8px" }}>

                    <img src="./images/icon_car.png" alt="icon-car" className="h-16 w-16" />
                    <div className="ml-4">
                        <p className="right2-text6" >¿No encuentras el modelo ?</p>
                        <br />
                        <a href="#" className="right2-link">
                            clic aquí
                        </a>
                    </div>
                </div>

                <div className="md:flex md:flex-row md:justify-between md:items-center mt-6 mb-6 md:mb-0">
                    <p className="right2-text2">¿Tu auto es a gas?</p>
                    <div className="flex">
                        <InputRadio text="Sí" name="gas" value="yes"
                            defaultChecked={isGas === "yes"} onChange={(e) => setIsGas(e)}
                        />
                        <InputRadio text="No" name="gas" value="no" className="ml-8"
                            defaultChecked={isGas === "no"} onChange={(e) => setIsGas(e)}
                        />
                    </div>
                </div>

                <hr className="hidden md:block my-10" />

                <div className="md:flex items-center">
                    <div className="w-48">
                        <p className="right2-text2 text-left mb-1">Indica la suma asegurada</p>
                        <div className="flex justify-between">
                            <p className="right2-text3">MIN $12,500</p>
                            <p className="right2-text3">MAX $16,500</p>
                        </div>
                    </div>
                    <div>
                        <div className="inputIncrement md:ml-8 hover:border-indigo-400 flex flex-row justify-between items-center px-5 mt-4 md:mt-0">
                            <svg width={12} height={2} viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={subtract}>
                                <path d="M11.0001 1L1.00012 1" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <p className="right2-text4 select-none">$ {formatNumber()}</p>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={addSum}>
                                <path d="M8.00012 3V13" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.0001 8L3.00012 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                    </div>

                </div>

                <FormButton text="CONTINUAR" className=" mt-12 w-full md:w-48 mb-8" type="submit" />

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
