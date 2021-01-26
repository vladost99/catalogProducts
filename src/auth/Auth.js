import React,{useEffect} from 'react';
import {auth} from '../Services/firebaseApi';
import {authroized,notAuth} from '../redux/actions';
import {useDispatch} from 'react-redux';
function Auth(props) {
    const dispatch = useDispatch();
    useEffect(() => {
       auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(authroized(user.email));
            }  else {
                dispatch(notAuth());
            }
        });

    }, []);

    return (
       <>
        {props.children}
       </>
    )
}

export default Auth;
