import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import React, { useState, useRef } from 'react'
// import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, set } from "firebase/database";

import { doc, setDoc, Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const Page4=()=>{

  const inputRef = useRef();
  // const user = auth.currentUser;
  //ユーザー追加hooks Stateの多用もっといい方法あるかも
  const [users, setUsers] = useState('')
  const [food, setFoods] = useState('')
  const [comments, setComments] = useState('')
  //Newsの追加
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  //Topicksの追加
  const [tp_title, setTp_title] = useState('')
  const [tp_text, setTp_text] = useState('')




  //ログインhooks
  const [user] = useAuthState(auth)


  return (
    <div>
      <h1>ログイン</h1>

      {user ? (
        // ログイン中
        <>
          <UserInfo/>
          <div>
            <h1>{auth.currentUser.displayName}</h1>
          </div>
          <div className="post_aria">

            <h1>メンバーの追加</h1>
              {/* ユーザーの追加 */}
            <div>
              <input value={users} onChange={(event) => setUsers(event.target.value)}/>
            </div>
              {/* フードの追加 */}
            <div>
              <input value={food} onChange={(event) => setFoods(event.target.value)}/>
            </div>
              {/* コメントの追加 */}
            <div>
              <input  value={comments} onChange={(event) => setComments(event.target.value)}/>
                <button onClick={() => handleonClick_user_AddButton(users,food,comments, inputRef)}>メンバーの追加</button>
            </div>

            <h1>Newsの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <input ref={inputRef} value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <input ref={inputRef} value={text} onChange={(event) => setText(event.target.value)}/>
              <button onClick={() => handleonClick_News_AddButton(title,text, inputRef)}>News</button>
            </div>

            <h1>Topicsの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <input ref={inputRef} value={tp_title} onChange={(event) => setTp_title(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <input ref={inputRef} value={tp_text} onChange={(event) => setTp_text(event.target.value)}/>
              <button onClick={() => handleonClick_Topics_AddButton(tp_title,tp_text, inputRef)}>Topics</button>
            </div>




          </div>

          <SignOutbutton/>
        </>
      ): (
        <>
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
    Hello
    </>
  )
}

////////////////投稿用の関数/////////////
//ユーザーハンドル
const handleonClick_user_AddButton = async (users, food, comments) => {
  await addDoc(collection(db, "users"), {
    name: users,
    food: food,
    comments: comments,
    times: Timestamp.fromDate(new Date("December 10, 1815")),
  });
}

//ニュースハンドル
const handleonClick_News_AddButton = async (title, text, inputRef) => {
  await addDoc(collection(db, "news"), {
    editer: auth.currentUser.displayName,
    title: title,
    text: text,
    times: Timestamp.fromDate(new Date("December 10, 1815")),
  });
}
//トピックハンドル
const handleonClick_Topics_AddButton = async (tp_title, tp_text, inputRef) => {
  await addDoc(collection(db, "topic"), {
    editer: auth.currentUser.displayName,
    title: tp_title,
    text: tp_text,
    times: Timestamp.fromDate(new Date("December 10, 1815")),
  });
}