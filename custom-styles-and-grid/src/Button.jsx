import React from 'react'

export const Button = ({ icon1 = "?", icon2 = "", width = 4, height = 4, bottomBorder = false }) => {
    const style = {
        width: width ? `${width}rem` : undefined,
        height: height ? `${height}rem` : undefined,
        // border- bottom

    };
    return (
        <button className={`flex justify-center items-center text-white ${bottomBorder ? 'border-b-4' : 'border'} border-white/50 bg-black hover:shadow-gray-400 rounded-xl shadow-[1px_9px_24px_0px_#CFCFCF] hover:scale-98 transition-transform duration-200 ease-in m-[1px] mb-[2px]`} style={style}>
            {icon2 ? (
                <div className='flex flex-col h-10 justify-items-center'>
                    <div>{icon1}</div>
                    <div>{icon2}</div>
                </div>
            ) : (
                icon1
            )}
        </button>

    )
}
