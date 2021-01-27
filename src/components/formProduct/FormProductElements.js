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




/*Preview image */
export const WrapperUpload = styled.div`
    box-sizing:border-box
`;

export const FormUploadImage = styled.input.attrs(props => ({
    type: 'file'
}))`
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;

export const UploadLabel = styled.label`
    position:relative;
    background: rgba(41,30,106,1);
    display:block;
    padding:1em;
    font-size:1.2em;
    width:100%;
    height:3.5em;
    color:#fff;
    cursor:pointer;
    box-shadow:0 1px 3px #0b0b0b;
    margin-bottom: 15px;
    transition: .5s;
    opacity: 1;
    &:hover {
        opacity: 0.6;
    }
    
`;

export const UploadName = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    position: relative;
`;

export const FormImage = styled.img`
    width: 100%;
    display: block;
    /* object-fit: cover; */
    height: 200px;
`;

