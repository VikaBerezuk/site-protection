import React, {FC, useState} from 'react';
import Header from "./Header";
import {LinksHeader} from "./const/Links";

const About:FC = () => {
    const [titleId, setTitleId] = useState<number>(0);
    const [open,setOpen]=useState(false);
    return (
        <section id='main' style={{
            background: `url('/computer.png') no-repeat center/cover`,
            height: '100vh',
            minHeight: '600px',
            boxShadow: 'inset 0 -10px 30px 10px'
        }}>
            <Header links={LinksHeader} titleId={titleId} setTitleId={setTitleId} open={open} setOpen={setOpen}/>
            <section
                className='text-white h-full md:pt-40 pt-20 text-center max-w-screen-lg m-auto lg:border-x-[2px] lg:border-x-[#4f555d]'>
                <h1 className='lg:text-5xl text-3xl font-bold relative after:absolute after:-left-6 sm:after:top-6  after:top-14 after:w-16 after:border-t-[2px] after:border-t-[#4f555d]
                before:absolute before:right-0 sm:before:top-6 before:top-14 before:w-10 before:border-t-[2px] before:border-t-[#4f555d] px-14 md:px-0
                '>Надежная защита для вашего сайта</h1>
                <ul className='mt-10 font-bold lg:text-xl text-lg md:w-full w-2/3 m-auto'>
                    <li className='mb-4 relative after:absolute md:after:-left-6 after:-left-14 after:top-3 md:after:w-1/5 after:w-1/4 after:border-t-[2px] after:border-t-[#4f555d]'>Лечение
                        и диагностика сайтов.
                    </li>
                    <li className='mb-4 relative after:absolute  md:after:-left-6 after:-left-20 after:top-3 md:after:w-1/4 after:w-1/4 after:border-t-[2px] after:border-t-[#4f555d]'>Гарантируем
                        безопасность от 99% внешних угроз.
                    </li>
                    <li className='mb-4 relative after:absolute md:after:-left-6 after:-left-14 after:top-3 after:w-1/5 after:border-t-[2px] after:border-t-[#4f555d]'>Пентест,
                        защита от DDoS атак, взлома сайтов и потери данных.
                    </li>
                </ul>
                <button className='border-[2px] w-28 py-2 mt-5 text-center rounded-xl bg-[rgba(0,0,0,0.4)]'>Оставить
                    Запрос
                </button>
            </section>
        </section>
    );
};

export default About;