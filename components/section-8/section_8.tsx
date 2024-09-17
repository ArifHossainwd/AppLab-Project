import Image from 'next/image'
import React from 'react'


export default function Section_8() {

    const FrequentlyTopic = [
        {
            text1 : 'App installation failed, how to update system information?',
            imgSrc :'img/section-8/plus.png',
        },
        {
            text1 : 'Website reponse taking time, how to improve?',
            imgSrc :'img/section-8/plus.png',
        },
        {
            text1 : 'New update fixed all bug and issues',
            imgSrc :'img/section-8/plus.png',
        },
        {
            text1 : 'How to contact with riders emergency?',
            imgSrc :'img/section-8/plus.png',
        },
    ]

  return (
    <div>
            <div className='container mx-auto'>
            <div className='flex flex-col justify-center gap-16 my-20'>
                    <div className='flex flex-col items-center gap-4 text-center'>
                        <h1 className='text-4xl font-bold capitalize'>Frequently asked questions</h1>
                        <p className='text-base text-gray-500 ' >The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                    </div>
                    <div className='grid gap-3'>
                        <div className='bg-[#E5F8EC] p-7 grid gap-5 rounded-md'>
                            <h2 className='text-xl font-bold capitalize'>How to contact with riders emergency?</h2>
                            <p className='text-gray-500'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className=' grid gap-3'>
                            {FrequentlyTopic.map(({text1, imgSrc},i)=>(
                                <div className='flex justify-between px-7 py-4 bg-[#E5F8EC] rounded-md' key={i}>
                                    <h3>{text1}</h3>
                                    <img className='w-5 h-5' src={imgSrc} alt="img" />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            </div>
            <hr className='border border-gray-300'/>
    </div>
  )
}
