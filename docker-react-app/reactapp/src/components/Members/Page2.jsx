import './member.css';
import home_image from "./img/my_photo.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

import slideimg1 from "./img/slide1.jpg";
import slideimg2 from "./img/slide2.jpg";
import slideimg3 from "./img/slide3.jpg";
// import styled from "styled-components";



export const Page2=()=>{

  //スライドショー
  const active= [slideimg1, slideimg2, slideimg3];
    let num = -1;
    function slide_time(){
      if (num === 2){
        num = 0;
      } else {
        num++;
      }
      document.getElementById("slide_img").src = active[num];
    }
    setInterval(slide_time, 5000)
  
  //スライドショー

  const [post, setPosts] = useState([]);
  useEffect(() => {
    //データ取得
    const postData = collection(db, "users")
        getDocs(postData).then((snapShot) => {
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
      onSnapshot(postData, (post) => {
        setPosts(post.doc.map((doc) => ({...doc.data() })));
      });
  },[]);

  
  return(
    <main>
      <div className='main'>
        <div className='home_animation_aria'>
          <div className='slide_aria'>
            <img src={ slideimg1 } id="slide_img" className='slider'/>
          </div>
            <h1 id="member_h1">Labo Member</h1>
            <h2 id="member_h2">研究員紹介</h2>
        </div>

        <div>
        <div className='owners_aria'>
          <h1 className='head-border'> 提督 </h1>
        </div>
          <div className='member_profile_aria'>
            <div className='member_profile_img profile_dev'>
                <img src={home_image} alt="" />
            </div>
            <div className='member_profile_textcontents profile_dev'>
                <h1> Hajime Kawanami</h1>
                <h2> 川波 肇</h2>
                <p> ー 国立研究開発法人産業技術総合研究所</p>
                <p> ー 触媒化学融合研究センター</p>
                <p> ー 官能基変換チーム 上級主任研究員</p>
              <div className='contact_aria'>
                <h3>Contact</h3>
                  <p>TEL：</p>
                  <p>E-mail：h-kawanami(@)aist.go.jp</p>
              </div>
              {/* <div className='comment'>
                <h3>Comment</h3>
                
              </div> */}
            </div>
          </div>
        <div className='members_aria'>
          <h1 className='head-border'> 研究員 </h1>
        </div>
        {/* 更新するエリア */}
        {post.map((users)=>(
        <>
          <div className='member_profile_aria'>
            <div className='member_profile_img profile_dev'>
                <img src={home_image} alt="" />
            </div>
            <div className='member_profile_textcontents profile_dev'>
                <h1> {users.name}</h1>
                <h2> {users.user_name}</h2>
                <p> {users.about}</p>
            </div>
          </div>
        </>
        ))}

      </div>
      </div>
    </main>
  );

};