// import {Link, BrowserRouter} from "react-router-dom";
import './home.css';
import home_image from "./img/my_photo.jpg";
export const Home=()=>{
  return (
    <>
      <main>
        {/* アニメーションは後で付与 */}
        <div className='home_animation_aria'>
          <h1>A Livable Society For All</h1>
          <h2>誰もが生きやすい社会を</h2>
        </div>
        {/* メインはスクロール処理で表示、非表示 */}
        <div className='main'>
          <div className='profile_aria'>
          <div className='profile_img'>
            <img src={home_image} alt="" />
          </div>
            <div className='profile_textcontents'>
              <h1>Hajime Kawanami</h1>
              <h2>川波 肇</h2>
              <p>国立研究開発法人産業技術総合研究所</p>
              <p>触媒化学融合研究センター</p>
              <p>官能基変換チーム 上級主任研究員</p>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};