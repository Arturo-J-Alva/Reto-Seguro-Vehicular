import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types';

const Layout = ({ title, children, header }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>

            <div className="">
                {header && (
                    <div className="header1 md:px-24">
                        <img src="./images/logo-rimac.png" alt="logo-rimac" className="" />
                        <div className="flex flex-row">
                            <p className="right-textTop1 right-textTop1_color2">¿Tienes alguna duda?</p>
                            <div className="flex flex-row ml-6 items-center">
                                <img src="./images/ic_phone.png" alt="icon-phone" className="w-4 h-4 mr-1" />
                                <p className="right-textTop2">(01) 411 6001</p>
                            </div>
                        </div>
                    </div>
                )}
                {children}
            </div>

        </>
    )
}

Layout.prototype = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    header: PropTypes.bool
}

export default Layout


