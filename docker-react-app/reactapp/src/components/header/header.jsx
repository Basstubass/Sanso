import header_image from "./img/aist_icon2.png";
import './header.css';

export const Header=()=>{
    return (
      <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <header>
          <div className='header'>
            <a href="/">
              <img src={header_image} alt="Logo"></img>
            </a>
            <ul className="pc_ress">
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
                <a href="/Information"> Information</a>
              </li>
            </ul>


            {/* <ul className="phone_ress">
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
                <a href="/Information"> Information</a>
              </li>
            </ul> */}


          </div>
        </header>
      </>
      
    );
  };