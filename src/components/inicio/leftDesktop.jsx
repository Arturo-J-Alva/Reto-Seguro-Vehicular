import React from 'react'

const LeftDesktop = () => {
    return (
        <div className="pt-8">
             <img src="./images/logo-rimac.png" alt="logo-rimac" className="ml-24 mb-16" />
            <img src="./images/ilustracion1.png" alt="ilustracion-1" className="mx-auto" />
            <div className="ml-32">
            <p className="left-text1 mt-4">¡NUEVO!</p>
            <h1 className="left-text2">Seguro <span className="left-text2-span">Vehicular <hr /> Tracking</span> </h1>
            <p className="left-text3 my-4">Cuéntanos donde le haras seguimiento a tu seguro</p>
            </div>
            <footer className="left-text4 ml-24 mt-16 mb-8">© 2020 RIMAC Seguros y Reaseguros.</footer>
        </div>
    )
}

export default LeftDesktop
