import Link from 'next/link'
import React from 'react'

export default function FutterSection() {
  return (
    <div className='bg-[#09142E]'>
      <div className='container mx-auto grid gap-10 py-12 text-center'>
            <div className='grid gap-6 place-content-center'>
                <div className='grid place-content-center'>
                    <img className='w-32' src="img/futter-section/logo.png" alt="" />
                </div>
                <div>
                    <ul className='capitalize gap-6 flex justify-cente text-white '>
                        <li className='hover:text-gray-500'><Link href="/">Home</Link></li>
                        <li className='hover:text-gray-500'><Link href="/key-features">key features</Link></li>
                        <li className='hover:text-gray-500'><Link href="/priciing">priciing</Link></li>
                        <li className='hover:text-gray-500'><Link href="/testiminial">testiminial</Link></li>
                        <li className='hover:text-gray-500'><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>
            <div className='grid gap-6'>
                <div  className='grid place-content-center'>
                    <img src="img/futter-section/medias.png" alt="" />
                </div>
                <div>
                    <p className='text-gray-500'>Copyright© Arif Hossain 2024. All right reserved</p>
                </div>
            </div>
      </div>
    </div>
  )
}
