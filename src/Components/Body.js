import Image from 'next/image'
import React from 'react'
import {IoMdAdd} from 'react-icons/io'
import google from '../../public/google.jpg'
import Facebook from '../../public/Facebook.png'
import WhatsApp from '../../public/WhatsApp.png'
import youtube from '../../public/youtube.png'
import Input from './Input'
import Modal from './Modal'
import Link from 'next/link'
export default function Body() {
    return (
        <>
        
            <div className='flex items-center justify-center mt-24 cursor-pointer'>
                <Image src={google} className='google' layout="fill" alt='google Image' />
            </div>
            <div className='cursor-pointer'>
                <Input />
            </div>
            <div className='flex  items-center justify-around max-w-[60%] lg:max-w-[30%] mx-auto mt-9'>
                <Link href={'https://www.facebook.com/'}><Image src={Facebook} width={50} height={30} alt='fb' className='bg-slate-200 p-2 border border-transparent shadow-md hover:shadow-md rounded-full ' /></Link>
                <Link href={'https://web.whatsapp.com/'}><Image src={WhatsApp} width={50} height={50} alt='fb' className='bg-slate-200  p-2 border border-transparent hover:shadow-md rounded-full ' /></Link>
                <Link href={'https://youtube.com/'} ><Image src={youtube} width={50} height={45} alt='fb' className='bg-slate-200 p-2 border border-transparent hover:shadow-md rounded-full ' /></Link>
                <IoMdAdd className='text-5xl bg-slate-200 p-2 lg:p-3 border border-transparent hover:shadow-md rounded-full '/>
            </div>
        </>
    )
}
