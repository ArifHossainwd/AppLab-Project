"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { FiMenu } from "react-icons/fi";

export default function Navbar() {


    const resMenu = useRef<any>();

    function handleClick(){
        resMenu.current.classList.remove("invisible")
    }
    function handleRemove(){
        resMenu.current.classList.add("invisible")
    }

  return (          
    <div className='container mx-auto'>
        <div className='flex justify-between items-center h-40'>
            <div>
                <img src="img/navbar/logo.png" alt="logo" width={110} height={110}/>
            </div>

            <div className='hidden lg:block'>
                <div className='flex gap-12'>
                    <ul className='flex items-center gap-12 capitalize'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/key-features">key features</Link></li>
                        <li><Link href="/priciing">priciing</Link></li>
                        <li><Link href="/testiminial">testiminial</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                    <div>
                        <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-7 px-7 rounded-full font-bold'>try for free</Button>
                    </div>
                </div>
               
            </div>
            <div className='text-2xl bg-[#007BFF] py-2 px-3 rounded-md text-white lg:hidden'>
                    <FiMenu onClick={()=>handleClick()}/>
            </div>
           

            <div ref={resMenu} onClick={()=>handleRemove()} className='fixed top-0 left-0  h-[100vh] w-full bg-black/15 flex flex-col gap-5 justify-center items-center text-center invisible'>
               <div onClick={(e)=> e.stopPropagation()} className='bg-white h-[70vh] w-[50%] py-20 grid gap-5 rounded-md shadow-lg'>
                    <ul className='capitalize grid gap-6'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/key-features">key features</Link></li>
                        <li><Link href="/priciing">priciing</Link></li>
                        <li><Link href="/testiminial">testiminial</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                    <div>
                            <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-7 px-7 rounded-full font-bold'>try for free</Button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}
