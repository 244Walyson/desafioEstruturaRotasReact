import React from 'react'
import ProductCard from '../../components/ProductCard'
import ListProducts from '../../components/ListProducts'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <main>
        <ProductCard></ProductCard>
        <ListProducts></ListProducts>
        <Outlet></Outlet>
    </main>
  )
}

export default Products