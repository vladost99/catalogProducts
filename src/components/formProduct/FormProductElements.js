import styled from 'styled-components';

export const SectionWrapper = styled.div`
   /*  height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`;

export const Form = styled.form`
    background: #291e6a;
    max-width: 700px;
    width: 100%;
    border-radius: 40px;
    padding: 15px;
   /*  height: 700px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormName = styled.h3`
    color: #fff;
    font-size: 30px;
`;

export const FormControl = styled.div`
    margin: 20px 0;
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const FormInputTitle = styled.input.attrs(props => ({
    type: 'text'
}))`
    width: 300px;
    height: 50px;
    outline: none;
    background: none;
    border: 1px solid #fff;
    color: #fff;
`;

export const FormInputDescr = styled.textarea.attrs(props => ({}))`
    outline: none;
    background: none;
    color: #fff;
    width: 300px;
    height: 100px;
    resize: none; 
`;

export const FormUploadImage = styled.input.attrs(props => ({
    type: 'file'
}))`
    width: 300px;
`;

export const FormInputPrice = styled.input.attrs(props => ({
    type: 'number'
}))`
    width: 150px;
    outline: none;
    height: 20px;
    background: none;
    color: #fff;
    border: 1px solid #fff;
`;

export const FormInputPercent = styled.input.attrs(props => ({
    type: 'range',
    min:"10",
    max:"90"
}))`

`;

export const FormInputDate = styled.input.attrs(props => ({
    type: 'datetime-local'
}))``;

export const FormBtn = styled.button`
    width: 250px;
    height: 100px;
    outline: none;
    border: none;
    background: #e38c00;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 20px;
`;


export const FormInputCheck = styled.input.attrs(props => ({
    type: 'checkbox'
}))`
    margin-right: 15px;
`;

export const ErrorText = styled.div`
    color: red;
    font-size: 25px;
`;

export const FormImage = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    height: 200px;
`;
