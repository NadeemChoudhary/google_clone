"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import Modal from './Modal'
import Avtar from './Avtar'
import profile from '../../public/profile.png'
export default function Header() {
    const [Toggle, setToggle] = useState(false)
    return (
        <>
            <div className='flex justify-end p-5 space-x-5 items-center'>
                <Link href={'https://mail.google.com/'} className='hover:underline font-medium'>Gmail</Link>
                <Link href={'https://www.google.co.in/'} className='hover:underline font-medium'>Images</Link>
                <CgMenuGridO className='text-4xl bg-transparent hover:bg-slate-200 rounded-full p-2 ' onClick={() => setToggle(!Toggle)} />
                <Avtar url={profile}/>
                {/* <button className='bg-blue-600  text-white rounded-md py-1 px-3 hover:brightness-105'>Sign in</button> */}
            </div>
            {Toggle && <Modal />}
        </>
    )
}
