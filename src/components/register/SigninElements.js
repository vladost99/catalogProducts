import styled from 'styled-components';

export const SignInWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormIcon = styled.div`
    position: absolute;
    top: -4px;
`;

export const SignInName = styled.h3`
    font-size: 40px;
    color: #fff;
    margin-bottom: 40px;
`;

export const SignInForm = styled.form`
    width: 600px;
    height: 600px;
    background: #291e6a;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const SignFormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const SignFormLabel = styled.label`
    font-size:  30px;
    color: #fff;
`;

export const SignFormElem = styled.span`
    margin-left: 10px;
`;

export const SignInInput = styled.input`
    margin: 20px 0;
    border: 1px solid ${({error}) => (error ? 'red' : 'transparent')};

    outline: none;
    padding: 10px;
    border-radius: 20px;
    transition: .5s;
`;

export const ErrorText = styled.div`
    color: red;
    font-size: 25px;
`
