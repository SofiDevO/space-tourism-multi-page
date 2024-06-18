import { useParams, Navigate } from 'react-router-dom';
import data from '../../data/data.json';
import NavSatelites from '../../components/NavSatelites.jsx/Navsatelites';
const Satelites = ()=>{
    const {sateliteid} = useParams();
    const destination = data.destinations.find(dest => dest.name.toLowerCase() === sateliteid);

    console.log(destination);
    if(!destination){
        return <Navigate to="/destination/moon"/>
    }
    return (
        <>
            <div className="destination__satelite">
                <img src={destination.images.webp} alt={destination.name.toLowerCase()} />
                <div className="info__container">
                <NavSatelites/>
                    <h2>{destination.name.toUpperCase()}</h2>
                    <p>{destination.description}</p>
                    <div className='underline'></div>
                    <div className="destination__data">
                        <div className="data__container">
                        <p>AVG. DISTANCE</p>
                        <h3>{destination.distance}</h3>
                        </div>
                        <div className="data__container">
                        <p>Est. travel time</p>
                        <h3>{destination.travel}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Satelites;