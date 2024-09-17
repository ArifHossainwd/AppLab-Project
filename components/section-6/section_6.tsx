import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

export default function Section_6() {
  return (
    <div>
          <div className='container mx-auto my-36 text-center grid gap-16'>
      <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold capitalize'>Get awesome features, without extra charges</h1>
            <p className='text-base text-gray-500 w-[600px]'>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
      </div>
      <div className=' flex justify-center items-center'>
          <div className='border border-gray-500 rounded-full w-60 flex justify-between '>
              <span className='bg-[#0000FF] hover:bg-[#00008B] px-6 py-2 font-bold rounded-full text-white capitalize '>monthly</span>
              <span className='px-6 py-2 capitalize font-bold text-gray-500 hover:text-black'>annually</span>
          </div>
      </div>
      <div className='flex flex-col items-center gap-16 md:flex md:flex-row md:justify-center lg:gap-32'>
            <div className=' w-[300px]  shadow-lg'>
                <div className='bg-gray-200 py-8 grid gap-6 rounded-t-md'>
                   <div>
                        <p>
                          <span className='text-5xl font-bold'>$0</span>
                          <span className='text-gray-500'>/month</span>
                        </p>
                   </div>
                   <div className='grid gap-3'>
                        <h3 className='font-bold text-xl capitalize'>Business class</h3>
                        <p className='text-gray-500 capitalize font-bold'>For small teams or office</p>
                   </div>
                </div>
                <div className='bg-white py-8 grid gap-6 rounded-b-md'>
                    <div className='grid gap-4 text-gray-500'>
                        <p>Drag & Drop Builder</p>
                        <p>1,000's of Templates</p>
                        <p>Blog Support Tools</p>
                        <p>eCommerce Store</p>
                    </div>
                    <div>
                        <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-3 px-8 rounded-full font-bold'>start free trail</Button>
                    </div>
                </div>
            </div>
            <div className=' w-[300px]  shadow-lg'>
                <div className='bg-gray-200 py-8 grid gap-6 rounded-t-md'>
                   <div>
                        <p>
                          <span className='text-5xl font-bold'>$99</span>
                          <span className='text-gray-500'>/month</span>
                        </p>
                   </div>
                   <div className='grid gap-3'>
                        <h3 className='font-bold text-xl capitalize'>Pro Master</h3>
                        <p className='text-gray-500 capitalize font-bold'>For best opportunities</p>
                   </div>
                </div>
                <div className='bg-white py-8 grid gap-6 rounded-b-md'>
                    <div className='grid gap-4 text-gray-500'>
                        <p>Drag & Drop Builder</p>
                        <p>1,000's of Templates</p>
                        <p>Blog Support Tools</p>
                        <p>eCommerce Store</p>
                    </div>
                    <div>
                        <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-3 px-8 rounded-full font-bold'>start free trail</Button>
                    </div>
                    <div>
                        <a className='text-[#008cff] hover:text-[#0000FF] hover:underline font-bold' href="#">Or start 14 days trail</a>
                    </div>
                </div>
            </div>    
      </div>
    </div>
    <hr className='border border-gray-200'/>
    </div>
  )
}
