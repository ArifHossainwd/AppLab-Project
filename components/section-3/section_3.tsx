import React from 'react'
import { Button } from '../ui/button'

export default function Section_3() {
  return (
   <div>
         <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center gap-7 my-20 md:grid md:grid-cols-2'>
              <div>
                  <img className='w-[500px]' src="img/section-3/design and build.png" alt="" />
                </div>
                <div className='grid gap-5'>
                  <h1 className='text-3xl font-bold'>Designed and build by latest code integration</h1>
                  <p className='text-gray-500 capitalize'>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                <div>
                    <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-3 px-5 rounded-full font-bold'>learn more</Button>
                </div>
                </div>
          </div>
          
        </div>
        <hr className='border border-gray-200 mb-8'/>
   </div>
  )
}
