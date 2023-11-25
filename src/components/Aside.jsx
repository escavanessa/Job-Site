
import React from 'react'

export const Aside = () => {
    return (
        <div className='col-span-1 flex py-10 ml-10'>
            <div className='descContainer shadow-lg shadow-greyIsh-400/700 hover:shadow-lg w-[600px] min-w-[500px] '>
                <h1>{jobs.description}</h1>
            </div>
        </div>
    )
}

export default Aside