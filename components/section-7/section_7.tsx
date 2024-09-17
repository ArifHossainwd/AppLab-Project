import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Section_7() {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col gap-16 my-24 md:grid md:grid-cols-2'>
            <div className='grid place-content-center'>
                <img className='w-[500px]' src="img/section-7/section_7_left_Img.png" alt="" />
            </div>
            <div className=' grid gap-8 '>
                <div className='grid gap-5'>
                    <h1 className='text-4xl font-bold capitalize'>Meet Client Setisfaction by using product</h1>
                    <p className='text-gray-500 capitalize text-sm'>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                </div>
                <div className='grid gap-5'>                 
                    <div>
                        <img src="img/section-7/star star star star star.png" alt="" />
                    </div>
                    <div className='grid gap-4'>
                        <h2 className='text-2xl font-bold capitalize'>User friendly & Customizable</h2>
                        <p  className='text-gray-500 capitalize text-sm'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>           
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <img className='w-[60px]' src="img/section-7/zoltan-img.png" alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold capitalize text-xl'>Zoltan Nemeth</h2>
                        <p className='text-gray-500'>CEO of Pixler Lab</p>
                    </div>
                    <div className='flex items-center gap-6 ml-9'>
                        <div className='border  border-gray-300 p-3 rounded-full'>
                             <FaArrowLeftLong className='font-bold text-gray-300'/>
                        </div>
                        <div>
                            <hr className='border border-gray-300 h-5'/>
                        </div>
                        <div className=' p-3 bg-gray-300 rounded-full'>
                            <FaArrowRightLong  className='font-bold text-[#2601F9]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
