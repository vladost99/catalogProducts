export const authLoading = () => {
    return {
      type: 'AUTH_LOADING'
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
  
  
  
  