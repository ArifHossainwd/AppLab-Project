import React from 'react'

export default function Section_1() {

  const AwesomeTopic = [
    {
      imgSrc : 'img/section-1/spd_1.png',
      text1 : 'fast performance',
      text2 : 'get your blood tests deliverred at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-1/proto.png',
      text1 : 'prototyping',
      text2 : 'get your blood tests deliverred at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-1/vctr_1.png',
      text1 : 'vector editing',
      text2 : 'get your blood tests deliverred at home collect a sample from the news your blood tests',
    },
  ]

  return (
    <div className='container mx-auto py-20'>
        <div className='flex flex-col gap-12 justify-between items-center'>
            <div>
                <h2 className='font-bold capitalize text-gray-500'>trusted by companies like</h2>
            </div>
            <div className='flex gap-10 flex-wrap justify-center items-center'>
              <img className='h-12 w-28' src="img/section-1/trusted_likes-(1).png" alt=""/>
              <img className='h-20 w-28' src="img/section-1/trusted_likes-(2).png" alt="" />
              <img className='h-12 w-28' src="img/section-1/trusted_likes-(3).png" alt="" />
              <img className='h-16 w-28' src="img/section-1/trusted_likes-(4).png" alt="" />
              <img className='h-12 w-28' src="img/section-1/trusted_likes-(5).png" alt="" />
            </div>
        </div>
        <div className='flex flex-col pt-20 justify-center items-center lg:grid lg:grid-cols-2'>
            <div>
                <img className='w-[500px]' src="img/section-1/mobile-left.png" alt="" />
            </div>
            <div className=' grid gap-12'>
                <div className=''>
                    <h1 className='text-4xl capitalize font-bold'>awesome apps features</h1>
                    <p className='text-gray-500'>get your blood tests deliverred at home collect a sample from the news your blood tests</p>
                </div>
                {AwesomeTopic.map(({imgSrc, text1, text2},i)=>(
                  <div className='flex justify-center items-center gap-4'>
                    <div>
                      <img src={imgSrc} alt="img" />
                    </div>
                    <div>
                      <h2>{text1}</h2>
                      <p>{text2}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}
