import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import NavSatelites from '../../components/NavSatelites.jsx/Navsatelites';
const Satelites = ()=>{
    const {sateliteId} = useParams();
    const destination = data.destinations.find(dest => dest.name.toLowerCase() === sateliteId) || data.destinations[0];
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