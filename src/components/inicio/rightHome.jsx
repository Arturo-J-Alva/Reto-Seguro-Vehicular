import React from 'react'
import FormHome from './formHome'

const RightHome = () => {
    return (
        <div className="pt-8">
            <div className="hidden md:flex flex-row justify-end w-full pr-32">
                <p className="right-textTop1">¿Tienes alguna duda?</p>
                <div className="flex flex-row ml-6 items-center">
                    <img src="./images/ic_phone.png" alt="icon-phone" className="w-4 h-4 mr-1" />
                    <p className="right-textTop2">(01) 411 6001</p>
                </div>
            </div>
            <div className="mt-24">
                <FormHome />
            </div>
        </div>
    )
}

export default RightHome
