import { NavLink } from 'react-router-dom'
import './styles.css'
import { Link } from 'react-router-dom'
import homeImg from '../../assets/home-svgrepo-com 1.svg'
const Header = () => {
    return (
        <header className='main-menu'>
            <div className="container">
                <nav className='nav-menu'>
                    <div className="nav-links">
                        <NavLink to={"/home"} className={({isActive}) => isActive ? "active normal-text" : "normal-text"}>Início</NavLink>
                        <NavLink to={"/products"} className={({isActive}) => isActive ? "active normal-text" : "normal-text"}>Produtos</NavLink>
                        <NavLink to={"/about"} className={({isActive}) => isActive ? "active normal-text" : "normal-text"}>Sobre nós</NavLink>
                    </div>
                    <div className="home-link">
                        <Link to={'/'}><img src={homeImg} alt="" /></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header