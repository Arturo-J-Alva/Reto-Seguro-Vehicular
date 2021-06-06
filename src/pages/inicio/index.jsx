import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LeftDesktop from '../../components/inicio/leftDesktop';
import RightDesktop from '../../components/inicio/rightDesktop';
import Layout from '../../globalcomponents/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Seguro Vehícular | Home">
            <div className="grid grid-cols-5 gap-x-0 ">
                <div className="col-span-2 fondo1">
                    <LeftDesktop />
                </div>
                <div className="col-span-3">
                    <RightDesktop />
                </div>
            </div>
        </Layout>
    )
}

export default Inicio
