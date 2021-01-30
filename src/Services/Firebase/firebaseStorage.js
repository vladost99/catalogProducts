import firebase from '../../Environment/environment';
import "firebase/storage";

    const IMAGES = 'images';
    export const storage = firebase.storage();

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