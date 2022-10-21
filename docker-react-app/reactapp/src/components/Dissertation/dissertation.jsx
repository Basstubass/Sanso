import './dissertation.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { collection, doc, getDocs, onSnapshot} from "firebase/firestore";
import db from "../../firebase";


export const Dissertation=()=>{


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
          <h1>Dissertation</h1>
          <h2>論文紹介</h2>
        </div>

        <div className='news'>
            <hr width="80%"></hr>
            <div className='news_aria news_text'>
              <h1>Dissertation</h1>
              <p>論文紹介</p>
            </div>
            
            {/* ニュースとトピックはボタンにて制御 */}
            {/* データベースより取得、news_textcontentsを生成 */}
            <div className="news_topics_aria">


               {/* 更新するエリア */}
               {post.map((value)=>(

              <div className='dissertation_textcontents'>
                <h1>{value.title} </h1>
                <p>{value.editer}</p>
                <p className='diss_main'>{value.text}</p>
                <hr width="70%"></hr>
              </div>
              ))}
               {/* 更新するエリア */}
               <div className='dissertation_textcontents'>
                <h1>Catalysis Science & Technology </h1>
                <p>Vol.11, No.14 pp.4661-5016, 2021</p>
                <p className='diss_main'>Maya Chatterjee, Abhijit Chatterjee, Mitsunori Kitta, Hajime Kawanami
                   Selectivity controlled transformation of carbon dioxide into a versatile bi-functional 
                   multi-carbon oxygenate using a physically mixed ruthenium-iridium catalyst</p>
                <hr width="70%"></hr>
              </div>
            </div>
          </div>
      </div>
    </main>
    );
  };