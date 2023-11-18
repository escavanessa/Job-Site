import React from 'react'



const JobDash = ({ jobs }) => {

  return (
    <div>
      <div className='grid grid-cols-3 gap-1'>
        <div className="jobContainer col-span-2 flex gap-10 justify-center flex-wrap items-center py-10">



          {
            jobs.map(({ id, name, city, description, company, logo, }) => {
              const parsedHtml = { __html: description }
              return (
                <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg overflow-hidden h-[350px] relative'>

                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{name}</h1>
                    <span className='flex items-center text-[#ccc] gap-1 w-8 h-8'>
                      <img src={logo} />
                    </span>
                  </span>
                  <h6 className='text-[#ccc]'>{city}</h6>
                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group:hover:text-white max-h-[100px] overflow-hidden'>
                    <div dangerouslySetInnerHTML={parsedHtml}></div>
                  </p>

                  <div className='company flex items-center gap-2'>
                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                  </div>

                  <button className='border-[2px] rounded-[10px] block p-[10px] text-[14px]
          font-semibold text-textColor hover:bg-white group-hover/item:text-textColor
          group-hover:text-textColor absolute bottom-0 left-0 mb-2 ml-2 mr-2'>
                    Apply now</button>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default JobDash