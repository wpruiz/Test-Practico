import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'
import SearchList from './pages/SearchList'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ < Search />}></Route>
          <Route path='/items' element={ < SearchList />}></Route>
          <Route path='/items/:id' element={ <Detail />}></Route>
          <Route path="*" element= { < NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
