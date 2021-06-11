import React from 'react'
import LeftBlock from '../../components/datos-auto/leftBlock'
import RightBlock from '../../components/datos-auto/rightBlock'
//import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../globalcomponents/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Datos | Home" header>
            <div className="md:grid md:grid-cols-10 md:gap-x-0 ">
                <div className="md:col-span-3 left2-bg">
                    <LeftBlock />
                </div>
                <div className="md:col-span-7 ">
                    <RightBlock />
                </div>
            </div>
        </Layout>
    )
}

export default Inicio
