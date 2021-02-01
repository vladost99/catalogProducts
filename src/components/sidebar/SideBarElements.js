import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #291e6a;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ?'100%': '0')};
    top: ${ ({isOpen}) => (isOpen ?'0' :'-100%')};
`;

export const AvatarWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    margin-bottom: 30px;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    /* &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    } */
`;

export const SidebarWrap = styled.div`
  color: #fff;`;


export const CloseIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
