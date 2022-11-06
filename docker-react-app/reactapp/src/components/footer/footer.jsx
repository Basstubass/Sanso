import footer_image from "./img/aist_icon2.png";
import './footer.css';
export const Footer=()=>{
    return (
      <>
      <footer>
        <div className='footer'>
        <hr width="80%"></hr>
          <a href="/">
            <img src={footer_image} alt="Logo"></img>
          </a>
          <p>Hajime Kawanami's Homepage e-mail:h-kawanami(@)aist.go.jp</p>
        </div>
      </footer>
        
      </>
      
    );
  };