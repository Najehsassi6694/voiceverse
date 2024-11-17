'use client';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems=[
    {
    name : 'Home',
    url:'/',
}, 
{
    name : 'Features',
    url:'/Features',
}, 
{
    name : 'Use cases',
    url:'/use-cases',
},
{
    name : 'Pricing',
    url:'/pricing',
},

];


export const Header=()=>{

    const [isOpen,setIsOpen]=React.useState(false);
    return(
        <header className='relative z-90 w-full h-fit px-5 py-4 bg-gray-900 xl:bg-transparent'>
<div className='flex items-center justify-between'>
    <Logo/>
    <nav className='hidden md:flex gap-5 text-white items-center'>
        {navItems.map((item,index)=>(
            <Link key={index} href={item.url}>
            {item.name}
            </Link>
        ))}
    </nav>
    
    <div className='hidden md:flex gap-4'>
        <Link href="/login" className='text-sm flex items-center rounded-full border-white border py-1 px-5 hover:bg-orange-400 hover:text-[#1F1F38] transition text-white'>
        Login
        </Link>
        <Link href="/#" className='custom_button'>
        Get For free
        </Link>
        
         </div>

         <button onClick={()=> setIsOpen(!isOpen)} className='md:hidden text-white text-2xl relative z-20 p-3'>
{isOpen? <FaTimes/> : <FaBars/>}
         </button>
</div>
{
    isOpen &&(
        <nav className='md:hidden mt-4 space-y-4'>
            {
                navItems.map((item,index)=>(
                    <Link key={index}
                     href={item.url}
                     className='block text-white font-semibold text-sm'
                    onClick={()=>setIsOpen(false)}>
                        {item.name}
                    </Link>
                ))
            }
            <div className="flex flex-col gap-4 mt-4 w-full ">
                <Link href={"#login"}
                onClick={()=> setIsOpen(false)}
                className='w-fit text-sm rounded-full text-center border border-white py-2 px-5 hover:bg-orange-400 hover:text-[#1F1F38] transition text-white'>
               Login
                </Link>

                <Link href={"#login"}
                onClick={()=> setIsOpen(false)}
                className='w-fit custom_button text-center justify-center'>
               Get For Free
                </Link>
            </div>
        </nav>
    )
}

        </header>
   
   
   
   
    )
};