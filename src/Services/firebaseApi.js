/* import firebase from "firebase/app"; */
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from '../Environment/environment';


  const COLLECT = 'products'; //имя коллекции в firebase
  const IMAGES = 'images'; //  папка фото в firebase
  // Initialize Firebase


  const fireStore = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();



/*Функции для добавления,удаления,и перезаписи дркументов в firebase */
export  function getCards() {
    const collect = fireStore.collection(COLLECT);
    return  collect;
}

export function getCard(id) {
    return fireStore.collection(COLLECT).doc(id).get(); 
}

export function editField(id,field,field2,field3,value) {
  fireStore.collection(COLLECT).doc(id).update({
    [field]: value,
    [field2]: '',
    [field3]: ''
  });
}

export function addProduct(objData) {
  fireStore.collection(COLLECT).add(objData);
  console.log('Отправлено');
}

export function deleteProduct(id) {
  fireStore.collection(COLLECT).doc(id).delete();
}

export function editProduct(id,objData) {
  fireStore.collection(COLLECT).doc(id).set(objData);
  console.log(id,'Оновлен');
}

/*Функции загрузки фото в storage*/
export function uploadImage(img) {
  const upload = storage.ref(`${IMAGES}/${img.name}`).put(img);
  return upload;
}
export function deleteImage(imgName) {
    storage.ref(`${IMAGES}/${imgName}`).delete();
}

export function downloadImage(imgName) {
 return storage.ref(IMAGES).child(imgName).getDownloadURL();
}



/*Функции для Авторизации */

export function logIn(email,password) {
  return auth.signInWithEmailAndPassword(email,password);
}

export function logout() {
  return auth.signOut();
}

/* export function stateAuth() {

} */





