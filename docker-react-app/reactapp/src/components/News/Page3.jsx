import './news.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { collection, doc, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";
import dayjs from 'dayjs';

import apple_img from "./img/apple1.jpeg";
import robot_img from "./img/robot.jpeg";



export const Page3=()=>{

  const [val, setVal] = React.useState('news');
  // const handleChange = e => setVal(e.target.value);
  const classToggle = () => {
      setVal(!val)
  }

  const [news_post, setNewsposts] = useState([]);
  const [topic_post, setTopicsposts] = useState([]);

  useEffect(() => {
    //データ取得
    const news_postData = collection(db, "news")
        getDocs(news_postData).then((snapShot) => {
        setNewsposts(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
      onSnapshot(news_postData, (news_post) => {
      setNewsposts(news_post.doc.map((doc) => ({...doc.data() })));
      });
      // console.log(news_postData)
    
    const topic_postData = collection(db, "topic")
      getDocs(topic_postData).then((snapShot) => {
        setTopicsposts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
    onSnapshot(topic_postData, (topic_post) => {
    setTopicsposts(topic_post.doc.map((doc) => ({...doc.data() })));
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
               {news_post.map((news)=>(
              <div className='news_textcontainer'>
              <a href='/news'>
                <div className='news_meta'>
                  <p>{news.editer} : {dayjs(news.timestamp).format('YYYY/MM/DD HH:mm')}</p>
                  <p></p>
                </div>
                
                <p>{news.text}</p>
                  <ul className='newsimg_aria'>
                    <li><img src={apple_img}/></li>
                    <li><img src={robot_img}/></li>
                    <li><img src={apple_img}/></li>
                    <li><img src={apple_img}/></li>
                  </ul>
                <hr width="75%"></hr>
                </a>
              </div>
              ))}
               {/* 更新するエリア */}
              
            </div>
            {topic_post.map((topic)=>(
            <div className={val ? "hidden" : "news_topics_aria"}>
              <div className='news_textcontainer'>
                  <a href='/news'>
                <div className='news_meta'>
                  <p>{topic.editer} : {dayjs(topic.timestamp).format('YYYY/MM/DD HH:mm')}</p>
                  <p></p>
                </div>
                <p>{topic.text}</p>
                  <ul className='newsimg_aria'>
                    <li><img src={apple_img}/></li>
                    <li><img src={robot_img}/></li>
                    <li><img src={apple_img}/></li>
                    <li><img src={apple_img}/></li>
                  </ul>
                <hr width="75%"></hr>
                </a>
              </div>
            </div>

            
            ))}

          </div>
        



      </div>
    </main>
  );
};