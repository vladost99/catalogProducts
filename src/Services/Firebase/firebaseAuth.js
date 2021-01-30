import firebase from '../../Environment/environment';
import "firebase/auth";

export const auth = firebase.auth();


export function logIn(email,password) {
    return auth.signInWithEmailAndPassword(email,password);
  }
  
export function logout() {
    return auth.signOut();
}

export function createUser(email,password) {
 return auth.createUserWithEmailAndPassword(email,password);
}
