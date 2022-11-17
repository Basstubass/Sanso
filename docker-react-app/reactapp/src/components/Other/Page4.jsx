import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import React, { useState, useRef } from 'react';
import './other.css';
// import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
// import { db ,firestorage } from "../../firebase";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
// eslint-disable-next-line no-unused-vars
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import dayjs from 'dayjs';
import { string } from "prop-types";


export const Page4=()=>{

  const [loading, setLoading] = useState(false);
  const [isUploading, setUploaded] = useState(false);

  // const [file_url, setFile_url] = useState(false);
   
  ///imgの投稿
  const OnFileUploader = (e) => {
    const file_name = e.target.files[0]
    const storageRef = ref(storage, "image/" + file_name.name);
    const uploadImage = uploadBytesResumable(storageRef, file_name);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setUploaded(true);
      }
    )
  }

  const inputRef = useRef();
  // const user = auth.currentUser;
  //ユーザー追加hooks Stateの多用もっといい方法あるかも
  const [users, setUsers] = useState('')
  const [user_name, setUser_name] = useState('')
  const [about, setAbout] = useState('')
  const [comments, setComments] = useState('')
  //Newsの追加
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  //Topicksの追加
  const [tp_title, setTp_title] = useState('')
  const [tp_text, setTp_text] = useState('')
  //Booksの追加
  const [publication_info, setPublication_info] = useState('')
  const [books_title, setBooks_title] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')

  //Dissertationの追加
  const [dissertation_date, setDissertation_date] = useState('')
  const [dissertation_overviews, setDissertation_overviews] = useState('')
  const [dissertation_quote, setDissertation_quote] = useState('')
  const [dissertation_title, setDissertation_title] = useState('')

  // projectの追加
  const [project_title, setProject_title] = useState('');
  const [project_text, setProject_text] = useState('');
  const [need_image, setNeed_image] = useState(true);

  // 画像追加関数の状態管理する処理
  // const [image, setImage] = useState([]);
  const [patent_date, setPatent_date] = useState('')
  const [project_image, setProject_image]=useState([]);
  const [news_image, setNews_image] = useState([]);

////////////////Storegeに保存する関数/////////////

