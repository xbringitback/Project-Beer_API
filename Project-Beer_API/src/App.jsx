import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Overview from './pages/Overview';
import Detail from './pages/Detail';
import Random from './pages/Random';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Overview' element={<Overview />} />
          <Route path='/Detail/:beerId' element={<Detail />} />
          <Route path='/Random' element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
