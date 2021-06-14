import React from 'react'
import LeftBlock from '../../components/arma-plan/leftBlock'
import RightBlock from '../../components/arma-plan/rightBlock'
//import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../globalcomponents/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Datos | Home" header>
            <div className="md:hidden flex flex-row items-center mx-8 mt-3">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={12} cy={12} r="11.5" transform="rotate(-180 12 12)" stroke="#F0F2FA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0601 8.42905C13.8133 8.19032 13.4175 8.19032 13.1707 8.42905L9.93988 11.5541C9.6867 11.7989 9.6867 12.2011 9.93988 12.4459L13.1707 15.5709C13.4175 15.8097 13.8133 15.8097 14.0601 15.5709C14.3133 15.3261 14.3133 14.9239 14.0601 14.6791L11.2904 12L14.0601 9.32095C14.3133 9.07606 14.3133 8.67394 14.0601 8.42905Z" fill="#E4E8F7" />
                </svg>
                <h1 className="left2-text0 ml-3 mr-4">PASO 2 DE 2</h1>
                <svg width={176} height={6} viewBox="0 0 176 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C0 1.34315 1.34315 0 3 0H173C174.657 0 176 1.34315 176 3C176 4.65685 174.657 6 173 6H3C1.34314 6 0 4.65685 0 3Z" fill="#E4E8F7" />
                    <path d="M0 3C0 1.34315 1.34315 0 3 0H173C174.657 0 176 1.34315 176 3C176 4.65685 174.657 6 173 6H3C1.34314 6 0 4.65685 0 3Z" fill="#6769FF" />
                </svg>
            </div>
            <hr className="md:hidden mt-3" />
            <div className="md:grid md:grid-cols-10 md:gap-x-0">
                <div className="hidden md:block md:col-span-3 left2-bg">
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
