import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/product/Product'
import {useSelector, useDispatch} from 'react-redux';
import {getFirebaseItem} from '../../redux/actions';
function ProductPage() {
 const { id } = useParams();

 const dispatch = useDispatch(); 
 const obj = useSelector(state => state.productItems.find(item => item.id == id));
 useEffect(() => {
    dispatch(getFirebaseItem(id));
    console.log(obj);
}, []);
    return (
       <>
        <Product {...obj}/>
       </>
    )
}

export default ProductPage;
