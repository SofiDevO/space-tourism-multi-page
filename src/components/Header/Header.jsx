import {useEffect} from "react";
import { NavLink }  from "react-router-dom";

const menuData = [
  {text:"00 HOME", menuLink: "/"  },
  {text:"01 DESTINATION", menuLink: "/destination"  },
  {text:"02 CREW", menuLink: "/crew"  },
  {text:"03 TECHNOLOGY", menuLink: "/technology"  }
]




export const MainHeader = () => {
    useEffect(() => {
            const escucharAlClick = (e)=>{
            const panel = document.querySelector(".panel");
            const hamburgerBtn = document.querySelector(".hamburger");
            if(e.target.matches(".hamburger") || e.target.matches(".hamburger *") ){
                panel.classList.toggle("is-active");
                hamburgerBtn.classList.toggle("is-active");
            }
            if(e.target.matches('.menu__link')){
                panel.classList.remove("is-active");
                hamburgerBtn.classList.remove("is-active");
            }
        }
        document.addEventListener("click", escucharAlClick );
        return()=>{
            document.removeEventListener("click", escucharAlClick );
        }
    },[]);
  return (
    <>
      <header className="header">

          <img src="/svg/star.svg" alt="Logo" />
        <div className="menu panel ">
            <div className="line"></div>
          <nav>
            <ul>
              {
                menuData.map((data) =>(
                  <li key={data.text}>
                    <NavLink className="under-line"  to={data.menuLink}>{data.text}
                    </NavLink></li>
                ))
              }
            </ul>
          </nav>
        </div>
          <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
    </>
  );
};
