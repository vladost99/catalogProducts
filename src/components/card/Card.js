import React, {useState} from 'react'
import { 
    CardBtnBuy,
    CardBtnWrapper,
    CardContainer,
    CardDescription,
    CardDiscount,
    CardEditIcon,
    CardFooter,
    CardHeader,
    CardIcon,
    CardImage,
    CardMenuDrop,
    CardMenuItem,
    CardName, 
    CardPrice,
    CardTimer,
    CardTrashIcon,
    CardWrapperImage,
    PriceBlock
} from './CardElements';
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {BiMenuAltRight,BiEdit} from  "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import {BsThreeDotsVertical} from 'react-icons/bs';
import Timer from '../timer/Timer';
import {editField, deleteProduct} from '../../Services/Firebase/firebaseFirestore';
import {deleteImage} from '../../Services/Firebase/firebaseStorage';
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
        const isLoginIn = useSelector(({auth})=> auth.isAdmin);
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
                       {isLoginIn && <CardIcon>
                           {!isDrop ? ( <BiMenuAltRight onClick={handleDrop} size="2em" style={{cursor: 'pointer'}}/>)
                          :
                          ( <AiOutlineClose onClick={handleDrop} size="2em" style={{cursor: 'pointer'}}/>)}
                          </CardIcon>
                           }
                        <CardMenuDrop show={isDrop}>
                           {isLoginIn && isDrop && <CardTrashIcon onClick={() => delCard(id)}><BsTrash size="2em"/></CardTrashIcon>}
                           {isLoginIn && isDrop && <Link to={`/editProduct/${id}`}><CardEditIcon><BiEdit size="2em"/></CardEditIcon></Link>}
                        </CardMenuDrop>
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
