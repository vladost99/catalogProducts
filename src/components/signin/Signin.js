import React from 'react'
import { ErrorText, FormIcon, SignFormControl, SignFormElem, SignFormLabel, SignInForm, SignInInput, SignInName, SignInWrapper } from './SigninElements';
import {Button} from '../Button';
import {AiOutlineUser, AiFillLock, AiOutlineLogin} from 'react-icons/ai';
import { useFormik } from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import {authorizedEror, loaded, loading} from '../../redux/actions';
import {useHistory, useLocation, Redirect} from 'react-router-dom';
import {logIn} from '../../Services/firebaseApi';
import Preloader from '../preloader/Preloader';
import {BiUserCircle} from "react-icons/bi";
function Signin() {
   const dispatch = useDispatch();
   const history = useHistory();
   const { state } = useLocation();
   const errorLogin = useSelector(state => state.errorLogin);
   const auth = useSelector(state => state.isSignIn);
   const isLoading = useSelector(state => state.isLoading);

   const validate = Yup.object({
        email: Yup.string()
            .email('Некорректний email')
            .required('Заполните поле'),
        password: Yup.string()
            .required('Заполните поле')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/,'только букви и цифри')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
          },
          validationSchema: validate,
          onSubmit: values => {
            dispatch(loading());
            logIn(values.email,values.password)
                .then(() =>{
                     dispatch(loaded());
                     history.push('/');
                    })
                .catch(() => {
                    dispatch(loaded());
                    dispatch(authorizedEror());
                });
          },
    });

    if (auth) {
        return <Redirect to={state?.from || '/'}/>
    }


    return (
       <SignInWrapper>
           <SignInForm onSubmit={formik.handleSubmit}>
               <FormIcon><BiUserCircle size="4em" color="#fff" /></FormIcon>
               <SignInName>Авторизация</SignInName>
               <SignFormControl>
                    
                    <SignFormLabel><AiOutlineUser/><SignFormElem>Логин</SignFormElem></SignFormLabel>
                    <TextField
                    type="text" 
                    id="email"
                    name="email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    placeholder="Введите логин"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
               </SignFormControl>
               <SignFormControl>
                    <SignFormLabel><AiFillLock /><SignFormElem>Пароль</SignFormElem></SignFormLabel>
                    <TextField
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Введите Пароль"
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onChange={formik.handleChange}
                    />
                     {formik.touched.password && formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}
               </SignFormControl>
              {isLoading && <Preloader form={true} />}
               <Button type="submit" primary="true">Войти<AiOutlineLogin/></Button>
               {errorLogin && <ErrorText>аккаунта не має в базі</ErrorText>}
           </SignInForm>
       </SignInWrapper>
    )
}

export default Signin;
