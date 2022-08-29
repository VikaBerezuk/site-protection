import React, {FC, useState} from 'react';
import {useOnScreen} from "../../hooks/useOnScreen";

const Request:FC = () => {
    const [refTitle, visibleTitle] = useOnScreen({threshold: [0, 0.25, 0.5, 0.75, 1]});
    const [value, setValue] = useState<string>('');
    const handlerInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }
    return (
        <section className='text-white max-w-screen-lg m-auto mt-9 text-center' ref={refTitle}
                 style={{opacity: visibleTitle ? 1 : 0, transitionDuration: visibleTitle ? '0.3s' : '0', transitionDelay: visibleTitle ? '0.3s' : '0s'}}>
            <h2 className='text-5xl font-bold my-7 relative after:absolute after:-left-16 after:top-6 after:w-1/3 after:border-t-[2px] after:border-t-[#4f555d]'>
                Оставить Запрос</h2>
            <p className='md:w-1/2 w-4/5 m-auto my-4 text-sm relative px-5
            after:absolute after:right-0 after:h-14 after:border-r-[2px] after:border-r-[#4f555d] after:top-40
            before:absolute before:right-0 before:h-56 before:border-r-[2px] before:border-r-[#4f555d] before:-top-28'>
                Надежная защита для вашего сайта Гарантируем безопасность от 99% внешних угроз. Пентест, защита от DDoS
                атак, взлома сайтов и потери данных. Лечение и диагностика сайтов.</p>
            <div className='relative after:absolute lg:after:-right-16 after:right-0
            after:top-3 lg:after:w-2/5 md:after:w-1/5 after:w-1/12 after:border-t-[2px] after:border-t-[#4f555d]'>
                <input type='email' value={value} onChange={(e) => handlerInput(e) } placeholder='Enter your email'
                className='rounded-lg px-3 py-1 text-black'/>
            </div>
            <button className='border-[2px] w-28 py-4 зн_4 mt-5 mb-10 text-center rounded-xl bg-[rgba(0,0,0,0.4)] hover:bg-white hover:text-[#17DC95]'>
                Отправить Запрос
            </button>
        </section>
    );
};

export default Request;