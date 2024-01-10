import {BrowserRouter, Route, Routes} from 'react'
import { Home } from '../pages/Home';
import {Users} from '../pages/Users';
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App