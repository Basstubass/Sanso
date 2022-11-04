import './project.css';
import noimage from './img/noimage.png';
import React from "react";
// import {useCollection} from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, query, where} from "firebase/firestore";
import {getDownloadURL, ref, listAll} from "firebase/storage";
import { db, storage } from "../../firebase";
import video from "./7768_640x360.mp4";

export const Page1=()=>{


  // storageからURLだけ保存したものをstoreから呼び出している関数
  const [post, setPosts] = useState([]);
  useEffect(() => {
    //データ取得
    const postData = collection(db, "storage_links")
        getDocs(postData).then((snapShot) => {
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
      onSnapshot(postData, (post) => {
        setPosts(post.doc.map((doc) => ({...doc.data() })));
      });
      // post.map((value, index)=>(
      //   // console.log(`1回目のpostの中身${value.link}`)
      // ));
  },[]);

  const[project, setProject]=useState([]);

  useEffect(() => {
    //データ取得
    const project_postData = collection(db, "project")
      getDocs(project_postData).then((snapShot) => {
      setProject(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
      onSnapshot(project_postData, (news_post) => {
      setProject(news_post.doc.map((doc) => ({...doc.data() })));
      });
      // console.log(news_postData)
  },[]);


  const[images, setImages]=useState([]);

  // storageから直接持ってくる関数
  // imgの取得
  useEffect(()=>{
    const fetchImages = async () =>{
      // let result = await storage.ref().child("gs://sanso-kawanami-slab.appspot.com/projects").listAll();
      let result = ref(storage, "gs://sanso-kawanami-slab.appspot.com/projects");

      // listAllでディレクトリの全ての結果を取得できる。全ての結果をメモリにバッファリングする。
      let all_result = await listAll(result);

      // console.log(`resultの中身:${result}`);
      // console.log(`all_resultの中身:${all_result}`);
      // console.log(`itemsの値: ${all_result.items}`);
// ここまで、できてる↑
// imageRef.getDownloadURLからgetDownloadURL(imageRef)に変えたら急にloadImgesまで読み込めた

      let urlPromises = all_result.items.map((imageRef) => {
          let images_urls = getDownloadURL(imageRef);
          // console.log(`imageRefの値: ${imageRef}`);
          // console.log(`images_urlsの値: ${images_urls}`);

          return images_urls;
      });

      // console.log(`urlPromisesの値: ${urlPromises}`);

      console.log("fetchImage関数を処理しました");
      return Promise.all(urlPromises);
    };

    const loadImages = async () =>{
      const urls = await fetchImages();
      // console.log(`loadImagesのurlsの中身:${urls}`);
      setImages(urls);
      
      console.log("loadImages関数を処理しました");
    };
    loadImages();

  },[]);

  console.log(images);

  
  let image_index=-1;
  const hasImage=(project, images)=>{
    // console.log(`image_index:${image_index}`)
    if(project.need_image){
      image_index=image_index+1;
      return <img src={images[image_index]} alt="" />
    }else{
      return <img src={noimage} alt="" />
    }
  }




  return (
      <main>
        <div className='main'>
          <div className='news_animation_aria'>
            {/* <video src={video} autoplay muted></video> */}
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
          {project.map((project, index) => (
            <div className='project_contents' key={index}>
            <div className='project_contents_text project_aria'>
              <h1>{project.title}</h1>
              <p>{project.text}</p>
            </div>
            <div className='project_contents_img project_aria'>
              {hasImage(project, images)}
              {/* <img src={images[index]} alt="" /> */}
            </div>
            <hr width="90%"></hr>
          </div>
          ))}

          {/* 一旦、postをコメントアウト */}
     {/* {post.map((value, index) => (
            <div className='project_contents' key={index}>
            <div className='project_contents_text project_aria'>
              <h1>{value.id}</h1>
              <p>{value.link}</p>
            </div>
            <div className='project_contents_img project_aria'>
              <img src={images[index]} alt="" />
            </div>
            <hr width="90%"></hr>
          </div>
          ))} */}
          
          {/* 更新エリア */}
        </div>
      </main>
    
  );
};