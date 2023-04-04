import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
export default function Header() {
    return (
        <>
            <div className='flex justify-end p-5 space-x-5 items-center'>
                <Link href={'https://mail.google.com/'} className='hover:underline font-medium'>Gmail</Link>
                <Link href={'https://www.google.co.in/'} className='hover:underline font-medium'>Images</Link>
                <CgMenuGridO className='text-4xl bg-transparent hover:bg-slate-200 rounded-full p-2   '/>
                <button className='bg-blue-600  text-white rounded-md py-1 px-3 hover:brightness-105'>Sign in</button>
            </div>
        </>
    )
}
