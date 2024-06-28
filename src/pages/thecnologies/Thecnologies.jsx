import { NavLink } from "react-router-dom";
import { MainHeader } from "../../components/Header/Header";

const Thecnologies = () => {
  return (
    <section className="thecnologies">
      <MainHeader />
      <div className="technologies__principal">
        <h1>SPACE LAUNCH 101</h1>
        <div className="thecnologies__container">
          <nav className="thecnologies__btn">
            <ul>
              <li className="thecnolgies__btn-single">
                <NavLink className="thecnolgies__link" to="#1">
                  1
                </NavLink>
              </li>
              <li className="thecnolgies__btn-single">
                <NavLink className="thecnolgies__link" to="#2">
                  2
                </NavLink>
              </li>
              <li className="thecnolgies__btn-single">
                <NavLink className="thecnolgies__link" to="#3">
                  3
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="thecnologies__texts">
            <h3>THE TERMINOLOGY…</h3>
            <h2>LAUNCH VEHICLE</h2>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
          <img
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Thecnologies;
