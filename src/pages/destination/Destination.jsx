import { MainHeader } from "../../components/Header/Header";
import { Outlet  } from "react-router-dom";
import { NavLink as Link }  from "react-router-dom";
import data from '../../data/data.json'


const Destination = () => {

    return(
        <>
        <section className="destination">
        <MainHeader/>
       <div className="destination__container">
        <h1>PICK YOUR DESTINATION</h1>
          {/*   <nav className="destination__menu">
                <ul className="destination__list">
                    {data.destinations.map((dest)=>(
                    <li key={dest.name.toLowerCase()}>
                        <Link className="under-line"  to={dest.name.toLowerCase()}>
                            {dest.name.toUpperCase()}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav> */}
            <Outlet/>
        </div>

        </section>
        </>
    )
}

export default Destination;