import React from 'react'

export default function SearchOption({ Icon, title , selected}) {
  
    return (
        <>
            <div className={`flex items-center  pb-1  justify-center font-medium cursor-pointer ${selected && 'border-b-4 border-blue-500'} border-transparent hover:border-b-4 hover:border-blue-500 transition `}>
                <Icon className='ml-2'/>
                <span className='lg:text-xs ml-1'>{title}</span>
            </div>
        </>
    )
}
 