import './project.css';
// import test_img from './img/test.jpg';
import React from "react";
// import {useCollection} from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import {getDownloadURL, ref, listAll} from "firebase/storage";
import { db, storage } from "../../firebase";

export const Page1=()=>{

  const[image, setImage]=useState([]);
  console.log(image);
  console.log(setImage);

  // グローバル配列をおきます。
  const prefixes=[];
  const image_name=[];
  // imgの取得
  const OutImage=(image_name)=>{
    console.log("OutImage関数内のimage_name配列の中身: "+image_name);
    const gsReference = ref(
      storage,
      image_name[0],
    );

    getDownloadURL(gsReference)
    .then((url) =>{
      setImage(url)
    }).catch((error)=>console.log("Errorです。:"+error));
  }

  const listRef = ref(storage, "gs://sanso-kawanami-slab.appspot.com/projects");
  listAll(listRef).then((res)=>{
    res.prefixes.forEach((folderRef)=>{
      prefixes.push(folderRef);
    });
    res.items.forEach((folderRef)=>{
      image_name.push(folderRef);
      console.log("関数内でのimage_name配列の中身: "+image_name);
    })
    console.log("listAll関数内でのimage_name配列の中身: "+image_name[0]);
    OutImage(image_name);
  }).catch((error)=>{
    console.log("エラーですで");
  })

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
            <h1>Projects</h1>
            <h2>研究紹介</h2>
          </div>
  
          <div className='project'>
              <hr width="80%"></hr>
              <div className='news_aria news_text'>
                <h1>Projects</h1>
                <p>研究紹介</p>
              </div>
          </div>
          {/* 更新エリア */}
          {post.map((news, index) => (
            <div className='project_contents' key={index}>
            <div className='project_contents_text project_aria'>
              <h1>{news.title}</h1>
              <p>{news.title}</p>
            </div>
            <div className='project_contents_img project_aria'>
              <img src={image} alt="" />

            </div>
            <hr width="90%"></hr>
          </div>
          ))}
          {/* 更新エリア */}
        </div>
      </main>
    
  );
};