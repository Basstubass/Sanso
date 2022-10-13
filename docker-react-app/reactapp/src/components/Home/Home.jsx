// import {Link, BrowserRouter} from "react-router-dom";
import './home.css';
import home_image from "./img/my_photo.jpg";
import Pasted_img from "./img/Pasted Graphic.jpg";

export const Home=()=>{
  return (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"></link>
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
            <div className='scrolldown4'><span>Scroll</span></div>
              <div id="container">
            </div> 
            {/* スクロールアニメーション */}
          </div>
          {/* アニメーションは後で付与 */}
          <div className='news'>
            <hr width="80%"></hr>
            <div className='news_aria news_text'>
              <h1>News</h1>
              <p>お知らせ</p>
            </div>
            <div className='radiobutton news_aria'>
              <input id="radio1"  name="hoge" type="radio" value="ラジオボタン1"/>
              <label for="radio1">News</label>
            </div>
            <div className='radiobutton news_aria'>
              <input id="radio1"  name="hoge" type="radio" value="ラジオボタン1"/>
              <label for="radio1">Topics</label>
            </div>
            
            {/* ニュースとトピックはボタンにて制御 */}
            {/* データベースより取得、news_textcontentsを生成 */}
            <div className='news_topics_aria'>
              <div className='news_textcontents'>
                <p>2001/01/30</p>
                <p>whats news enable hello world hello world</p>
                <hr width="60%"></hr>
              </div>
              <div className='news_textcontents'>
                <p>2001/01/30</p>
                <p>whats news enable hello world hello world</p>
                <hr width="60%"></hr>
              </div>
              <div className='news_textcontents'>
                <p>2001/01/30</p>
                <p>whats news enable hello world hello world</p>
                <hr width="60%"></hr>
              </div> 
            </div>
            <div className='more_aria'>
              <a href='/news'>
                <button className='aria_button'>more</button>
                <i className='fas fa-angle-right aria_button'></i>
              </a>
            </div>
          </div>

          {/* リストエリア */}
          <div className='list_aria'>
            <hr width="80%"></hr>
            <div className='list_img'>
              <div className='Projects_img_aria img_aria'>
                <img src={Pasted_img} alt="sience_img"/>
                <h1>List of Projects</h1>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
              <div className='Member_img_aria img_aria'>
                <img src={Pasted_img} alt="sience_img"/>
                <h1>List of Member</h1>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
            </div>
          </div>

          {/* もう少し変えたい */}
          <div className='other_aria'>
          <hr width="80%"></hr>
            <div className='other_contents'>
              <div className='other_text_contents'>
                <h1>Other</h1>
                <p>その他</p>
                <ul className='other_text'>
                <a href='/'>
                  <li>Dissertation</li>
                  <i className='fas fa-angle-right'></i>
                </a>
                <a href='/'>
                  <li>Books</li>
                  <i className='fas fa-angle-right'></i>
                </a>
                </ul>
                <ul className='other_text'>
                  <a href='/'>
                    <li>patent</li>
                    <i className='fas fa-angle-right'></i>
                  </a>
                  <a href='/'>
                    <li>Information</li>
                    <i className='fas fa-angle-right'></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
    
  );
};