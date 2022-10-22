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
  const [users, setUsers] = useState('')
  const [food, setFoods] = useState('')
  // let users_data = [users, food]

  const [user] = useAuthState(auth)
  // console.log(auth.currentUser.displayName)


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
            <button onClick={handleonClick_user_AddButton}>追加</button>

            {/* ユーザーの追加 */}
            <div>
            <input value={users} onChange={(event) => setUsers(event.target.value)}/>
            </div>
            {/* フードの追加 */}
            <div>
            <input value={food} onChange={(event) => setFoods(event.target.value)}/>
              <button onClick={() => handleonClick_user_AddButton(users,food)}>フードの追加</button>
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



////////////////投稿用の関数
const handleonClick_user_AddButton = async (users, food) => {
  console.log(users)


  await setDoc(doc(db, "users", "1"), {
    food: users,
    name: food
  });
}
