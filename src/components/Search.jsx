import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouse } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'


const Search = ({ jobs, setFilterJobs }) => {
  const [search, setSearch] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')


  const handleChange = (query, searchType) => {
    let arrayJobs = [...jobs]

    if (searchType == 'jobs') {
      setSearch(query);
      arrayJobs = arrayJobs.filter((result) => {
        const title = result.title.toLowerCase().replace(/\s/g, '').replace('-', '');
        const userInput = query.toLowerCase().replace(/\s/g, '').replace('-', '');
        return title.includes(userInput)
      }
      );
    }


    if (searchType == 'company') {
      setCompany(query);
      arrayJobs = arrayJobs.filter((result) => {
        const company = result.company.toLowerCase().replace(/\s/g, '').replace('-', '');
        const userInput = query.toLowerCase().replace(/\s/g, '').replace('-', '');
        return company.includes(userInput)
      }
      );
    }



    if (searchType == 'location') {
      setLocation(query);
      arrayJobs = arrayJobs.filter((result) => {
        const location = result.location.toLowerCase().replace(/\s/g, '').replace('-', '');
        const userInput = query.toLowerCase().replace(/\s/g, '').replace('-', '');
        return location.includes(userInput)
      }
      );
    }
    setFilterJobs(arrayJobs);
    console.log(arrayJobs);
  }


  function clearInput(e, deleteType) {
    if (deleteType == 'jobs') {
      setSearch('')
      handleChange('', 'jobs')
    }

    if (deleteType == 'company') {
      setCompany('')
      handleChange('', 'company')
    }

    if (deleteType == 'location') {
      setLocation('')
      handleChange('', 'location')
    }    
  }



  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] 
        gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[400px]'
              placeholder='Search Job'
              value={search}
              onChange={(e) => handleChange(e.target.value, 'jobs')}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
            hover:text-textColor icon'
              onClick={(e) => clearInput(e, 'jobs')}
            />
          </div>

          <div className='flex gap-2 items-center'>
            <BsHouse className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[400px]'
              placeholder='Search by company'
              value={company}
              onChange={(e) => handleChange(e.target.value, 'company')}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
            hover:text-textColor icon'
              onClick={(e) => clearInput(e, 'company')}
            />
          </div>

          <div className='flex gap-2 items-center'>
            <CiLocationOn className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[400px]'
              placeholder='Search by location'
              value={location}
              onChange={(e) => handleChange(e.target.value, 'location')}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
            hover:text-textColor icon'
              onClick={(e) => clearInput(e, 'location')}
            />
          </div>
        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center'>


        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='Relevance' className='text-[#808080] font-semibold'>Sort by:</label>

          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
            <option value="">Inclusive</option>
          </select>

        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='Type' className='text-[#808080] font-semibold'>Type:</label>

          <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Entry-Level</option>
            <option value="">Remote</option>
            <option value="">All</option>
          </select>

        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='level' className='text-[#808080] font-semibold'>Salary</label>

          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Below 45,000</option>
            <option value="">Below 85,000</option>
            <option value="">Below 120,00</option>
            <option value="">Far too much</option>
            <option value="">All</option>
          </select>

        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

      </div>

    </div>
  )
}

export default Search