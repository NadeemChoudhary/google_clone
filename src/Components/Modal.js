import Image from 'next/image'
import React from 'react'
import google from '../../public/g.jpg'
import map from '../../public/map.png'
import youtube from '../../public/youtube.png'
import news from '../../public/news.png'
import drive from '../../public/drive.png'
import meet from '../../public/meet.png'
import playstore from '../../public/playstore.png'
import contact from '../../public/contact.jpg';
import WhatsApp from '../../public/WhatsApp.png';

export default function Modal() {
    return (
        <>
            <div className='relative top-0 '>
                <div className='pb-5 bg-slate-100 absolute right-3 max-w-3xl w-72  hover:shadow-md boder border-transparent rounded-xl  ' >
                    <div className='flex justify-around py-5 px-3'>
                        <div className='flexs'>
                            <Image src={google} alt='google' className='icons' layout='fill' />
                            <div className='text-xs'>Google</div>
                        </div>
                        <div  className='flexs'>
                            <Image src={map} alt='map' className='icons' layout='fill' />
                            <div  className='text-xs'>Map</div>
                        </div>
                        <div  className='flexs'>
                            <Image src={meet} alt='meet' className='icons' layout='fill' />
                            <div  className='text-xs'>Meet</div>
                        </div>
                    </div>
                        <div className='flex justify-around pt-0 px-3'>
                            <div className='flexs'>
                                <Image src={youtube} alt='youtube' className='icons' layout='fill' />
                                <div className='text-xs'>Youtube</div>
                            </div>
                            <div  className='flexs'>
                                <Image src={playstore} alt='playstore' className='icons' layout='fill' />
                                <div  className='text-xs'>Playstore</div>
                            </div>
                            <div  className='flexs'>
                                <Image src={drive} alt='drive' className='icons' layout='fill' />
                                <div  className='text-xs'>Drive</div>
                            </div>
                        </div>
                        <div className='flex justify-around pt-6 px-3'>
                            <div className='flexs'>
                                <Image src={news} alt='news' className='icons' layout='fill' />
                                <div className='text-xs'>Mews</div>
                            </div>
                            <div  className='flexs'>
                                <Image src={contact} alt='contact' className='icons' layout='fill' />
                                <div  className='text-xs'>Contact</div>
                            </div>
                            <div  className='flexs'>
                                <Image src={WhatsApp} alt='WhatsApp' className='icons' layout='fill' />
                                <div  className='text-xs'>WhatsApp</div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
