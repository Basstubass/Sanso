import './news.css';
export const Page3=()=>{
  return (
    <main>
      <div className='main'>
        <div className='news_animation_aria'>
          <h1>News</h1>
          <h2>お知らせ</h2>
        </div>




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

               {/* 更新するエリア */}
              <div className='news_textcontents'>
                <p>2001/01/30</p>
                <p>whats news enable hello world hello world</p>
                <hr width="60%"></hr>
              </div>
               {/* 更新するエリア */}
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
        



      </div>
    </main>
  );
};