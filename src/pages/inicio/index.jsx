import React from 'react'
//import { useDispatch, useSelector } from 'react-redux';
import LeftHome from '../../components/inicio/leftHome';
import RightHome from '../../components/inicio/rightHome';
import Layout from '../../globalcomponents/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Seguro Vehícular | Home">
            <div className="md:grid md:grid-cols-5 md:gap-x-0 ">
                <div className="md:col-span-2 fondo1">
                    <LeftHome />
                </div>
                <div className="md:col-span-3">
                    <RightHome />
                </div>
            </div>
        </Layout>
    )
}

export default Inicio
