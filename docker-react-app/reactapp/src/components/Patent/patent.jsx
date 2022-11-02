// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './patent.css';
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";
// import dayjs from 'dayjs';


export const Patent=()=>{
    const [val, setVal] = React.useState('patent');
    // const handleChange = e => setVal(e.target.value);
    const classToggle = () => {
        setVal(!val)
    }
    const [post, setPosts] = useState([]);
    useEffect(() => {
      //データ取得
      const postData = collection(db, "patent")
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
            <h1>Patent</h1>
            <h2>論文紹介</h2>
          </div>
  
          <div className='news'>
              <hr width="80%"></hr>
              <div className='news_aria news_text' id="patent_title">
                <h1>Patent</h1>
                <p>論文紹介</p>
              </div>
              
              <div className='radiobutton news_aria' id="jp_patent">
                <label for="radio1">
                  <input id="radio1"  name="hoge" type="radio" value="news" defaultChecked 
                  onChange={classToggle}/>
                  国内特許
                </label>
              </div>
              <div className='radiobutton news_aria' id="wd_patent">
                <label for="radio2">
                  <input id="radio2"  name="hoge" type="radio" value="topics"
                  onChange={classToggle}/>
                  海外特許
                </label>
              </div>
              
              {/* ニュースとトピックはボタンにて制御 */}
              {/* データベースより取得、news_textcontentsを生成 */}
              <div className={val ? "news_topics_aria" : "hidden"}>
                 {/* 更新するエリア */}
                 {post.map((patent)=>(
                <div className='news_textcontents' id="textcontents">
                  <p>{patent.text}</p>
                  <hr width="60%"></hr>
                </div>
                ))}
              </div>
                {/* 更新するエリア */}

              <div className={val ? "hidden" : "news_topics_aria"}>
                <div className='news_textcontents'>
                  <p>これは海外特許の時に出現します。</p>
                  <hr width="60%"></hr>
                </div>
              </div>
            </div>
  
        </div>
      </main>
    );
  };