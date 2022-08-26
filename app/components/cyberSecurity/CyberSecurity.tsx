import React from 'react';
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import {information, list, schemaWork} from "./information";

const CyberSecurity = () => {
    return (
        <section className='bg-black'>
            <Header />
            <section className='text-white max-w-screen-lg m-auto'>
               <div className='flex md:mt-14 mt-7'>
                   <Link href='/'><a className='cursor-pointer px-6 relative after:absolute  after:top-3
                    after:right-[-6px] after:w-3 after:border-b-[3px] after:border-b-[#474c56]'>Главная</a></Link>
                   <div className='text-[#17DC95] px-6'>Полный Перечень Услуг</div>
               </div>
                <h2 className='md:text-5xl text-3xl font-bold md:mt-14 mt-7 mb-7 mx-7'>Услуги кибербезопасности</h2>
                {list.map((el, i) => (
                    <p key={i} className='mx-7 my-3 text-xs'>{el.title}</p>
                ))}
                <h3 className='text-2xl font-bold mt-5 mx-7'>Схема работы</h3>
                <ul className='mb-6 mt-3'>
                    {schemaWork.map((el, i) => (
                        <li key={i} className='text-xs mx-7'>{el.title}</li>
                    ))}
                </ul>
                {information.map((el, i) => (
                    <p key={i} className='mx-7 my-3 text-xs'>{el.title}</p>
                ))}
            </section>
            <Footer />
        </section>
    );
};

export default CyberSecurity;