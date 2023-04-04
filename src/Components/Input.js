"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsArrowRightShort, BsFillMicFill } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
export default function Input() {
    const router = useRouter();
    const [input, setinput] = useState("")
    const SubmitForm = (e) => {
        e.preventDefault();
        console.log(input)
        router.push(`search/web?search=${input}`)
    }

    return (
        <>
            <form onSubmit={SubmitForm} className='flex items-center mt-3 mx-auto max-w-[70%] lg:max-w-[50%] border border-gray-200 px-6 rounded-full py-2 hover:shadow-md transition-shadow focus-within:shadow-md' >
                <BiSearchAlt2 />
                <input type='text'
                    onChange={(e) => setinput(e.target.value)}
                    className='focus:outline-none flex-grow px-3 placeholder:font-medium' placeholder='Search Google or type a URL' />
                <div className='flex items-center space-x-2'><BsFillMicFill /> <BsArrowRightShort onClick={SubmitForm} className='text-2xl'/></div>
            </form>
        </>
    )
}
