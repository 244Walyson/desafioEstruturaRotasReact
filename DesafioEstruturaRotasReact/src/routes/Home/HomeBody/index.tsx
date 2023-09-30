import { Link } from "react-router-dom"
import "./styles.css"
const HomeBody = () => {
  return (
    <main>
        <Link to={"/promotions"}><button>Ver Promoções</button></Link>
    </main>
  )
}

export default HomeBody