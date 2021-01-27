import React, {useState} from 'react'
import { 
    CardBtnBuy,
    CardBtnWrapper,
    CardContainer,
    CardDescription,
    CardDiscount,
    CardFooter,
    CardHeader,
    CardImage,
    CardMenuDrop,
    CardMenuItem,
    CardName, 
    CardPrice,
    CardTimer,
    CardWrapperImage,
    PriceBlock
} from './CardElements';
import {AiOutlineShoppingCart} from "react-icons/ai";

import {BsThreeDotsVertical} from 'react-icons/bs';
import Timer from '../timer/Timer';
import {editField, deleteProduct, deleteImage} from '../../Services/firebaseApi';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Card({
    price,
    title,
    percent,
    isDiscount,
    description,
    imageUrl,
    endDatePercent,
    imageName,
    id,
}) {
        const isLoginIn = useSelector(state => state.isSignIn);
        const [isDrop, setisDrop] = useState(false); //нужное

      
        //При окончание таймера отправляет запрос и измняет значение скидки на false
        const delTimer = (value) => {
            editField(id,'isDiscount','endDatePercent','percent',value);
        }

        const delCard = (id) => {
            deleteImage(imageName);
            deleteProduct(id);
            setisDrop(false);
        }

        
        const handleDrop = () => {
            setisDrop(!isDrop);
        };

        const priceDiscount = Math.round(price - (price*(percent/100)));
         
    return (
        <>
            <CardContainer>
                <CardHeader>
                    <CardName to={`/product/${id}`}>{title}</CardName>
                       {isLoginIn && <BsThreeDotsVertical onClick={handleDrop} size="2em" style={{cursor: 'pointer'}}/>}
                        {isLoginIn && <CardMenuDrop show={isDrop}>
                            <CardMenuItem onClick={() => delCard(id)}>Удалить</CardMenuItem>
                            <CardMenuItem><Link to={`/editProduct/${id}`}>Редактировать</Link></CardMenuItem>
                        </CardMenuDrop>}
                </CardHeader>
                <CardWrapperImage>
                    <CardImage src={imageUrl} alt="Фото продукта" />
                </CardWrapperImage>
                <CardFooter>
                    <CardDescription>
                        {description}
                    </CardDescription>
                    <PriceBlock>
                        <CardPrice discount={isDiscount}>{price}$</CardPrice>
                        {isDiscount && <CardDiscount>{priceDiscount}$</CardDiscount>}
                    </PriceBlock>
                    <CardBtnWrapper><CardBtnBuy><AiOutlineShoppingCart style={{margin: '0 10px 0 0'}}/> Купить</CardBtnBuy></CardBtnWrapper>
               {isDiscount && endDatePercent && <CardTimer><Timer delTimer={delTimer}   deadline={endDatePercent}/></CardTimer>}
                </CardFooter>
                
            </CardContainer>
        </>
    )
}

export default Card;
