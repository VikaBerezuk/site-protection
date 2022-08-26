import React, {FC} from 'react';
import {servicesInformation} from "./const/servicesInformation";
import { BiChevronRight } from "react-icons/bi";

const Services:FC = () => {
    return (
        <section id='services' className='max-w-screen-lg m-auto'>
            <h2 className='text-white text-5xl font-bold my-7 mx-7 md:mx-3 relative  md:-mt-20
            after:absolute lg:after:-right-16 after:right-5 after:top-6 lg:after:w-1/3 md:after:w-1/5  after:border-t-[2px] after:border-t-[#4f555d]
            before:absolute before:right-[35%] before:top-6 md:before:w-1/3 before:border-t-[2px] before:border-t-[#4f555d]
            '>
                Сервисы</h2>
            <div className='flex flex-wrap md:flex-nowrap'>
                {servicesInformation.map((el, i) => (
                    <div key={i} className='md:w-1/3 sm:w-[44%] mx-7 sm:mx-auto md:mx-3 bg-white pb-10 rounded-3xl mt-10 md:mt-0 relative'>
                        <img className='center/cover w-full' src={el.img} alt={el.img}/>
                        <p className='px-7 mt-7 mb-2 text-base font-bold'>{el.title}</p>
                        <div className='px-7 text-sm'>{el.description}</div>
                        <div className='flex px-7 absolute bottom-4 right-0 items-center'>
                            <a href='' className='underline'>Подробнее</a>
                            <BiChevronRight />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;