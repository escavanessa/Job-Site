
import { useEffect, useState } from 'react'
import getJobs from './API/GetJobs'
import './App.css'
import Footer from './Components/Footer'
import JobDash from './Components/JobDash'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Values from './Components/Values'
import Aside from './Components/aside'



function App() {
  const [jobs, setJobs] = useState([])
  const [filterJobs, setFilterJobs] = useState([])

useEffect(() => {
  getJobs().then((response) => {
    setJobs(response.jobs.job)
    setFilterJobs(response.jobs.job)
    console.log(response)
  }) .catch(
    (error) => {console.log(error)}
  )

}, []);

  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search jobs={jobs} setJobs={setJobs} filterJobs={filterJobs} setFilterJobs={setFilterJobs}/>
      <JobDash jobs={filterJobs}/>
      <Values />
      <Footer />
    </div>
  )
}

export default App
