
import './App.css'
import Footer from './Components/Footer'
import JobDash from './Components/JobDash'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Values from './Components/Values'



function App() {

  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <JobDash />
      <Values />
      <Footer />
    </div>
  )
}

export default App
