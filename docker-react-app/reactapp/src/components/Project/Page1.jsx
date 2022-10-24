import './project.css';
import test_img from './img/test.jpg';
import React from "react";
// import {useCollection} from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import {getDownloadURL, ref} from "firebase/storage";
import { db, firestorage } from "../../firebase";

export const Page1=()=>{

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

  const[image, setImage]=useState([]);
  const gsReference = ref(
    firestorage,
    "gs://sanso-kawanami-slab.appspot.com/AKIRA違い.jpeg",
  );

  getDownloadURL(gsReference)
    .then((url) =>{
      setImage(url)
    })
    .catch((error)=>console.log("Errorです。:"+error));

  return (
      <main>
        <div className='main'>
          <div className='news_animation_aria'>
            <h1>Projects</h1>
            <h2>研究紹介</h2>
          </div>
  
          <div className='project'>
              <hr width="80%"></hr>
              <div className='news_aria news_text'>
                <h1>Projects</h1>
                <p>研究紹介</p>
              </div>
              <img src={image} alt="" />
          </div>
          {/* 更新エリア */}
          {post.map((news, index) => (
            <div className='project_contents' key={index}>
            <div className='project_contents_text project_aria'>
              <h1>{news.title}</h1>
              <p>{news.title}</p>
            </div>
            <div className='project_contents_img project_aria'>
              <img src={test_img} alt=""></img>
            </div>
            <hr width="90%"></hr>
          </div>
          ))}
          {/* 更新エリア */}
        </div>
      </main>
    
  );
};