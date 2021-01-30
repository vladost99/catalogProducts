import styled from 'styled-components';

export const Button = styled.button`
    font-size: 17px;
    color: #fff;
    width: 150px;
    outline: none;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid #EEC00C;
    padding: 10px;
    margin-right: 10px;
    /* margin: 10px 0; */
    cursor: pointer;
    transition: background .5s;
    background: ${({primary}) => (primary ? '#EEC00C' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#957d1e' : '#EEC00C')};
    }
`;