import { NavLink } from 'react-router-dom'
import './styles.css'
import { findAllCategories } from '../../data/data'

const ProductCard = () => {
    const categories = findAllCategories()
  return (
    <div className="container">
        <div className="product-card">
            {categories && categories.map((category)=>(
                <NavLink to={`/products/${category.route}`} className={({isActive}) => isActive ? "strong-color" : "normal-color"} key={category.id}>{category.name}</NavLink>
            ))}
        </div>
    </div>
  )
}

export default ProductCard