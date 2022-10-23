import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import React, { useState, useRef } from 'react';
// import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp, collection, addDoc } from "firebase/firestore";
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
              <p>メンバーの名前</p>
              <input value={users} onChange={(event) => setUsers(event.target.value)}/>
            </div>
              {/* フードの追加 */}
            <div>
              <p>フード</p>
              <input value={food} onChange={(event) => setFoods(event.target.value)}/>
            </div>
              {/* コメントの追加 */}
            <div>
              <p>コメント</p>
              <input  value={comments} onChange={(event) => setComments(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_user_AddButton(users,food,comments, inputRef)}>メンバーの追加</button>

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
              <input ref={inputRef} value={publication_info} onChange={(event) => setPublication_info(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
            <div>
              <p>本文</p>
              <input ref={inputRef} value={books_title} onChange={(event) => setBooks_title(event.target.value)}/>
            </div>
            <div>
              <p>著者</p>
              <input ref={inputRef} value={author} onChange={(event) => setAuthor(event.target.value)}/>
            </div>
            <div>
              <p>発行日？</p>
              <input ref={inputRef} value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button onClick={() => handleonClick_Books_AddButton(publication_info,books_title, author, date, inputRef)}>Books</button>

            <h1>Disserの追加</h1>
            {/* タイトルの追加 */}
            <div>
              <p>タイトル</p>
              <input ref={inputRef} value={dissertation_title} onChange={(event) => setDissertation_title(event.target.value)}/>
            </div>
            {/* テキストの追加 */}
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
    times: Timestamp.fromDate(new Date()),
  });
}

//ニュースハンドル
const handleonClick_News_AddButton = async (title, text, inputRef) => {
  await addDoc(collection(db, "news"), {
    editer: auth.currentUser.displayName,
    title: title,
    text: text,
    times: Timestamp.fromDate(new Date()),
  });
}
//トピックハンドル
const handleonClick_Topics_AddButton = async (tp_title, tp_text, inputRef) => {
  await addDoc(collection(db, "topic"), {
    editer: auth.currentUser.displayName,
    title: tp_title,
    text: tp_text,
    times: Timestamp.fromDate(new Date()),
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
//