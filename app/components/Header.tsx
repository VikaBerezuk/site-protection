import React, {FC, useState} from 'react';
import {BiChevronDown} from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { GoX } from "react-icons/go";
import {LinksHeader} from "./const/Links";

const Header:FC = () => {
    const [titleId, setTitleId] = useState<number>(0);
    const [open,setOpen]=useState(false);
    return (
        <header className='border-b-[#4e5258] border-b-[3px]'>
            <nav className='max-w-screen-lg m-auto text-white'>
                <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                    <div className='font-bold cursor-pointer flex items-center font-[Poppins]'>LOGO</div>

                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                        <div className={open ? 'close':'menu'}>{open ? <GoX /> :<FiAlignJustify />}</div>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 m-0 absolute md:static z-30 w-full md:w-fit left-0 w-1/2 
                     md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-12 bg-black':'top-[-490px]'}`}>
                        {
                            LinksHeader.map((link, i)=>(
                                <li key={link.name} onClick={() => setTitleId(i)}
                                    className={`${titleId === i ? 'text-[#17DC95]': ''} cursor-pointer px-6 py-2 relative md:after:absolute  after:top-5 
                                    after:right-[-6px] after:w-3 after:border-b-[3px] after:border-b-[#474c56]`}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        <div className='flex py-2 px-6'>RU <BiChevronDown className='pl-2 text-2xl'/></div>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;