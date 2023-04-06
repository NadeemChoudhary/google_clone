import Image from 'next/image'
import React from 'react'

export default function Avtar({url}) {
  return (
    <>
    <Image loading='lazy' src={url} alt='profile' width={35} className='rounded-full cursor-pointer hover:animate-spin transition'/>
    </>
  )
}
