import React, {FC, useState} from 'react';
import {servicesProduct} from "./servicesProduct";

const Services:FC = () => {
    const [active, setActive] = useState<number | null>(null)
    return (
        <section id='services' className='text-white py-20 max-w-screen-lg m-auto'>
            <header className='flex justify-between'>
                <h2 className='text-5xl relative
                before:w-[60px] before:border-b-[#4d4c56] before:border-b-2 before:absolute before:top-7 before:-right-64
                after:w-6/12 after:border-b-[#4d4c56] after:border-b-2 after:absolute  after:top-7 after:-right-44'>
                    Наши Услуги</h2>
                <a href='#' className='text-[#17DC95] underline-offset-8'>Полный Перечень Услуг</a>
            </header>
            <div className='text-center my-5 flex'>
                { servicesProduct.map((el, i) => (
                    <div className={`w-1/4 border-2 p-3 m-3 rounded-2xl py-8 px-4 flex flex-col ${active === i ? 'max-h-[100%] text-black bg-white': 'max-h-[245px]'}`} key={i} onClick={() => setActive(i)}>
                        <img className={`${active === i ? 'fill-[#243c5a] bg-black' : ''}  m-auto`} src={el.icon} alt='icon'/>
                        <p className='font-bold text-sm m-2'>{el.name}</p>
                        {active === i ? <p className='text-xs'>{el.description}</p>: ''}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;