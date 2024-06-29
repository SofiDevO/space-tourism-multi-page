import { MainHeader } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";


const Destination = () => {
  return (
    <section className="destination">
      <MainHeader />
      <div className="destination__container">
        <h1>PICK YOUR DESTINATION</h1>
        <Outlet />
      </div>
    </section>
  );
};

export default Destination;
