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


export function translateErrorAuth(errorCode) {
    if (errorCode == 'auth/wrong-password') {
      return 'Пароль недействителен или у пользователя нет пароля.';
    }
    if (errorCode == 'auth/user-not-found') {
      return 'Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.';
    }
    if (errorCode == 'auth/email-already-in-use') {
      return 'Адрес электронной почты уже используется другой учетной записью.';
    }
    if (errorCode == 'auth/network-request-failed') {
      return 'Произошла сетевая ошибка';
    }

    return '';
}