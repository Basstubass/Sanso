import './news.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { collection, doc, getDocs, onSnapshot} from "firebase/firestore";
import db from "../../firebase";


export const Page3=()=>{

  const [val, setVal] = React.useState('news');
  // const handleChange = e => setVal(e.target.value);
  const classToggle = () => {
      setVal(!val)
  }

  const [post, setPosts] = useState([]);
  useEffect(() => {
    //データ取得
    const postData = collection(db, "news")
        getDocs(postData).then((snapShot) => {
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });

      onSnapshot(postData, (post) => {
        setPosts(post.doc.map((doc) => ({...doc.data() })));
      });
    
  },[]);

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
               {post.map((news)=>(
              <div className='news_textcontents'>
              <a href='/news'>
                  <p>{news.editer}</p>
                  <p>{news.text}</p>
                  <hr width="60%"></hr>
                </a>
              </div>
              ))}
               {/* 更新するエリア */}
              
            </div>
            {post.map((news)=>(
            <div className={val ? "hidden" : "news_topics_aria"}>
              <div className='news_textcontents'>
                <p>{news.title}</p>
                <p>{news.text}</p>
                <hr width="60%"></hr>
              </div>
            </div>
            ))}

          </div>
        



      </div>
    </main>
  );
};