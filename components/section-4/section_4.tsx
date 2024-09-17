import React from 'react'

export default function Section_4() {

  const WhyTopic = [
    {
      imgSrc : 'img/section-4/app development.png',
      text : 'App Development',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-4/10 times award.png',
      text : '10 Times Award',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-4/cloud storage.png',
      text : 'Cloud Storage',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-4/customization.png',
      text : 'Customization',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-4/ux planning.png',
      text : 'UX Planning',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
    {
      imgSrc : 'img/section-4/customer support.png',
      text : 'Customer Support',
      text1 : 'Get your blood tests delivered at home collect a sample from the news your blood tests',
    },
  ]

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='text-center w-[80%] grid gap-6 pb-16'>
                <h1 className='text-4xl font-bold capitalize'>Why you should choose our app</h1>
                <p className='text-gray-500 capitalize'>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
            <div className='grid gap-16 md:grid md:grid-cols-2 lg:grid-cols-3'>
              {WhyTopic.map(({imgSrc, text,text1}, i)=>(
                  <div className='flex flex-col justify-center items-center text-center gap-6' key={i}>
                      <div className=''>
                      <img src={imgSrc} alt="img" />
                      </div>
                      <div className='grid gap-2'>
                          <h2 className='text-xl font-bold'>{text}</h2>
                          <p className='text-sm text-gray-500'> {text1}</p>
                      </div>
                  </div>
              ))}
            </div>
        </div>
    </div>
  )
}
