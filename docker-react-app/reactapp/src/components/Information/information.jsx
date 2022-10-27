import './information.css';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {init, send} from '@emailjs/browser';
// eslint-disable-next-line
import { collection, doc, getDocs, onSnapshot} from "firebase/firestore";
// import {db} from "../../firebase.js";
// eslint-disable-next-line no-unused-vars
import { getStaticContextFromError } from '@remix-run/router';

export const Information=()=>{
  const [name, setName] = useState(''); // 「ご氏名」の部分
  const [company, setCompany] = useState(''); // 「会社名」の部分
  const [mail, setMail] = useState(''); // 「メールアドレス」の部分
  const [title, setTitle] = useState(''); // 「件名」の部分
  const [message, setMessage] = useState(''); // 「お問い合わせ内容」の部分

  const sendMail= async () => {
    const userID = "l2AAT_jVuPpZMYmYt";
    const serviceID = "service_n19pjlv";
    const templateID = "template_deupg0a";

    if(userID && serviceID && templateID){
      // emailJS初期化
      init(userID);
      // email送信データを定義
      const params = {
        to_name: name,
        company: company,
        from_email: mail,
        title: title,
        message: message,
      };

      try{
        send(serviceID, templateID, params).then(() => {
        window.alert('お問い合わせを送信致しました。');
    
        setName('');
        setCompany('');
        setMail('');
        setMessage('');
        setTitle('');
      });
      }catch(error){
        alert('fail: '+error);
      }
    }
  }

    const handleClick = (e) => {
      e.preventDefault();
      sendMail();
    };
  
    const handleCanceled = () => {
      setName('');
      setCompany('');
      setMail('');
      setMessage('');
      setTitle('');
    };
    const disableSend = name === '' || mail === '' || title === '' || message === '';


  // 一旦この関数には死んでもらおう
  // const [post, setPosts] = useState([]);
  // useEffect(() => {
  //   //データ取得
  //   const postData = collection(db, "news")
  //       getDocs(postData).then((snapShot) => {
  //       setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //     });

  //     onSnapshot(postData, (post) => {
  //       setPosts(post.doc.map((doc) => ({...doc.data() })));
  //     });
    
  // },[]);

    return (
      <div>
        <h1>Infomation</h1>

        <div className="mainContent">
          <h2 className="pageTitle">お問い合わせ</h2>
          <div className="contentsBox">
            <p>
              お問い合わせは、以下のフォームから受け付けております。
              <br />
              SNSからのコンタクトでも大丈夫や!!
            </p>
            <form>
              <div>
                <label htmlFor="nameForm">ご氏名：</label>
              </div>
              <input
                type="text"
                id="nameForm"
                className="formInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div>
                <label htmlFor="companyNameForm">会社名：</label>
              </div>
              <input
                type="text"
                id="companyNameForm"
                className="formInput"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <div>
                <label htmlFor="mailForm">メールアドレス：</label>
              </div>
              <input
                type="email"
                id="mailForm"
                className="formInput"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <div>
                <label htmlFor="mailTitleForm">件名：</label>
              </div>
              <input
                type="text"
                id="mailTitleForm"
                className="formInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div>
                <label htmlFor="mailContentForm">お問い合わせ内容：</label>
              </div>
              <textarea
                type="text"
                id="mailContentForm"
                className="formInput"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="btns">
                <div>
                  <button
                    variant="contained"
                    color="default"
                    endIcon={<sendIcon />}
                    onClick={handleClick}
                    disabled={disableSend}
                  >
                    <strong>お問い合わせを送信する</strong>
                  </button>
                </div>
                <div>
                  <button
                    variant="contained"
                    color="default"
                    endIcon={<clearIcon />}
                    onClick={handleCanceled}
                  >
                    <strong>キャンセル</strong>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  };