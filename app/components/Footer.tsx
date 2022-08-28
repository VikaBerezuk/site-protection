import React, {FC} from 'react';
import {BiChevronDown} from "react-icons/bi";
import {LinksFooter} from "./const/Links";

const Footer:FC = () => {
    return (
        <footer className='bg-[#01000D] py-5'>
            <nav className='max-w-screen-lg text-black bg-[#17DC95] lg:mx-auto mx-7 rounded-2xl'>
                <div className='md:flex items-center justify-between py-4 md:px-10 px-4'>
                    <div className='font-bold cursor-pointer flex items-center font-[Poppins]'>LOGO</div>
                    <ul className={'flex flex-wrap items-center justify-end md:pb-0 m-0 md:static left-0 w-1/2' +
                     'md:w-auto md:pl-0 transition-all duration-500 ease-in'}>
                        {
                            LinksFooter.map((link)=>(
                                <li key={link.name}
                                    className={'cursor-pointer px-6 py-2 relative after:absolute  after:top-5 after:left-[-6px]' +
                                        ' after:w-3 after:border-b-[3px] after:border-b-[#474c56] hover:text-white'}>
                                    <a href={link.link} className='duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                        <div className='flex py-2 px-6'>RU <BiChevronDown className='pl-2 text-2xl'/></div>
                    </ul>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;