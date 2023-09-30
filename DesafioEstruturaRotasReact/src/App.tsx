import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home/Index'
import HomeBody from './routes/Home/HomeBody'
import Promotion from './routes/Home/Promotion'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path='/promotions' element={<Promotion></Promotion>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
