import { Link } from "react-router-dom";
import {MainHeader} from "../../components/Header/Header"

const Hero = ()=>{
    return (
        <>
        <section className="hero">
        <MainHeader/>
          <div className="hero__container">
            <div>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to="/destination" className="hero__img__container">
                    <h4>EXPLORE</h4>
                </Link>
          </div>
        </section>
        </>
    )
}

export default Hero;