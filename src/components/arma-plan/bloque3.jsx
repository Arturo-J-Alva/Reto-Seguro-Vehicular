import React from 'react'
import PropTypes from 'prop-types';
import FormButton from '../../globalcomponents/formButton'

const Bloque3 = ({ className }) => {

    return (
        <div className={"w-56 " + className}>
            <div className={"flex"} >
                <div className="flex-1">
                    <p className="right3-text5">$35.00</p>
                    <p className="right3-text6">mensuales</p>
                </div>
                <img src="./images/vehicular_flexible.png" alt="vehicular-flexible" className="h-16 w-16" />
            </div>
            <hr style={{ marginTop: "19px", marginBlock: "24px" }} />
            <p className="right2-text2">El precio incluye:</p>
            <ul className="mt-3 mb-8">
                <li className="flex items-center mb-2">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z" fill="#43B748" />
                    </svg>
                    <p className="right3-text4 ml-4">Llanta de respuesto</p>
                </li>
                <li className="flex items-center mb-2">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z" fill="#43B748" />
                    </svg>
                    <p className="right3-text4 ml-4">Analisis de motor</p>
                </li>
                <li className="flex items-center mb-2">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z" fill="#43B748" />
                    </svg>
                    <p className="right3-text4 ml-4">Aros gratis</p>
                </li>
            </ul>
            <FormButton text="LO QUIERO" className="w-full" icon={false} />
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
