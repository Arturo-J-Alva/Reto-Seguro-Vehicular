import React from 'react'
import Head from 'next/head'

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>

            <div className="">
                {children}
            </div>

        </>
    )
}

export default Layout
