import { CarWidget } from "../CarWidget/CarWidget"
import { NavLink, Link } from "react-router-dom"

 export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Palteados</h3>
            </Link>
            <div className="Categories">
                <NavLinK to={`/category/medias`}className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>medias</NavLinK>
                <NavLinK to={`/category/lenceria`}className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>lenceria</NavLinK>
                <NavLinK to={`/category/gorras`}className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLinK>
            </div>
            <CarWidget />
        </nav>
    )
}
