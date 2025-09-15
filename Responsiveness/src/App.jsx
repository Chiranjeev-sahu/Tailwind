import './App.css'
import { Navbar } from './Navbar'

function App() {

  return (
    <>
      {/* <div className='flex flex-col lull:flex-row items-center gap-10'>
        <div className='h-40 w-40 rounded-2xl bg-neutral-200'></div>
        <div className='h-40 w-40 rounded-2xl bg-red-200'></div>
        <div className='h-40 w-40 rounded-2xl bg-blue-200'></div>
      </div> */}
      <div className='h-screen bg-neutral-100 overflow-hidden'>
        <Navbar />
      </div>
    </>
  )
}

export default App
