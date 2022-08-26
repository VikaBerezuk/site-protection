import React, {FC, useState} from 'react';
import {ourServicesProduct} from "../const/ourServicesProduct";
import {useOnScreen} from "../../hooks/useOnScreen";

const OurServices:FC = () => {
    const [refTitle, visibleTitle] = useOnScreen({threshold: [0, 0.25, 0.5, 0.75, 1]});
    const [active, setActive] = useState<number | null>(null);
    return (
        <section id='ourServices' className='text-white py-20 max-w-screen-lg m-auto bg-[#01000D]' ref={refTitle}>
            <header
                style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '0.3s' : '0s'}}
                className='sm:flex justify-between mx-7 lg:mx-0 items-center'>
                <h2 className='text-5xl relative mb-3 md:mb-0
                lg:before:w-[60px] before:border-b-[#4d4c56] before:border-b-2 before:absolute before:top-7 before:-right-64
                lg:after:w-6/12 after:border-b-[#4d4c56] after:border-b-2 after:absolute  after:top-7 after:-right-44'>
                    Наши Услуги</h2>
                <a href='#' className='text-[#17DC95] underline-offset-8'>Полный Перечень Услуг</a>
            </header>
            <div style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '0.7s' : '0s'}} className='text-center my-5 flex flex-wrap md:flex-nowrap'>
                { ourServicesProduct.map((el, i) => (
                    <div className={`md:w-1/4 sm:w-5/12 cursor-pointer w-full my-5 md:mx-3 sm:mx-auto mx-7 border-2 p-3 m-3 rounded-2xl py-8 px-4 flex flex-col 
                    ${active === i ? 'max-h-[100%] text-black bg-white': 'max-h-[245px]'}`} key={i} onClick={() => setActive(i)}>
                        <img className='m-auto' src={active === i ? el.icon + '1.svg' : `${el.icon}.svg`} alt='icon'/>
                        <p className='font-bold text-sm m-2'>{el.name}</p>
                        {active === i ? <p className='text-xs'>{el.description}</p>: ''}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default OurServices;