import React from 'react'

const Values = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold
      w-[400px] block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, fugiat.</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src='' alt='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opcaity-[1.7] py-[1rem] font-semibold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src='' alt='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Precision</span>
          </div>
          <p className='text-[13px] text-textColor opcaity-[1.7] py-[1rem] font-semibold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio.
          </p>
        </div>


        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src='' alt='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Honesty</span>
          </div>
          <p className='text-[13px] text-textColor opcaity-[1.7] py-[1rem] font-semibold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio.
          </p>
        </div>


      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem]
      rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to Switch careers?
          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>Lets get started!
          </h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
        font-semibold text-blueColor hover:bg-white border-blueColor'>
          Get started
        </button>

        
      </div>

    </div>
  )
}

export default Values