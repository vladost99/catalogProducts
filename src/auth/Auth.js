import React,{useEffect} from 'react';
import {auth} from '../Services/Firebase/firebaseAuth';
import {authroized,notAuth} from '../redux/actions/authActions';
import {useDispatch} from 'react-redux';
function Auth(props) {
    const dispatch = useDispatch();
    useEffect(() => {
       auth.onAuthStateChanged(user => {
            if (user) {
               /*  console.log(user); */
                dispatch(authroized(user.uid));
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
