import React, {useState} from 'react'
import { 
    CardBtnBuy,CardBtnWrapper,CardContainer,CardDescription,CardDiscount,CardEditIcon,CardFooter, CardHeader,CardIcon,CardImage,CardMenuDrop,CardMenuItem,CardName, CardPrice,CardTimer,CardTrashIcon,CardWrapperImage,PriceBlock
} from './CardElements';
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {BiMenuAltRight,BiEdit} from  "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import Timer from '../timer/Timer';
import {editField, deleteProduct} from '../../Services/Firebase/firebaseFirestore';
import {deleteImage} from '../../Services/Firebase/firebaseStorage';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addProductCart} from '../../redux/actions/cartActions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    isLoginIn,
    product
}) {
        const [isDrop, setisDrop] = useState(false); //нужное
        const dispatch = useDispatch();
      
        //При окончание таймера отправляет запрос и измняет значение скидки на false
        const delTimer = (value) => {
            editField(id,'isDiscount','endDatePercent','percent',value);
        }

        const delCard = (id) => {
            deleteImage(imageName);
            deleteProduct(id);
            setisDrop(false);
        };

        const addProduct = () => {
            dispatch(addProductCart(product));
        };

        
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
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Описание</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    {description}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                    {/* <CardDescription>
                        {description}
                    </CardDescription> */}
                    <PriceBlock>
                        <CardPrice discount={isDiscount}>{price}$</CardPrice>
                        {isDiscount && <CardDiscount>{priceDiscount}$</CardDiscount>}
                    </PriceBlock>
                    <CardBtnWrapper><CardBtnBuy onClick={addProduct}><AiOutlineShoppingCart style={{margin: '0 10px 0 0'}}/>Купить</CardBtnBuy></CardBtnWrapper>
               {isDiscount && endDatePercent && <CardTimer><Timer delTimer={delTimer}   deadline={endDatePercent}/></CardTimer>}
                </CardFooter>
                
            </CardContainer>
        </>
    )
}

export default Card;
