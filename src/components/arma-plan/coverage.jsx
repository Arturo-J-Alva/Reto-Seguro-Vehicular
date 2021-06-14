import React, { useState } from 'react'
import AddRemove from './addRemove'

const Coverage = ({ title, src, initialStateShow, initialStateAdd }) => {

    const [show, setShow] = useState(initialStateShow)
    const [add, setAdd] = useState(initialStateAdd)

    return (
        <>
            <div className="flex mt-8">
                <img src={src} alt="icon-left" className="h-12 w-12" />
                <div className="flex-1 ml-6">
                    <h3 className="right3-text1">{title}</h3>
                    <AddRemove add={add} setAdd={setAdd} />
                </div>
                {show ?
                    <svg className="cursor-pointer" onClick={() => setShow(x => !x)}
                        width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.05837 7.45073C0.659293 7.04052 0.657391 6.38081 1.0541 5.9683L6.24689 0.568698C6.65382 0.145558 7.32401 0.143626 7.73338 0.564413L12.9572 5.93399C13.3563 6.34421 13.3582 7.00392 12.9615 7.41643C12.5545 7.83956 11.8844 7.8415 11.475 7.42071L6.99662 2.81739L2.54486 7.44645C2.13792 7.86959 1.46774 7.87152 1.05837 7.45073Z" fill="#EF3340" />
                    </svg>
                    : <svg className="cursor-pointer" onClick={() => setShow(x => !x)}
                        width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9516 0.566473C13.3495 0.977836 13.3495 1.63755 12.9516 2.04891L7.74324 7.43353C7.3351 7.85549 6.6649 7.85549 6.25675 7.43353L1.04842 2.04891C0.650526 1.63755 0.650526 0.977835 1.04842 0.566473C1.45657 0.144508 2.12676 0.144508 2.53491 0.566473L7 5.18269L11.4651 0.566473C11.8732 0.144509 12.5434 0.144509 12.9516 0.566473Z" fill="#EF3340" />
                    </svg>}
            </div>
            {show && <div className="pl-12  mt-4">
                <p className="ml-6 right3-text4 right3-text4_widht">He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más</p>
            </div>}
            <hr className="mt-8 mb-8" />
        </>
    )
}

Coverage.defaultProps = {
    initialState: false,
    initialStateAdd: false
}

export default Coverage
