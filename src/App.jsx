
import './App.css'
import JobContainer from './components/JobDash'
import Info from './components/JobDesc'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'


function App() {

  return (
    <>
      <NavBar />
      <div className='container'>
        <SideBar />
        <JobContainer />
        <Info />
      </div>
    </>
  )
}

export default App
