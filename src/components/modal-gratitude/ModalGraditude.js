import React from 'react'
import { Modal, ModalWrap, ModalText, ModalIcon } from './ModalGratitudeElements';
import {AiOutlineCheck} from 'react-icons/ai';

function ModalGraditude() {
    return (
        <ModalWrap>
           <Modal>
               <ModalIcon>
                    <AiOutlineCheck/>
               </ModalIcon>
            <ModalText>Благодарим за покупку!</ModalText>
           </Modal>
        </ModalWrap>
    )
}

export default ModalGraditude;