const handleonClick_Project_AddButton = async (project_title, project_text,need_image, inputRef)=>{
  // dbに追加
  await addDoc(collection(db, "project"),{
    title:project_title,
    text:project_text,
    need_image:need_image,
    times: Timestamp.fromDate(new Date()),
  });
}
  // storageに追加
  const projecthandleSubmit =(e)=>{
    e.preventDefault();
  
    console.log("imageが送信されました");
    const storageRef = ref(storage, 'projects/'+ project_image.name);
    const uploadTask = uploadBytesResumable(storageRef, project_image);

    uploadTask.on('state_changed',(snapshot)=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log('Upload is '+progress+ '% done');
      // eslint-disable-next-line default-case
      switch(snapshot.state){
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },(error)=>{
      // eslint-disable-next-line default-case
      switch(error.code){
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
      }
    },()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        console.log(`File available at`, downloadURL);
      });
    });
  }


  // const handleonClick_News_AddButton = async (news_title, news_text,need_image, inputRef)=>{
  //   // dbに追加
  //   await addDoc(collection(db, "news"),{
  //     title:news_title,
  //     text:news_text,
  //     need_image:need_image,
  //     times: Timestamp.fromDate(new Date()),
  //   });
  // }
    // storageに追加
    const newshandleSubmit =(e)=>{
      e.preventDefault();
    
      console.log("imageが送信されました");
      const storageRef = ref(storage, 'news/'+ news_image.name);
      const uploadTask = uploadBytesResumable(storageRef, news_image);
  
      uploadTask.on('state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('Upload is '+progress+ '% done');
        // eslint-disable-next-line default-case
        switch(snapshot.state){
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },(error)=>{
        // eslint-disable-next-line default-case
        switch(error.code){
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          console.log(`File available at`, downloadURL);
        });
      });
    }


  //ログインhooks
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? (
        // ログイン中
        <>
          <UserInfo/>
          <div className="user_current_aria">
            <h1>ログイン中</h1>
            <img src={auth.currentUser.photoURL} alt="" className="user_info"/>
            <h2 className="user_info">{auth.currentUser.displayName}</h2>
          </div>
          <div className="post_aria">
            <h1>メンバーの追加</h1>
              {/* ユーザーの追加 */}
            <div>
              <p></p>
              <input value={users} onChange={(event) => setUsers(event.target.value)}/>
            </div>
            <div>
              <p>氏名</p>
              <input value={user_name} onChange={(event) => setUser_name(event.target.value)}/>
            </div>
              {/* フードの追加 */}
            <div>
              <p>プロフィールの追加</p>
              <input value={about} onChange={(event) => setAbout(event.target.value)}/>
            </div>
              {/* コメントの追加 */}
            <div>
              <p>コメント</p>
              <input  value={comments} onChange={(event) => setComments(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_user_AddButton(users,user_name,about,comments, inputRef)}>メンバーの追加</button>

            <h1>Newsの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <p>タイトル</p>
              <input ref={inputRef} value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <p>本文</p>
              <input ref={inputRef} value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_News_AddButton(title,text, inputRef)}>News</button>
            <h1>news画像の追加</h1>
            <form onSubmit={newshandleSubmit}>
              <input type='file' onChange={(event)=>setNews_image(event.target.files[0])}/>
              <button className="button">project画像追加</button>
            </form>

            <h1>Topicsの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <p>タイトル</p>
              <input ref={inputRef} value={tp_title} onChange={(event) => setTp_title(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <p>本文</p>
              <input ref={inputRef} value={tp_text} onChange={(event) => setTp_text(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_Topics_AddButton(tp_title,tp_text, inputRef)}>Topics</button>


            <h1>Booksの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <p>タイトル</p>
              <input ref={inputRef} value={books_title} onChange={(event) => setBooks_title(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <p>出版社</p>
              <input ref={inputRef} value={publication_info} onChange={(event) => setPublication_info(event.target.value)}/>
            </div>
            <div>
              <p>著者</p>
              <input ref={inputRef} value={author} onChange={(event) => setAuthor(event.target.value)}/>
            </div>
            <div>
              <p>ID</p>
              <input ref={inputRef} value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_Books_AddButton(publication_info,books_title, author, date, inputRef)}>Books</button>


            <h1>Disserの追加</h1>
            <div>
              <p>タイトル</p>
              <input ref={inputRef} value={dissertation_title} onChange={(event) => setDissertation_title(event.target.value)}/>
            </div>
            <div>
              <p>概要</p>
              <input ref={inputRef} value={dissertation_overviews} onChange={(event) => setDissertation_overviews(event.target.value)}/>
            </div>
            <div>
              <p>quote</p>
              <input ref={inputRef} value={dissertation_quote} onChange={(event) => setDissertation_quote(event.target.value)}/>
            </div>
            <div>
              <p>発行日？</p>
              <input ref={inputRef} value={dissertation_date} onChange={(event) => setDissertation_date(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_Dissertation_AddButton(dissertation_title, dissertation_overviews, dissertation_quote, dissertation_date, inputRef)}>Dissertation</button>


            <h1>Projectの追加</h1>
            <div>
              <p>project_title</p>
              <input ref={inputRef} value={project_title}  onChange = {(event)=>setProject_title(event.target.value)}/>
            </div>
            <div>
              <p>project_text</p>
              <input ref={inputRef} value={project_text}  onChange = {(event)=>setProject_text(event.target.value)}/>
            </div>
            {/* <div>
              <p>画像の有無</p>
              <input type='checkbox' ref={inputRef} value={need_image}  onChange = {(event)=>setNeed_image(event.target.value)}/>
            </div> */}
            {/* <div>
              <p>projectの追加</p>
              <input type='file' ref={inputRef} value={project_image} onChange={(event)=> setProject_image(event.target.files[0])}/>
            </div> */}
            <button onClick={() => handleonClick_Project_AddButton(project_title, project_text, inputRef)}>Projectの追加</button>


            <h1>project画像の追加</h1>
            <form onSubmit={projecthandleSubmit}>
              <input type='file' onChange={(event)=>setProject_image(event.target.files[0])}/>
              <button className="button">project画像追加</button>
            </form>

            {/* <h1>画像の追加</h1>
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleChange} />
              <button className="button">追加</button>
            </form> */}
          
            <h1>国内論文の追加</h1>
            <div>
              <p>国内特許データ</p>
              <input ref={inputRef} value={patent_date} onChange={(event) => setPatent_date(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_Patent_AddButton(patent_date)}>Dissertation</button>

          <div className="image_aria">
            <input className="imageUploader" multiple name="imageURL" type="file" accept=".png, .jpeg, .jpg" onChange={OnFileUploader}/>
          </div>
          <button>
            ファイルの選択
            <input className="imageUploader" multiple name="imageURL" type="file" accept=".png, .jpeg, .jpg" onChange={OnFileUploader}/>
          </button>

          <div>
            {loading ?(
              <h2>アップロード中...</h2>
             ) : (
              <>
               {isUploading ? (
                <>
                <h2>アップロード完了</h2>
                </>
                
               ):(
                <></>
               )}
            </>
            )}
            
          </div>
        </div>
        ):(
          <SignOutbutton/>
        </>
        
      ): (
        <>
         <h1>ログイン</h1>
         <SignInbutton/>
        </>
      )}
    </div>
  );
};

export default Page4;

//サインイン
function SignInbutton(){
  const google_sign = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={google_sign}>
      <p>グーグルアカウントでログイン</p>
    </button>
  )
}
//サインアウト
function SignOutbutton(){
  return (
    <button onClick={() => auth.signOut()}>
      <p>ログアウト</p>
    </button>
  )
}
//ユーザーインフォ キュリオン
function UserInfo(){
  return(
    <>
    <div className="poat_enable">
      <h1>投稿</h1>
    </div>
    </>
  )
}

////////////////投稿用の関数/////////////
//ユーザーハンドル
const handleonClick_user_AddButton = async (users, user_name, about, comments) => {
  await addDoc(collection(db, "users"), {
    name: users,
    user_name: user_name,
    about: about,
    comments: comments,
    times: Timestamp.fromDate(new Date()),
  });
}

//ニュースハンドル
const handleonClick_News_AddButton = async (title, text, inputRef) => {
  await addDoc(collection(db, "news"), {
    editer: auth.currentUser.displayName,
    title: title,
    text: text,
    times: dayjs(new Date()).format('YYYY/MM/DD HH:mm'),

    // times: dayjs(Timestamp.toDate()).format('YYYY/MM/DD HH:mm'),

  });
}
//トピックハンドル
const handleonClick_Topics_AddButton = async (tp_title, tp_text, inputRef) => {
  await addDoc(collection(db, "topic"), {
    editer: auth.currentUser.displayName,
    title: tp_title,
    text: tp_text,
    times: dayjs(new Date()).format('YYYY/MM/DD HH:mm'),
  });
}
//ブックハンドル
const handleonClick_Books_AddButton = async (publication_info, books_title, author, date, inputRef) => {
  await addDoc(collection(db, "books"), {
    author: author,
    publication_info: publication_info,
    title: books_title,
    date: date
  });
}
//ddissertationsハンドル
const handleonClick_Dissertation_AddButton = async (dissertation_title, dissertation_overviews, dissertation_quote, dissertation_date, inputRef) => {
  await addDoc(collection(db, "dissertation"), {
    title: dissertation_title,
    quote: dissertation_quote,
    overview: dissertation_overviews,
    date: dissertation_date
  });

}
const handleonClick_Patent_AddButton = async (patent_date) => {
  await addDoc(collection(db, "patent"), {
    text: patent_date,
    times:Timestamp.fromDate(new Date()),
  });
}
//