import React,{useEffect} from 'react';
import {auth} from '../Services/Firebase/firebaseAuth';
import {authroized,notAuth} from '../redux/actions/authActions';
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
