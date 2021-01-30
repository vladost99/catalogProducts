import React, { useEffect } from 'react'
import { CatalogList,Section } from './CatalogElements';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/card/Card';
import {itemsLoaded, loading} from '../../redux/actions/productAction';
import {getCards} from '../../Services/Firebase/firebaseFirestore';
import Preloader from '../../components/preloader/Preloader';

function Catalog() {
 const dispatch = useDispatch();
 const items = useSelector(({product}) => product.productItems);
 const isLoading = useSelector(({product}) => product.isLoading); 
 useEffect(() => {
  dispatch(loading());
  const unsubscribe = getCards().onSnapshot(
        snaps => {
            const data = [];
            snaps.forEach(doc => {
                const body = doc.data();
                const id = doc.id;
                data.push({...body,id: id});
            });
            dispatch(itemsLoaded(data));
        }
      );
      return () => {
        unsubscribe();
      }
 }, []);

 const list = items.map((item,id) => {
   return <Card key={id} {...item}/>
 });
    
    return (
      <>
            <Section>
               {isLoading && <Preloader/>}
                     <CatalogList>
                        {list} 
                    </CatalogList> 
            </Section>
      </>      
    )
}

export default Catalog;
