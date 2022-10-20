import './project.css';
import test_img from './img/test.jpg';
import React from "react";
// import {useCollection} from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import db from "../../firebase";

export const Page1=()=>{

  const [post, setPosts] = useState([]);
  useEffect(() => {
    //データ取得
    const postData = collection(db, "news")
        getDocs(postData).then((snapShot) => {
        console.log(snapShot.docs.map((doc) => ({...doc.data()})))
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() }))) 
      }).catch((error)=>{
        console.log("データの取得に失敗しました");
      });
  }, []);


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

                {/* 保持変数postをmap関数で回してます。表示する数って変えられるんかな？ */}
                <div>
                  {post.map((value)=>{
                  return <div>
                    <div className='project_contents'>
                      <div className='project_contents_text project_aria'>
                        <h1>{value.title}</h1>
                        <p>
                          {value.text}
                        </p>
                      </div>
                      <div className='project_contents_img project_aria'>
                        <img src={test_img} alt=""></img>
                      </div>
                      <hr width="90%"></hr>
                      </div>
                    </div>
                })}</div>
              </div>
          </div>

          {/* 更新エリア */}
          <div className='project_contents'>
            <div className='project_contents_text project_aria'>
              <h1>高圧水素製造技術</h1>
              <p>水素社会に向けて、長年培ってきた高圧技術を駆使し、
                 ギ酸を水素キャリアとする新しい水素製造技術の開発を行っています。
                 特に高圧下でもギ酸脱水素化反応に耐えられる触媒開発や、
                 高圧でも安定した水素を供給できるシステムの開発などを行っています
                （写真は開発した100MPaの高圧水素製造装置）
                 将来はギ酸から作った水素で燃料電池車等を走らせるために基盤技術開発も行っています。
              </p>
            </div>
            <div className='project_contents_img project_aria'>
              <img src={test_img} alt=""></img>
            </div>
            <hr width="90%"></hr>
          </div>
          {/* 更新エリア */}
          {/* 更新エリア */}
          <div className='project_contents'>
            <div className='project_contents_text project_aria'>
              <h1>高圧水素製造技術</h1>
              <p>水素社会に向けて、長年培ってきた高圧技術を駆使し、
                 ギ酸を水素キャリアとする新しい水素製造技術の開発を行っています。
                 特に高圧下でもギ酸脱水素化反応に耐えられる触媒開発や、
                 高圧でも安定した水素を供給できるシステムの開発などを行っています
                （写真は開発した100MPaの高圧水素製造装置）
                 将来はギ酸から作った水素で燃料電池車等を走らせるために基盤技術開発も行っています。
              </p>
            </div>
            <div className='project_contents_img project_aria'>
              <img src={test_img} alt=""></img>
            </div>
            <hr width="90%"></hr>
          </div>
          {/* 更新エリア */}

        </div>
      </main>
    
  );
};