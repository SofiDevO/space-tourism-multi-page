import data from '../../data/data.json';
import { NavLink as Link }  from "react-router-dom";
const NavSatelites = () => {
    return(
        <>
         <nav className="destination__menu">
                <ul className="destination__list">
                    {data.destinations.map((dest)=>(
                    <li key={dest.name.toLowerCase()}>
                        <Link className="under-line"  to={`/destination/${dest.name.toLowerCase()}`}>
                            {dest.name.toUpperCase()}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavSatelites;