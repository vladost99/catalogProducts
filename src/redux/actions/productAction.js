import {getCard} from '../../Services/Firebase/firebaseFirestore';

export const loading = () => {
    return {
      type: 'LOADING'
    }
  }
  
  export const loaded = () => {
    return {
      type: 'LOADED'
    }
  }
  
  
  export const  itemsLoaded = (newItems) => {
       return {
           type: 'ITEMS_LOADED',
           payload: newItems
       }
  }
  
   export const getItem = (objItem) => {
    return {
      type: 'GET_ITEM',
      payload: objItem
    }
  }
  
  export const getFirebaseItem = (id) => {
    return (dispatch) => {
      return  getCard(id)
              .then(doc => {
                const obj = doc.data();
                dispatch(getItem({...obj, id: doc.id}));
              });
    }
  }
  
  