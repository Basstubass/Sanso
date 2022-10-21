import './member.css';
import home_image from "./img/my_photo.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";


export const Page2=()=>{

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
          <h1>Labo Member</h1>
          <h2>研究員紹介</h2>
        </div>
        <div>
        <div className='owners_aria'>
          <h1 className='head-border'> 提督 </h1>
        </div>
          <div className='member_profile_aria'>
            <div className='member_profile_textcontents profile'>
                <h1> Hajime Kawanami</h1>
                <h2> 川波 肇</h2>
                <p> ー 国立研究開発法人産業技術総合研究所</p>
                <p> ー 触媒化学融合研究センター</p>
                <p> ー 官能基変換チーム 上級主任研究員</p>
            </div>
            <h3>Comments</h3>
              <div className='members_comments' id="story" name="story"rows="5" cols="33">
                <p>It was a dark and stormy night...wwwwwwwwwwwwwwwwwwwwwdsdasddssdfsdfsdfwfdfw sdfsadfsdfsdfsdfsdfsdfdf</p>
              </div>
            <div className='member_profile_img profile'>
                <img src={home_image} alt="" />
            </div>
          </div>
        {/* 更新するエリア */}

        <div className='members_aria'>
          <h1 className='head-border'> 研究員 </h1>
        </div>
        
        {/* 更新するエリア */}
        {post.map((users)=>(
        <div>
        <div className='member_profile_aria'>
            <div className='member_profile_textcontents profile'>
                <h1> {users.name}</h1>
                <h2> {users.name}</h2>
                <p> {users.food}</p>
                <p> {users.food}</p>
                <p> {users.food}</p>
            </div>
            <h3>Comments</h3>
              <div className='members_comments' id="story" name="story"rows="5" cols="33">
                <p>It was a dark and stormy night...wwwwwwwwwwwwwwwwwwwwwdsdasddssdfsdfsdfwfdfw sdfsadfsdfsdfsdfsdfsdfdf</p>
              </div>
            <div className='member_profile_img profile'>
                <img src={home_image} alt="" />
            </div>
          </div>
          </div>
        ))}

        {/* 更新するエリア */}
        <div className='member_profile_aria'>
            <div className='member_profile_textcontents profile'>
                <h1> Hajime Kawanami</h1>
                <h2> 川波 肇</h2>
                <p> ー 国立研究開発法人産業技術総合研究所</p>
                <p> ー 触媒化学融合研究センター</p>
                <p> ー 官能基変換チーム 上級主任研究員</p>
            </div>
            <h3>Comments</h3>
              <div className='members_comments' id="story" name="story"rows="5" cols="33">
                <p>It was a dark and stormy night...wwwwwwwwwwwwwwwwwwwwwdsdasddssdfsdfsdfwfdfw sdfsadfsdfsdfsdfsdfsdfdf</p>
              </div>
            <div className='member_profile_img profile'>
                <img src={home_image} alt="" />
            </div>
          </div>

      </div>
      </div>
    </main>
  );
};