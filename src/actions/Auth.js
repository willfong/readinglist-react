import { firebaseAuth, firebaseGoogleProvider } from '../firebase';
import { AUTH_SIGNIN, AUTH_SIGNOUT } from "./types";


export const authSignIn = () => dispatch => {
    firebaseAuth
      .signInWithPopup(firebaseGoogleProvider)
      .then(result => {
          dispatch({
            type: AUTH_SIGNIN,
            payload: result.user
          });
      })
      .catch(error => {
        console.log(error);
    });
};
  
export const authSignOut = () => dispatch => {
    firebaseAuth
        .signOut()
        .then(() => {
            dispatch({
                type: AUTH_SIGNOUT
            });
        })
        .catch(error => {
            console.log(error);
    });
};