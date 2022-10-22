import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import React, { useState } from 'react'
// import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, set } from "firebase/database";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const Page4=()=>{
  // const user = auth.currentUser;
  const [text, setText] = useState('')
  const [user] = useAuthState(auth)
  // console.log(auth.currentUser.displayName)
  console.log(user)


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
            <button onClick={handleonClickAddButton}>追加</button>
            <div>
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
              <button onClick={() => handleonClickAddButton(text)}>値の確認</button>
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


//投稿用の関数
const handleonClickAddButton = async (text) => {
  await setDoc(doc(db, "users", "1"), {
    food: text,
    name: 'びろ'
  });
}
