import {Link, BrowserRouter} from "react-router-dom";
import header_image from "./img/aist_icon2.png";
import './header.css';

export const Header=()=>{
    return (
      <>
        <header>
          <div className='header'>
            <img src={header_image} alt="Logo"></img>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/project"> Projects </Link>
              </li>
              <li>
                <Link to="/members"> Members </Link>
              </li>
              <li>
                <Link to="/News"> News </Link>
              </li>
              <li>
                <Link to="/Other"> Other </Link>
              </li>
            </ul>
            </BrowserRouter>

          </div>
        </header>
      </>
      
    );
  };