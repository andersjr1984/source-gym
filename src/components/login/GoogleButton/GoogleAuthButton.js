import React from 'react';
//import firebase, { auth } from '../../../utils/Firebase'
import googleLogo from './btn_google_dark_focus_ios.svg'

export const GoogleAuthButton = (props) => {
  const googleSignIn = async () => {
    alert('this will sign you in with googs')
    // const authProRef =new firebase.auth.GoogleAuthProvider();
    // try{
    //   await auth.signInWithPopup(authProRef)
    //   props.setRedirect(true);
    // } catch (error) {
    //   console.error(error)
    // };
  }

  return (
    <div className="google-auth-button" onClick={googleSignIn}>
      <div className="logo-container">
        <img src={googleLogo} alt="google logo"/>
      </div>
      <span className="button-text">
        Sign in with Google
      </span>
    </div>
  )
}