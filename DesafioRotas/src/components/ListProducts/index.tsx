import { useParams } from 'react-router-dom'
import ProductRender from '../ProductRender'
import './styles.css'
import { findByCategory } from '../../data/data'
const ListProducts = () => {

    const params = useParams()
    const products = findByCategory(String(params.categoryName))
    return (
        <div className="container">
            <div className="list-products">
                {products && products.map(item => (
                    <ProductRender text={item.name} key={item.id}></ProductRender>
                ))}
            </div>
        </div>
    )
}

export default ListProducts