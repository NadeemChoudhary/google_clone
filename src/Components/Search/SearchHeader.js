"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import google from '../../../public/google.jpg'
import { BiSearchAlt2, BiImage, BiBookContent } from 'react-icons/bi'
import { BsArrowRightShort, BsFillMicFill, BsCameraVideo } from 'react-icons/bs'
import { AiOutlineSetting, } from 'react-icons/ai'
import { RiToolsFill } from 'react-icons/ri'
import { HiOutlineMap } from 'react-icons/hi'
import { CgLaptop, CgMenuGridO } from 'react-icons/cg'
import { RxCross2 } from 'react-icons/rx'
import { FiMoreVertical } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import profile from '../../../public/profile.png'
import Avtar from '../Avtar'
import SearchOption from './SearchOption'
import axios from 'axios'
import SearchResult from './SearchResult'
import Modal from '../Modal'

export default function SearchHeader({ param : {key} }) {
  const [Toggle, setToggle] = useState(false)
  const [Data, setData] = useState(null);

  const Ref = useRef(null);
  const router = useRouter();
  const HandleSearch = (e) => {
    e.preventDefault();
    const SearchRef = Ref.current.value;
    console.log(SearchRef)
    if (!SearchRef) return;
    router.push(`/search?key=${SearchRef}`)
  }
  console.log(router);
  console.log(key, "check")
  const FetchData = async () => {
    const {data} = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAJ_TRxLePr0fo7IPd1mTWyUggQZ-AQ5qk&cx=561f6a3ff44b4403e&q=${key}&start=1`);
  console.log(data?.items , 'oooo');
    if (data?.items) setData(data)

  }

  useEffect(() => {
    if(key !== undefined) FetchData();
  }, [key])


  return (
    <>
      <header className='p-6 flex items-center justify-between'>
        <div className=' flex items-center justify-between ' style={{ width: '60%' }}>
          <Image
            className=' cursor-pointer serachImage'
            src={google}
            alt='google'
            layout='fill'
            onClick={() => router.push('/')}
          />
          <form className='flex items-center  mx-auto    border border-gray-200 px-6 rounded-full py-2 hover:shadow-md transition-shadow focus-within:shadow-md' >
            <BiSearchAlt2 />
            <input type='text'
              ref={Ref}
              className='focus:outline-none flex-grow px-3 placeholder:font-medium w-96' placeholder='Search Google or type a URL' />
            <div className='flex items-center space-x-2'><BsFillMicFill /> <BsArrowRightShort className='text-2xl' /><RxCross2 className='cursor-pointer ' onClick={() => (Ref.current.value === " ")} /></div>
            <button type='submit' hidden onClick={HandleSearch}>
              ok
            </button>
          </form>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <AiOutlineSetting className='text-lg' />
          <CgMenuGridO className='text-5xl bg-transparent hover:bg-slate-200 rounded-full p-3 ' onClick={() => setToggle(!Toggle)} />
          <Avtar url={profile} />
        </div>
      </header>
      <div className='flex  border-b'>

        <div className='flex space-x-3 items-center justify-center pl-[16%]'>
          <SearchOption title="All" Icon={BiSearchAlt2} selected />
          <SearchOption title="Image" Icon={BiImage} />
          <SearchOption title="Video" Icon={BsCameraVideo} />
          <SearchOption title="Books" Icon={BiBookContent} />
          <SearchOption title="Map" Icon={HiOutlineMap} />
          <SearchOption title="More" Icon={FiMoreVertical} />
        </div>
        <div className='flex space-x-3 items-center relative left-80'>
          <SearchOption title="Tools" Icon={RiToolsFill} />
          <SearchOption title="Setting" Icon={AiOutlineSetting} />

        </div>
      </div>
      {Toggle && <Modal className='pl-[70%]' />}
      <div className=' '>
        <SearchResult data={Data} />
      </div>
    </>
  )
}
