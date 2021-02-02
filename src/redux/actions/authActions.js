import {createUser} from '../../Services/Firebase/firebaseAuth';
import {writeUser,getUser} from '../../Services/Firebase/firebaseFirestore';
import {logIn, translateErrorAuth} from '../../Services/Firebase/firebaseAuth';
export const authLoading = () => {
    return {
      type: 'AUTH_LOADING'
    }
  }

  
  export const notAuth = () => {
    return (dispatch) => {
      return dispatch({
        type: 'NOT_AUTHORIZED'
      });
    }
  }
  
  export const authroized = (userUid) => {
    return (dispatch) => {
        getUser(userUid)
          .then(doc => {
            const user = {
              uid: doc.id,
              ...doc.data(),
              password: ''
            };
           /*  console.log(user); */
            dispatch({
              type: 'AUTHORIZED_SUCCESS',
              payload: user
            });
          })
          .catch(error => console.log(error));
    }
  }
  


  export const registerUser = (email,password,history) => {
    return dispatch => {
      dispatch(authLoading());
      createUser(email,password)
        .then((userUID) => {
          /* console.log(userUID); */
            const user = {
          
              userName: email,
              password: password,
              isAdmin: false
            };
            dispatch({type: 'USER_CREATE'});
            writeUser(user,userUID.user.uid);
            history.push('/');
        })
        .catch(error => {
         dispatch(registerEror(translateErrorAuth(error.code)));
         console.log(error);
        });
    }
  }

 export const loginUser = (email,password,history) => {
   return dispatch => {
    dispatch(authLoading());
     logIn(email,password)
        .then(() => history.push('/'))
        .catch(error => {
          console.log(error);
          dispatch(authorizedEror(translateErrorAuth(error.code)));
        });
   }
 } 

  export const authorizedEror = (error) => {
    return (dispatch) => {
        dispatch({
          type: 'AUTHORIZED_FAILURE',
          payload: error
        });
        setTimeout(()=> {
          dispatch({type: 'DELETE_ERROR'});
        },1000*6);
    }
  }

  export const registerEror = (error) => {
    return (dispatch) => {
        dispatch({
          type: 'CREATE_USER_FAILURE',
          payload: error
        });
        setTimeout(()=> {
          dispatch({type: 'DELETE_ERROR'});
        },1000*6);
    }
  }





  

  
 
  
  
  
  