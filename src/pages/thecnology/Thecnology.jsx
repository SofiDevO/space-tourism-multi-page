import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
const Thecnology = () => {
  const { technologyId } = useParams();
  const technoliesdata =
    data.technology.find((dest) => dest.name.toLowerCase() === technologyId) ||
    data.technology[0];
  return (
    <>
      <div className="thecnologies__container">
        <div className="left__section">
          <nav className="thecnologies__btn">
            <ul>
              {data.technology.map((thech, i) => (
                <li className="thecnolgies__btn-single" key={i}>
                  <NavLink
                    className="thecnolgies__link"
                    to={`/technologies/${thech.name.toLowerCase()}`}
                  >
                    {(i + 1).toString()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="thecnologies__texts" key={technoliesdata.name}>
            <h3>{technoliesdata.name}</h3>
            <h2>{technoliesdata.name}</h2>
            <p>{technoliesdata.description}</p>
          </div>
        </div>
        <img src={technoliesdata.images.portrait} alt="Hola" />
      </div>
    </>
  );
};

export default Thecnology;
