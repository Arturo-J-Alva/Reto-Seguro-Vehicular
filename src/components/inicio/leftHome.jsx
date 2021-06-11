import React from 'react'

const LeftHome = () => {
    return (
        <div className="pt-8">
            <div className="flex flex-row justify-between items-center md:block mb-16">
                <img src="./images/logo-rimac.png" alt="logo-rimac" className="ml-8 md:ml-24 " />
                <div className="flex flex-row items-center md:hidden mr-8">
                    <img src="./images/ic_phone.png" alt="icon-phone" className="w-4 h-4 mr-1" />
                    <p className="right-textTop2">Llámanos</p>
                </div>
            </div>
            <img src="./images/ilustracion1.png" alt="ilustracion-1" className="mx-auto hidden md:block" />
            <img src="./images/ilustracion1-mobile.png" alt="ilustracion-1-mobile" className=" absolute right-0 md:hidden" />
            <div className="ml-8 md:ml-32">
                <p className="left-text1 mt-4">¡NUEVO!</p>
                <h1 className="left-text2">Seguro <span className="left-text2-span">Vehicular <br /> Tracking</span> </h1>
                <p className="left-text3 my-4 pr-24 md:pr-12 lg:pr-8">Cuéntanos donde le haras seguimiento a tu seguro</p>
            </div>
            <footer className="left-text4 ml-24 mt-16 mb-8 hidden md:block">© 2020 RIMAC Seguros y Reaseguros.</footer>
        </div>
    )
}

export default LeftHome
