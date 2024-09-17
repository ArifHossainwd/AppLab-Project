import React from 'react'

export default function Section_2() {

    const section_2_topic = [
        {
            ImgSrc : 'img/section-2/autometic payouts.png',
            text1 : 'Autometic Payouts',
            text2 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
        },
        {
            ImgSrc : 'img/section-2/network effect.png',
            text1 : 'Network Effect',
            text2 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
        },
        {
            ImgSrc : 'img/section-2/bigger rewards methods.png',
            text1 : 'Bigger Rewards Methods',
            text2 : 'Get your blood tests delivered at home collect a sample from the news your blood test',
        },
    ]

  return (
    <div className='container mx-auto my-20'>
        <div>
            <div className='flex justify-center items-center gap-5'>
                <div  className='w-[380px]'>
                    <h2 className='text-3xl font-bold capitalize'>Smart ideas that you may love these anytime & anywhere</h2>
                </div>
                <div>
                    <hr className='border border-black h-52'/>
               </div>
                <div  className='w-[380px]'>
                    <h3>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</h3>
                </div>
            </div>
            <div className=' grid grid-cols-1 gap-10 place-content-center md:grid md:grid-cols-3 mt-16'>
                {section_2_topic.map(({ImgSrc, text1, text2},i)=>(
                    <div className='grid gap-2'>
                        <img src={ImgSrc} alt="img" />  
                        <h2 className='text-2xl font-bold'>{text1}</h2>
                        <p>{text2}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
