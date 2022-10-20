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
      });
  }, []);


  return (
    <>
      <div>
        <h1>Page1</h1>
      </div>
    </>
    
  );
};