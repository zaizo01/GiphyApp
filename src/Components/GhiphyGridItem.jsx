import React from 'react'

export const Ghiphygriditem = ({ title, url}) => {
   
    return (
        <div className="pl-3 pt-10">
            <div className="max-w-sm bg-whitle shadow-2xl rounded-lg mb-4 animate__animated animate__backInDown">
                <img src={ url } alt={ title } className="h-56 w-full rounded-lg"/>
            </div>
        </div>
    )
}
