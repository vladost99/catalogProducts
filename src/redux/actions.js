import {getCard} from '../Services/firebaseApi';
import {logIn} from '../Services/firebaseApi';

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

export const authroized = (user) => {
  return (dispatch) => {
      return dispatch({
        type: 'AUTHORIZED_SUCCESS',
        payload: user
      });
  }
}

export const authorizedEror = () => {
  return (dispatch) => {
      dispatch({
        type: 'AUTHORIZED_FAILURE'
      });
      setTimeout(()=> {
        dispatch(deleteError());
      },1000*3);
  }
}

export const deleteError = () => {
  return {
    type: 'DELETE_ERROR'
  }
}

export const notAuth = () => {
  return (dispatch) => {
    return dispatch({
      type: 'NOT_AUTHORIZED'
    });
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

/* export const signIn = (email,password) => {
  return (dispatch) => {
     logIn(email,password)
          .then( user => {
            //console.log(user.user.email);
            dispatch(signInSuccess(user.user.email));
          })
          .catch(() => dispatch(signInFailure()));
  }
} */


/* export const loadItems = () => {
    return (dispatch) => {
      return  getCards().onSnapshot(
        snaps => {
            const data = [];
            snaps.forEach(doc => {
                const body = doc.data();
                const id = doc.id;
                data.push({...body,id: id});
            });
            dispatch(itemsLoaded(data));
        }
      );
    }
} */