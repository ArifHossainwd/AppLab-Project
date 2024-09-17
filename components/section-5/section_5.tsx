import React from 'react'
import { Button } from '../ui/button'

export default function Section_5() {


    const UltimateTopic = [
        {
          imgSrc : 'img/section-5/app development.png',
          text : 'App Development',
          text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
        },
        {
            imgSrc : 'img/section-5/ux planning.png',
            text : 'UX Planning',
            text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
          },
          {
            imgSrc : 'img/section-5/cloud storage.png',
            text : 'Cloud Storage',
            text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
          },
          {
            imgSrc : 'img/section-5/customer support.png',
            text : 'Customer Support',
            text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
          },
      ]

  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center gap-6 flex-col-reverse my-20 lg:flex-row'>
            <div className='flex flex-col gap-8'>
              <div className=' flex flex-col gap-3 '>
                <h1 className='text-4xl font-bold capitalize '>Ultimate featues that we build</h1>
                <p>The rise of mobile devices transforms the way <br /> we consume information entirely</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-10 lg:grid lg:grid-cols-2'>
                {UltimateTopic.map(({imgSrc, text, text1}, i)=>(
                  <div className='grid gap-3' key={i}>
                        <div>
                          <img src={imgSrc} alt="img" />
                        </div>
                        <div className='grid gap-2'>
                          <h2 className='text-xl font-bold'>{text}</h2>
                          <p className='text-sm text-gray-500'>{text1}</p>
                        </div>
                  </div>
                ))}
              </div>
              <div className=''>
                <Button className='bg-[#0000FF] capitalize hover:bg-[#00008B] py-3 px-8 rounded-full font-bold'>See all</Button>
              </div>
            </div>
            <div>
              <img className='w-[500px]'  src="img/section-5/section-5-bg-right.png" alt="" />
            </div>
        </div>
    </div>
  )
}
