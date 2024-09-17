import React from 'react'

export default function Section_9() {
  return (
    <div className='container mx-auto'>
        <div className='my-12 flex justify-center items-center flex-col-reverse gap-16 md:grid md:grid-cols-2'>
            <div className='flex flex-col items-center gap-6 md:gap-12'>
                <div className='text-center grid gap-4'>
                    <h1 className='text-4xl font-bold capitalize'>Download your App now</h1>
                    <p className='text-gray-500'>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                </div>
                <div>
                    <img src="img/section-9/google-app.png" alt="img" />
                </div>
            </div>
            <div>
                <img src="img/section-9/bannar.png" alt="bannar" />
            </div>
        </div>
    </div>
  )
}
