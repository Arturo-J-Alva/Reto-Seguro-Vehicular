import React from 'react'
//import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../globalcomponents/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Datos | Home">
            <div className="md:grid md:grid-cols-10 md:gap-x-0 ">
                <div className="md:col-span-3 bg-red-300">
                    hola!
                </div>
                <div className="md:col-span-7 bg-blue-300">
                    hola!
                </div>
            </div>
        </Layout>
    )
}

export default Inicio
