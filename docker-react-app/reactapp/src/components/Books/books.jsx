import './books.css';
import {useState, useEffect} from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";



export const Books=()=>{

  const [post, setPosts] = useState([]);
  useEffect(() => {
    //データ取得
    const postData = collection(db, "books")
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
            <h1>Books</h1>
            <h2>著書紹介</h2>
          </div>
  
          <div className='news'>
              <hr width="80%"></hr>
              <div className='news_aria news_text'>
                <h1>Books</h1>
                <p>著書紹介</p>
              </div>
              
              {/* ニュースとトピックはボタンにて制御 */}
              {/* データベースより取得、news_textcontentsを生成 */}
              <div className="news_topics_aria">
                 {/* 更新するエリア */}

                 {post.map((books)=>
                <div className='news_textcontents'>
                  <h2>{books.author}</h2>
                  <p>{books.title}</p>
                  <p>{books.publication_info}</p>
                  <hr width="60%"></hr>
                </div>
                )}
                 {/* 更新するエリア */}
                <div className='news_textcontents'>
                  <h2>川波 肇</h2>
                  <p>最近の化学工学－最近の超臨界技術－」分担執筆：超臨界二酸化炭素＋イオン液体を用いる最近の合成技術</p>
                  <p>化学工業社, 2007.</p>
                  <hr width="60%"></hr>
                </div>

              </div>
              
            </div>
          
  
  
  
        </div>
      </main>
    );
  };