import React, {FC} from 'react';

const WorkScheme:FC = () => {
    return (
        <section id='scheme' className='md:flex justify-between text-white max-w-screen-lg lg:m-auto mx-7'>
            <div className='md:w-1/2 md:border-r-2 md:border-r-[#4f555d] md:mr-5 relative mx-7 lg:ml-0 my-7 lg:my-0 md:pb-32'>
                <div className='after:w-[55%] sm:after:w-[64%] after:top-12 md:after:right-20 after:right-12 after:absolute after:h-48
                 after:rounded-r-[40px] after:border-y-2 after:border-r-2 after:border-y-[#4f555d] after:border-r-[#4f555d]'>
                    <img src='/message.svg' alt='message'/>
                </div>
                <div className='relative'>
                    <img src='/analyst1.svg' alt='analyst' className='absolute md:right-9 right-0'/>
                </div>
                <div className='mt-24 relative z-10'>
                    <img src='/text.svg' alt='text'/>
                </div>
                <div className='relative after:w-[55%] sm:after:w-[64%] after:-top-14 md:after:left-12 after:left-14 after:absolute after:h-28
                 after:rounded-l-[40px] after:border-b-2 after:border-l-2 after:border-b-[#4f555d] after:border-l-[#4f555d] -z-1'>
                    <img src='/card.svg' alt='card' className='absolute md:right-9 right-0 z-10'/>
                </div>
                <div className='mt-24 relative after:w-[55%] sm:after:w-[64%] after:-top-16 md:after:right-20 after:right-12 after:absolute after:h-28
                 after:rounded-r-[40px] after:border-b-2 after:border-r-2 after:border-b-[#4f555d] after:border-r-[#4f555d] -z-1'>
                    <img src='/analyst2.svg' alt='analyst'/>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center md:ml-5 mx-7 md:mr-0'>
                <h2 className='text-5xl font-bold relative after:absolute lg:after:-right-16 after:right-9 after:top-6 md:after:w-1/3
            after:border-t-[2px] after:border-t-[#4f555d]'>Схема Работы</h2>
                <p className='text-xs my-4'>
                    Защита информации компании – обязательное условие для обеспечения безопасности компании и ее сотрудников.
                    Чтобы уберечься от распространения конфиденциальных документов и избежать финансовых убытков.
                    Современные методы защиты включают в себя идентификацию и аутентификацию, разграничение прав доступа
                    и управление доступом к данным, криптографию и создание межсетевых экранов.
                </p>
                <button className='w-fit py-6 px-5 mt-5 text-center rounded-xl bg-[#17DC95] text-black font-bold'>Подробнее</button>
            </div>
        </section>
    );
};

export default WorkScheme;