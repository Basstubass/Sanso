import './news.css';
import React, { useState } from 'react';


export const Page3=()=>{

  const [val, setVal] = React.useState('news');
  // const handleChange = e => setVal(e.target.value);
  const classToggle = () => {
      setVal(!val)
  }

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
              <label for="radio1">
                <input id="radio1"  name="hoge" type="radio" value="news" defaultChecked 
                onChange={classToggle}/>
                News
              </label>
            </div>
            <div className='radiobutton news_aria'>
              <label for="radio1">
                <input id="radio1"  name="hoge" type="radio" value="topics"
                onChange={classToggle}/>
                Topics
              </label>
            </div>
            
            {/* ニュースとトピックはボタンにて制御 */}
            {/* データベースより取得、news_textcontentsを生成 */}
            <div className={val ? "news_topics_aria" : "hidden"}>
               {/* 更新するエリア */}
              <div className='news_textcontents'>
              <a href='/news'>
                  <p>2001/01/30</p>
                  <p>whats news enable hello world hello world</p>
                  <hr width="60%"></hr>
                </a>
              </div>
               {/* 更新するエリア */}
              
            </div>
            
            <div className={val ? "hidden" : "news_topics_aria"}>
              <div className='news_textcontents'>
                <p>2001/01/30</p>
                <p>これはトピックの時に出現します。</p>
                <hr width="60%"></hr>
              </div>
            </div>
            
          </div>
        



      </div>
    </main>
  );
};