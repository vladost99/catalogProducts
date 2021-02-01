import React from 'react'
import { ErrorText, FormIcon, SignFormControl, SignFormElem, SignFormLabel, SignInForm, SignInInput, SignInName, SignInWrapper } from './SigninElements';
import {Button} from '../Button';
import {AiOutlineUser, AiFillLock, AiOutlineLogin} from 'react-icons/ai';
import { useFormik } from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import {loginUser} from '../../redux/actions/authActions';
import {useHistory, useLocation, Redirect} from 'react-router-dom';
import Preloader from '../preloader/Preloader';
import {BiUserCircle} from "react-icons/bi";

function Signin() {
   const dispatch = useDispatch();
   const history = useHistory();
   const { state } = useLocation();
   const error = useSelector(({auth}) => auth.error);
   const authAdmin = useSelector(({auth}) => auth.isAdmin);
   const isLogin = useSelector(({auth}) => auth.isSignIn);
   const isLoading = useSelector(({auth}) => auth.loading);

   const validate = Yup.object({
        email: Yup.string()
            .email('Некорректний email')
            .required('Заполните поле'),
        password: Yup.string()
            .required('Заполните поле')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/,'Только букви и цифри')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
          },
          validationSchema: validate,
          onSubmit: values => {
            dispatch(loginUser(values.email,values.password,history));
            
          },
    });

    if (isLogin && authAdmin) {
        return <Redirect to={state?.from || '/'}/>
    }
    if (isLogin) {
        return <Redirect to="/"/>
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
               {error && <ErrorText>{error}</ErrorText>}
           </SignInForm>
       </SignInWrapper>
    )
}

export default Signin;
