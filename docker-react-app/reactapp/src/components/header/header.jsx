import header_image from "./img/aist_icon2.png";
import './header.css';

export const Header=()=>{
    return (
      <>
        <header>
          <div className='header'>
            <a href="/">
              <img src={header_image} alt="Logo"></img>
            </a>
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/project"> Projects </a>
              </li>
              <li>
                <a href="/members"> Members </a>
              </li>
              <li>
                <a href="/News"> News </a>
              </li>
              <li>
                <a href="/Other"> Other </a>
              </li>
            </ul>
          </div>
        </header>
      </>
      
    );
  };