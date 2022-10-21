import { signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { provider } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export const Page4=()=>{
  // const [user] = auth.currentUser;
  // console.log(auth.currentUser.displayName)
  console.log(auth.currentUser)


  return (
    <div>
      <h1>ログイン</h1>
      {/* {user ? ( */}
        <>
          <UserInfo/>
          <div>
            {/* <h1>{auth.currentUser.displayName}</h1> */}
          </div>
          <SignOutbutton/>
        </>
      {/* ): ( */}
        <SignInbutton/>
      {/* )} */}
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
      <p>サインアウト</p>
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
