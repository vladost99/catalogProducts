import firebase from '../../Environment/environment';
import "firebase/firestore";

const fireStore = firebase.firestore();
const COLLECT = 'products';

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
 /*  console.log('Отправлено'); */
}

export function deleteProduct(id) {
  fireStore.collection(COLLECT).doc(id).delete();
}

export function editProduct(id,objData) {
  fireStore.collection(COLLECT).doc(id).set(objData);
/*   console.log(id,'Оновлен'); */
}