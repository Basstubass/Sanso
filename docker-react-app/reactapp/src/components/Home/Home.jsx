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
            <div className='profile_textcontents profile'>
              <h1> Hajime Kawanami</h1>
              <h2> 川波 肇</h2>
              <p> ー 国立研究開発法人産業技術総合研究所</p>
              <p> ー 触媒化学融合研究センター</p>
              <p> ー 官能基変換チーム 上級主任研究員</p>
            </div>

            <div className='profile_img profile'>
              <img src={home_image} alt="" />
            </div>

            {/* スクロールアニメーション */}
            <div class="scrolldown4"><span>Scroll</span></div>
            <div id="container">
            <p>このエリアがスクロールすると上にかぶさります</p> 
            </div> 
            {/* スクロールアニメーション */}




          </div>
        </div>
      </main>
    </>
    
  );
};