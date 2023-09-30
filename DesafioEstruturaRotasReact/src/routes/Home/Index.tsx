import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Index'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
    </>
  )
}

export default Home