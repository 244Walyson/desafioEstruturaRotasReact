import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomeBody from './routes/HomeBody'
import Products from './routes/Products'
import AboutUs from './routes/AboutUs'
import NotFound from './routes/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          <Route index element={<Navigate to={"/home"}></Navigate>}></Route>
            <Route path='/home' element={<HomeBody></HomeBody>}></Route>
            <Route path='/products' element={<Products></Products>}>
              <Route path='/products:categoryName'></Route>
            </Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
