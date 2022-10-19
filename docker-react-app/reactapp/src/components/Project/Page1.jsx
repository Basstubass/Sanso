import React from "react";
import {useCollection} from "react-firebase-hooks/firestore";
import db from "../../firebase";

const ReadDb=()=>{
  // eslint-disable-next-line
  const [collections, loading, error]= useCollection(db.collection("news"));
  // eslint-disable-next-line array-callback-return
  collections?.docs.map((doc) => {
    console.log(doc.data());
    console.log(doc.id);
  });
}

export const Page1=()=>{
  return (
    <>
      <div>
        <h1>Page1</h1>
      </div>
    </>
    
  );
};