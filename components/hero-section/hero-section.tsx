import React from 'react'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <div class="bg-[url('/img/hero-section/hero-section-bg.png')] bg-cover bg-center w-full grid place-content-center">
        <div className='container mx-auto flex flex-col justify-between items-center lg:grid lg:grid-cols-2 lg:gap-52'>
                <div className='grid gap-7 lg:col-span-1 w-[450px]'>
                    <div className='flex items-center gap-2 bg-gray-300 rounded-full'>
                        <img src="img/hero-section/hero-section-img-1.png" alt="" />
                        <p className='font-bold capitalize'>#1 editors choice app of 2020</p>
                    </div>
                    <div className='grid gap-3'>
                        <h1 className='text-5xl font-bold capitalize'>best app for your <br /> modern lifestyle</h1>
                        <p>Increase productivity with a simple to-do app.app for managing <br /> your parsonal budget</p>
                    </div>
                    <div className='flex items-center gap-4'>
                         <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-3 px-5 rounded-full font-bold'>try for free</Button>
                         <a className='text-[#0000FF] text-xl' href="#">watch demo video</a>
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <img className='lg:w-[400px] md:w-[350px]'  src="img/hero-section/hero-section-img-2.png" alt="img"/>
                </div>
        </div>
    </div>
  )
}
