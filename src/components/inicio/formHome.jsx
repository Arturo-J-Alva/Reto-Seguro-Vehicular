import React, { useState } from 'react'
import { useRouter } from 'next/router';
import InputPicker from '../../globalcomponents/inputPicker'
import InputText from '../../globalcomponents/inputText'
import CheckBox from '../../globalcomponents/checkBox';
import FormButton from '../../globalcomponents/formButton';

const FormHome = () => {
    const router = useRouter()
    const [formData, setFormData] = useState(formDataInit)

    function onChange(value, key) {
        setFormData(x => {
            return { ...x, [key]: value }
        })
    }

    function onSubmit(ev) {
        ev.preventDefault()
        console.log("formData:", formData)
        const { document, plaque, phone, check } = formData
        if (!document || !plaque || !phone || !check) return alert("Debe aceptar las políticas para continuar.")
        //router.push("paso1")

    }

    return (
        <form className="formHome flex flex-col mx-auto" onSubmit={onSubmit}>
            <h2 className="formHome-text1">Déjanos tus datos</h2>
            <div className="flex mt-4">
                <div className="w-1/3">
                    <InputPicker classContainer="rounded-r-none" inputValue={() => null} list={dataPicker} />
                </div>
                <div className="w-2/3">
                    <InputText label={"Nro de Documento"} classContainer="rounded-l-none" inputValue={(value) => onChange(value, "document")} required />
                </div>
            </div>
            <InputText label={"Celular"} border inputValue={(value) => onChange(value, "phone")} required />
            <InputText label={"Placa"} border inputValue={(value) => onChange(value, "plaque")} required />
            <CheckBox classContainer="text-sm text-gray-500 mt-2" onChecked={(value) => onChange(value, "check")}>
                Acepto la <a href="#" className="underline">Política de Protección de Datos Personales y los Términos y Condiciones.</a>
            </CheckBox>

            <FormButton text="COTÍZALO" className="w-48 mt-8" type="submit"
                onClick={() => null} />
        </form>
    )
}

export default FormHome

const dataPicker = [
    { value: 'DNI', label: 'DNI' },
    { value: 'CARNET', label: 'CARNET' },
    { value: 'PASAPORTE', label: 'PASAPORTE' }
]

const formDataInit = {
    document: "",
    plaque: "",
    phone: "",
    check: false,
}