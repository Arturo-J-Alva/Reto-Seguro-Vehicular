import React from 'react'
import Block1 from './bloque1'
import Block2 from './bloque2'
import Block3 from './bloque3'
import Block4 from './bloque4'

const RightBlock = () => {
    return (
        <div className="mt-4 md:mt-12 mx-8 md:ml-24">
            <div className="hidden md:flex">
                <div className="arrow-left"><i /></div>
                <p className="backText ml-4">VOLVER</p>
            </div>
            <div className="flex">
                <div>
                    <Block1 className="pt-6 " />
                    <Block2 className="mt-16" />
                </div>
                <Block3 className="lg:ml-24 hidden lg:block" />
            </div>
            <Block4 className="lg:hidden mb-4" />
        </div>
    )
}

export default RightBlock
