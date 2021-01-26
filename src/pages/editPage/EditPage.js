import React,{useEffect} from 'react'
import FormProduct from '../../components/formProduct/FormProduct';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getFirebaseItem} from '../../redux/actions';
function EditPage() {
    //нужно добавить чтобы еще и на сервер и шло
    const name = 'Страница редактирование товара';
    const { id } = useParams();
    const dispatch = useDispatch(); 
    const obj = useSelector(state => state.productItems.find(item => item.id == id));
    
    useEffect(() => {
        dispatch(getFirebaseItem(id));
        console.log(obj);
    }, []);

    return (
        <FormProduct {...obj} namePage={name} editPage={true}/>
    )
}

export default EditPage;
