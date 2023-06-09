import React from 'react'
import Dummy from './data.json'
import { useRouter } from 'next/navigation'
export default function SearchResult({ data }) {
    const router = useRouter();
    console.log(data , 'final data')
    return (
        <>
            <div className='pl-[17%]'>
                <div className=' text-[12px] mt-2 mb-2 text-gray-500'>
                    <span>About {data?.searchInformation?.formattedTotalResults} result {(data?.searchInformation?.formattedSearchTime)} seconds </span>
                </div>
                <div>
                    {
                        data?.items?.map((val) => (
                            // <div></div>

                            <>
                                <div className='mb-4 max-w-5xl'>

                                    <div className='text-[13px] '>{val.formattedUrl}</div>
                                    <div className='text-blue-700 font-semibold hover:underline cursor-pointer'
                                    onClick={()=> router.push(val.formattedUrl)}>
                                        {val.title}
                                    </div>
                                    <div className='text-[15px] text-gray-800'>
                                        {val.snippet}
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
