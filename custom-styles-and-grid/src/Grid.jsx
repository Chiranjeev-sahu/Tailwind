import React from 'react'
import { Button } from './Button'
// const children=<div className="bg-gray-300 h-[32px] w-[32px]"></div>
export const Grid = ({ children }) => {
    return (
        <div className="relative mt-0.5 w-full h-full align ">
            <div className='flex justify-evenly bg-zinc-800 '>
                {children}
            </div>
        </div>
    )
}
