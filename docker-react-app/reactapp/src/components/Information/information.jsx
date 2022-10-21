import './information.css';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { collection, doc, getDocs, onSnapshot} from "firebase/firestore";
import db from "../../firebase";

export const Information=()=>{
// eslint-disable-next-line
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
      <div>
        <h1>Infomation</h1>
      </div>
    );
  };