
import { MainHeader } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Thecnologies = () => {
  return (
    <section className="thecnologies">
      <MainHeader />
      <div className="technologies__principal">
        <h1>SPACE LAUNCH 101</h1>
        <Outlet />
      </div>
    </section>
  );
};

export default Thecnologies;
